<template>
  <div>
    <div id="panel1" class="report_view">
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
            <template v-for="(i, n) in 37" :key="n">
              <tr>
                <td>{{ reportData[i - 1]?.receipt_judge_number }}</td>
                <td>
                  {{ reportData[i - 1]?.result_answer_correct ? "O" : "X" }}
                </td>
                <td>{{ reportData[i - 1]?.judge_type ? "싱글" : "멀티" }}</td>
                <td>
                  {{ judgeDifficult[reportData[i - 1]?.judge_difficulty] }}
                </td>
                <td>{{ reportData[i - 1]?.report_correct_answer_rate }}%</td>
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
              <td>{{ reportScore.winscore * 2 }}</td>
              <td>{{ reportScore.appscore * 2 }}</td>
              <td>{{ reportScore.score * 2 }}</td>
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
    </div>
    <div id="panel2" class="report_view report_view2">
      <div class="title_panel2">
        <h1>문항별 벡터</h1>
      </div>
      <div class="scorecard_category">Windows Artifacts</div>
      <div class="result_panel2">
        <div class="graph_grid_1">
          <template v-for="(i, n) in 13" :key="n">
            <div class="graph">
              <div class="graph_top">
                <div class="vector_num">{{ i }}</div>
                <p class="explanation">나의 풀이</p>
                <div
                  class="correct_box"
                  :class="{
                    incorrect: !reportData[i - 1].result_answer_correct,
                  }"
                >
                  <span v-if="reportData[i - 1].result_answer_correct"
                    >정답</span
                  >
                  <span v-else>오답</span>
                </div>
                <div class="vector_box">
                  {{ vectorItems[userVectors[i]?.userVector - 1] }}
                </div>
              </div>
              <div class="graph_data_panel">
                <div class="vector_panel">
                  <template v-for="(j, o, index) in reportVectors[i]" :key="o">
                    <div class="vector">
                      <div class="label" :class="`label_color${index}`"></div>
                      <p>{{ checkNan(o) ? o : "-" }}</p>
                    </div>
                  </template>
                </div>
                <div class="graph_panel">
                  <template v-for="(j, o, index) in reportVectors[i]" :key="o">
                    <div>
                      <div
                        class="graph_bar"
                        :class="`label_color${index}`"
                        :style="{
                          borderRight: `${
                            125 - 125 * (j / 100)
                          }px solid #D9D9D9`,
                        }"
                      ></div>
                      <p>{{ j }}%</p>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="graph_grid_2">
          <template v-for="(i, n) in 13" :key="n">
            <div class="graph">
              <div class="graph_top">
                <div class="vector_num">{{ i + 13 }}</div>
                <p class="explanation">나의 풀이</p>
                <div
                  class="correct_box"
                  :class="{
                    incorrect: !reportData[i + 12].result_answer_correct,
                  }"
                >
                  <span v-if="reportData[i + 12].result_answer_correct"
                    >정답</span
                  >
                  <span v-else>오답</span>
                </div>
                <div class="vector_box">
                  {{ vectorItems[userVectors[i + 13]?.userVector - 1] }}
                </div>
              </div>
              <div class="graph_data_panel">
                <div class="vector_panel">
                  <template
                    v-for="(j, o, index) in reportVectors[i + 13]"
                    :key="o"
                  >
                    <div class="vector">
                      <div class="label" :class="`label_color${index}`"></div>
                      <p>{{ checkNan(o) ? o : "-" }}</p>
                    </div>
                  </template>
                </div>
                <div class="graph_panel">
                  <template
                    v-for="(j, o, index) in reportVectors[i + 13]"
                    :key="o"
                  >
                    <div>
                      <div
                        class="graph_bar"
                        :class="`label_color${index}`"
                        :style="{
                          borderRight: `${
                            125 - 125 * (j / 100)
                          }px solid #D9D9D9`,
                        }"
                      ></div>
                      <p>{{ j }}%</p>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <p class="page_num">2 / 4</p>
    </div>
    <div id="panel3" class="report_view report_view2">
      <div class="title_panel2">
        <h1>문항별 벡터</h1>
      </div>
      <div class="scorecard_category">Windows Artifacts</div>
      <div class="result_panel2">
        <div class="graph_grid_1">
          <template v-for="(i, n) in 13" :key="n">
            <div class="graph">
              <div class="graph_top">
                <div class="vector_num">{{ i + 26 }}</div>
                <p class="explanation">나의 풀이</p>
                <div
                  class="correct_box"
                  :class="{
                    incorrect: !reportData[i + 25].result_answer_correct,
                  }"
                >
                  <span v-if="reportData[i + 25].result_answer_correct"
                    >정답</span
                  >
                  <span v-else>오답</span>
                </div>
                <div class="vector_box">
                  {{ vectorItems[userVectors[i + 26]?.userVector - 1] }}
                </div>
              </div>
              <div class="graph_data_panel">
                <div class="vector_panel">
                  <template
                    v-for="(j, o, index) in reportVectors[i + 26]"
                    :key="o"
                  >
                    <div class="vector">
                      <div class="label" :class="`label_color${index}`"></div>
                      <p>{{ checkNan(o) ? o : "-" }}</p>
                    </div>
                  </template>
                </div>
                <div class="graph_panel">
                  <template
                    v-for="(j, o, index) in reportVectors[i + 26]"
                    :key="o"
                  >
                    <div>
                      <div
                        class="graph_bar"
                        :class="`label_color${index}`"
                        :style="{
                          borderRight: `${
                            125 - 125 * (j / 100)
                          }px solid #D9D9D9`,
                        }"
                      ></div>
                      <p>{{ j }}%</p>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="graph_grid_2">
          <template v-for="(i, n) in 11" :key="n">
            <div class="graph">
              <div class="graph_top">
                <div class="vector_num">{{ i + 39 }}</div>
                <p class="explanation">나의 풀이</p>
                <div
                  class="correct_box"
                  :class="{
                    incorrect: !reportData[i + 38].result_answer_correct,
                  }"
                >
                  <span v-if="reportData[i + 38].result_answer_correct"
                    >정답</span
                  >
                  <span v-else>오답</span>
                </div>
                <div class="vector_box">
                  {{ vectorItems[userVectors[i + 39]?.userVector - 1] }}
                </div>
              </div>
              <div class="graph_data_panel">
                <div class="vector_panel">
                  <template
                    v-for="(j, o, index) in reportVectors[i + 39]"
                    :key="o"
                  >
                    <div class="vector">
                      <div class="label" :class="`label_color${index}`"></div>
                      <p>{{ checkNan(o) ? o : "-" }}</p>
                    </div>
                  </template>
                </div>
                <div class="graph_panel">
                  <template
                    v-for="(j, o, index) in reportVectors[i + 39]"
                    :key="o"
                  >
                    <div>
                      <div
                        class="graph_bar"
                        :class="`label_color${index}`"
                        :style="{
                          borderRight: `${
                            125 - 125 * (j / 100)
                          }px solid #D9D9D9`,
                        }"
                      ></div>
                      <p>{{ j }}%</p>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <p class="page_num">3 / 4</p>
    </div>
    <div id="panel4" class="report_view report_view2">
      <div class="title_panel2">
        <h1>문항별 벡터</h1>
      </div>
      <div class="scorecard_category">Web / App / Cloud</div>
      <div class="result_panel2">
        <div class="graph_grid_1">
          <template v-for="(i, n) in 13" :key="n">
            <div class="graph">
              <div class="graph_top">
                <div class="vector_num">{{ i + 50 }}</div>
                <p class="explanation">나의 풀이</p>
                <div
                  class="correct_box"
                  :class="{
                    incorrect: !reportData[i + 49].result_answer_correct,
                  }"
                >
                  <span v-if="reportData[i + 49].result_answer_correct"
                    >정답</span
                  >
                  <span v-else>오답</span>
                </div>
                <div class="vector_box">
                  {{ vectorItems[userVectors[i + 50]?.userVector - 1] }}
                </div>
              </div>
              <div class="graph_data_panel">
                <div class="vector_panel">
                  <template
                    v-for="(j, o, index) in reportVectors[i + 50]"
                    :key="o"
                  >
                    <div class="vector">
                      <div class="label" :class="`label_color${index}`"></div>
                      <p>{{ checkNan(o) ? o : "-" }}</p>
                    </div>
                  </template>
                </div>
                <div class="graph_panel">
                  <template
                    v-for="(j, o, index) in reportVectors[i + 50]"
                    :key="o"
                  >
                    <div>
                      <div
                        class="graph_bar"
                        :class="`label_color${index}`"
                        :style="{
                          borderRight: `${
                            125 - 125 * (j / 100)
                          }px solid #D9D9D9`,
                        }"
                      ></div>
                      <p>{{ j }}%</p>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="graph_grid_2">
          <template v-for="(i, n) in 7" :key="n">
            <div class="graph">
              <div class="graph_top">
                <div class="vector_num">{{ i + 63 }}</div>
                <p class="explanation">나의 풀이</p>
                <div
                  class="correct_box"
                  :class="{
                    incorrect: !reportData[i + 62].result_answer_correct,
                  }"
                >
                  <span v-if="reportData[i + 62].result_answer_correct"
                    >정답</span
                  >
                  <span v-else>오답</span>
                </div>
                <div class="vector_box">
                  {{ vectorItems[userVectors[i + 63]?.userVector - 1] }}
                </div>
              </div>
              <div class="graph_data_panel">
                <div class="vector_panel">
                  <template
                    v-for="(j, o, index) in reportVectors[i + 63]"
                    :key="o"
                  >
                    <div class="vector">
                      <div class="label" :class="`label_color${index}`"></div>
                      <p>{{ checkNan(o) ? o : "-" }}</p>
                    </div>
                  </template>
                </div>
                <div class="graph_panel">
                  <template
                    v-for="(j, o, index) in reportVectors[i + 63]"
                    :key="o"
                  >
                    <div>
                      <div
                        class="graph_bar"
                        :class="`label_color${index}`"
                        :style="{
                          borderRight: `${
                            125 - 125 * (j / 100)
                          }px solid #D9D9D9`,
                        }"
                      ></div>
                      <p>{{ j }}%</p>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <p class="page_num">4 / 4</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { getUserData } from "~/composables/userData";
