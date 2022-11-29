<template>
  <div class="report_view">
    <div class="logo">
      <img src="~/assets/imgs/logo.svg" alt="logo" />
      <div class="logo_text">
        <h1>DAT</h1>
        <p>Digital Forensic</p>
        <p>Ability Test</p>
      </div>
    </div>
    <div class="title_panel">
      <h1>디지털 포렌식 역량평가 결과지</h1>
    </div>
    <div class="result_panel">
      <div class="user_data_panel">
        <table>
          <tr>
            <th>이름</th>
            <th>생년월일</th>
            <th>전화번호</th>
            <th>응시회차</th>
            <th>수험번호</th>
          </tr>
          <tr>
            <td>{{ userData.user_name }}</td>
            <td>{{ userBirth }}</td>
            <td>{{ userData.user_tell }}</td>
            <td>{{ receiptRound }}</td>
            <td>{{ route.query.number }}</td>
          </tr>
        </table>
      </div>
      <div class="scorecard_panel_1_37">
        <div class="scorecard_category">Windows Artifacts</div>
        <table>
          <tr>
            <th>문항번호</th>
            <th>채점</th>
            <th>분류</th>
            <th>난이도</th>
            <th>정답률</th>
          </tr>
          <template v-for="(i, n) in 36" :key="n">
            <tr>
              <td>{{ reportData[i]?.receipt_judge_number }}</td>
              <td>{{ reportData[i]?.result_answer_correct ? "O" : "X" }}</td>
              <td>{{ reportData[i]?.judge_type ? "싱글" : "멀티" }}</td>
              <td>{{ judgeDifficult[reportData[i]?.judge_difficulty] }}</td>
              <td>{{ reportData[i]?.report_correct_answer_rate }}%</td>
            </tr>
          </template>
        </table>
      </div>
      <div class="scoreboard_panel">
        <table>
          <tr>
            <th>Windows Artifacts</th>
            <th>Web, App, Cloud</th>
            <th>총 점수</th>
          </tr>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
      </div>
      <div class="scorecard_panel_38_50">
        <table>
          <tr>
            <th>문항번호</th>
            <th>채점</th>
            <th>분류</th>
            <th>난이도</th>
            <th>정답률</th>
          </tr>
          <template v-for="(i, n) in 13" :key="n">
            <tr>
              <td>{{ reportData[i + 36]?.receipt_judge_number }}</td>
              <td>
                {{ reportData[i + 36]?.result_answer_correct ? "O" : "X" }}
              </td>
              <td>{{ reportData[i + 36]?.judge_type ? "싱글" : "멀티" }}</td>
              <td>
                {{ judgeDifficult[reportData[i + 36]?.judge_difficulty] }}
              </td>
              <td>{{ reportData[i + 36]?.report_correct_answer_rate }}%</td>
            </tr>
          </template>
        </table>
      </div>
      <div class="scorecard_panel_51_70">
        <div class="scorecard_category">Web / App / Cloud</div>
        <table>
          <tr>
            <th>문항번호</th>
            <th>채점</th>
            <th>분류</th>
            <th>난이도</th>
            <th>정답률</th>
          </tr>
          <template v-for="(i, n) in 20" :key="n">
            <tr>
              <td>{{ reportData[i + 49]?.receipt_judge_number }}</td>
              <td>
                {{ reportData[i + 49]?.result_answer_correct ? "O" : "X" }}
              </td>
              <td>{{ reportData[i + 49]?.judge_type ? "싱글" : "멀티" }}</td>
              <td>
                {{ judgeDifficult[reportData[i + 49]?.judge_difficulty] }}
              </td>
              <td>{{ reportData[i + 49]?.report_correct_answer_rate }}%</td>
            </tr>
          </template>
        </table>
      </div>
    </div>
    <p class="page_num">1 / 4</p>
    <img
      class="dummy"
      src="https://cdn.discordapp.com/attachments/932980211098730537/1047163422871134298/image.png"
    />
    <img
      class="dummy"
      src="https://cdn.discordapp.com/attachments/932980211098730537/1047166492254412910/image.png"
    />
    <img
      class="dummy"
      src="https://cdn.discordapp.com/attachments/932980211098730537/1047166633472434276/image.png"
    />
  </div>
</template>

<script lang="ts" setup>
import Chart from "chart.js/auto";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { getUserData } from "~/composables/userData";
import { getRound } from "~/composables/receiptRound";
import { getReportData } from "~/composables/reportData";
import { User } from "~/interfaces/user";
import { ReportData } from "~/interfaces/report";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const route = useRoute();
const userData = (await getUserData()) as User;
const userBirth = computed(() => {
  return new Date(userData.user_birth).toLocaleDateString().replace(/ /g, "");
});
const receiptRound = await getRound(route.query.number as string);
const reportData: ReportData[] = await getReportData(
  route.query.number as string,
);
const judgeDifficult = ["하", "중", "상"];

onMounted(() => {
  // const ctx = document.getElementById("myChart") as HTMLCanvasElement;
  // new Chart(ctx, {
  //   type: "bar",
  //   data: {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [
  //       {
  //         label: "# of Votes",
  //         data: [12, 19, 3, 5, 2, 3],
  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  // });
  html2canvas(document.querySelector(".panel")).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.addPage();
    let img = new Image();
    img.src = "/assets/imgs/image2.png";
    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.addPage();
    img.src = "/assets/imgs/image3.png";
    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.addPage();
    img.src = "/assets/imgs/image4.png";
    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.save("report.pdf");
  });
});

// eslint-disable-next-line no-undef
definePageMeta({
  layout: "report-page",
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/report/style.scss";
</style>
