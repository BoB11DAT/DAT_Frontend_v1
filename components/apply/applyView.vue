<template>
  <div class="apply_view">
    <h1 class="title">평가 응시</h1>
    <div class="apply_panel">
      <table>
        <th>응시 가능 기간</th>
        <th>응시 회차</th>
        <th>수험번호</th>
        <th>평가 선택</th>
      </table>
      <table>
        <template
          v-for="(registrationHistory, n) in props.registrationHistorys"
          :key="n"
        >
          <tr>
            <td>
              {{
                new Date(
                  registrationHistory.receipt_available_start_date,
                ).toLocaleDateString()
              }}
              ~
              {{
                new Date(
                  registrationHistory.receipt_available_end_date,
                ).toLocaleDateString()
              }}
            </td>
            <td>{{ registrationHistory.receipt_round }}</td>
            <td>{{ registrationHistory.receipt_registration_number }}</td>
            <td>
              <input
                v-model="selectedRound"
                type="radio"
                name="round"
                :value="n"
              />
            </td>
          </tr>
        </template>
      </table>
      <hr />
      <template
        v-if="typeof selectedRound === 'number' && registrationHistorys"
      >
        <div class="agreement_box">
          <input id="agreement" v-model="agreement" type="checkbox" />
          <label for="agreement">
            응시하려는 회차는 [{{
              registrationHistorys[selectedRound]?.receipt_round
            }}]이며, 응시가능기간은 [{{
              new Date(
                registrationHistorys[
                  selectedRound
                ]?.receipt_available_start_date,
              ).toLocaleDateString()
            }}
            ~
            {{
              new Date(
                registrationHistorys[selectedRound]?.receipt_available_end_date,
              ).toLocaleDateString()
            }}]임을 확인했습니다.
          </label>
        </div>
      </template>
      <button
        class="apply_button"
        :class="{ disabled: !agreement }"
        @click="apply"
      >
        응시하기
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, PropType } from "vue";
import { useCookie } from "#app";
import {
  ReceiptRegistration,
  ReceiptRegistrationCookie,
} from "~/assets/interfaces/receipt";
import { applyReceipt } from "~/api/receipt";

// eslint-disable-next-line no-undef
const config = useRuntimeConfig();

const props = defineProps({
  registrationHistorys: {
    type: Array as PropType<ReceiptRegistration[]>,
    required: true,
  },
});

let selectedRound = ref(0);
let agreement = ref(false);

async function apply() {
  if (typeof selectedRound.value === "number") {
    const receipt_registration_number =
      props.registrationHistorys[selectedRound.value]
        .receipt_registration_number;
    applyReceipt({ receipt_registration_number }).then(
      (res: ReceiptRegistrationCookie) => {
        const cookie = useCookie("receiptRegistrationNumber", {
          domain: config.public.ServiceDomain,
          httpOnly: process.env.NODE_ENV === "production",
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 7,
        });
        cookie.value = res.receiptRegistrationNumber;
      },
    );
    window.open("/applying", "_blank");
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/apply/apply/style.scss";
</style>