import { getRound } from "~/composables/receiptRound";
import {
  getReportData,
  getReportScore,
  getReportVectors,
  getUserVectors,
} from "~/composables/reportData";
import { User } from "~/interfaces/user";
import { ReportData } from "~/interfaces/report";
import vectorItems from "~/constants/vectorItems";
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
const reportScore = await getReportScore(route.query.number as string);
const judgeDifficult = ["하", "중", "상"];
const reportVectors = await getReportVectors(route.query.number as string);
const userVectors = await getUserVectors(route.query.number as string);

function checkNan(value: string) {
  return value.includes("nan") ? false : true;
}

onMounted(async () => {
  const imgData1 = (
    await html2canvas(document.querySelector("#panel1"))
  ).toDataURL("image/png");
  const imgData2 = (
    await html2canvas(document.querySelector("#panel2"))
  ).toDataURL("image/png");
  const imgData3 = (
    await html2canvas(document.querySelector("#panel3"))
  ).toDataURL("image/png");
  const imgData4 = (
    await html2canvas(document.querySelector("#panel4"))
  ).toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();
  pdf.addImage(imgData1, "PNG", 0, 0, width, height);
  pdf.addPage();
  pdf.addImage(imgData2, "PNG", 0, 0, width, height);
  pdf.addPage();
  pdf.addImage(imgData3, "PNG", 0, 0, width, height);
  pdf.addPage();
  pdf.addImage(imgData4, "PNG", 0, 0, width, height);
  pdf.save("report.pdf");
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
