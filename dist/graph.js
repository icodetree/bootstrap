/*============================================================
 * Description : Graph
 *============================================================*/

function levelGarph () {
  $ ('.animated-progress span').each (function () {
    let targetPos = $ (this).attr ('data-progress');
    let $elm = $ ('.animated-progress--text');
    let $duration = 1000;

    $ (this).stop ().animate (
      {
        width: targetPos + '%',
      },
      $duration
    );
    $elm.stop ().animate (
      {
        left: targetPos + '%',
      },
      $duration
    );

    $ ({val: 0}).animate (
      {val: targetPos},
      {
        duration: $duration,
        step: function () {
          let num = numberWithCommas (Math.floor (this.val));
          $elm.text (num);
        },
        complete: function () {
          let num = numberWithCommas (Math.floor (this.val));
          $elm.text (num);
        },
      }
    );

    function numberWithCommas (x) {
      return x.toString ().replace (/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  });
}
window.addEventListener ('load', () => levelGarph ());

/*============================================================
 * Description : 내 머릿속 기억률 현황
 *============================================================*/

function barGraph () {
  // 점수
  const barData1 = [40, 100, 100, 80, 65];
  const barData2 = [80, 50, 60, 90, 65];
  const barData3 = [30, 70, 80, 20, 10];
  const barChart1 = {
    type: 'bar',
    data: {
      labels: [['12/12'], ['12/13'], ['12/14'], ['12/15'], ['12/16']], // 날짜
      datasets: [
        {
          label: '내 머릿속 기억률 현황',
          data: barData1,
          barPercentage: 0.6,
          // 그래프별 색상
          backgroundColor: [
            '#F1F2F2',
            '#F1F2F2',
            '#F1F2F2',
            '#017AFB',
            '#005427',
          ],
          borderRadius: 5,
        },
        // {
        //   label: '라인',
        //   type: 'line',
        //   data: lineData,
        //   borderColor: '#017AFB',
        // },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },

      //차트위에 값 나타내기
      animation: {
        duration: 700,
        onComplete: function () {
          const chartInstance = this, ctx = chartInstance.ctx;

          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach (function (dataset, i) {
            const meta = chartInstance.getDatasetMeta (i);
            meta.data.forEach (function (bar, index) {
              const data = dataset.data[index];
              if (index === 3) {
                // ctx.fillStyle = '#017AFB';
                // ctx.font =
                //   '1.8rem "Helvetica Neue", Helvetica, Arial, sans-serif';
              } else {
                ctx.fillStyle = '#017AFB';
                ctx.font = '1.4rem "Noto Sans CJK KR';
              }
              ctx.fillText (data + '%', bar.x, 20);
            });
          });
        },
      },
      scales: {
        x: {
          // x축 그리드 숨기기
          grid: {
            display: false,
            borderWidth: 0,
          },
          //x축 텍스트 폰트
          ticks: {
            font: {
              size: 14,
            },
            color: '#017AFB',
          },
        },
        y: {
          // y축 그리드 숨기기
          grid: {
            display: false,
            borderWidth: 0,
          },
          // y축 데이터 숨기기
          ticks: {
            display: false,
          },
          min: 0,
          max: 120,
        },
      },
    },
  };
  const barChart2 = {
    type: 'bar',
    data: {
      labels: [['12/12'], ['12/13'], ['12/14'], ['12/15'], ['12/16']], // 날짜
      datasets: [
        {
          label: '내 머릿속 기억률 현황',
          data: barData2,
          barPercentage: 0.6,
          // 그래프별 색상
          backgroundColor: [
            '#F1F2F2',
            '#F1F2F2',
            '#F1F2F2',
            '#017AFB',
            '#005427',
          ],
          borderRadius: 5,
        },
        // {
        //   label: '라인',
        //   type: 'line',
        //   data: lineData,
        //   borderColor: '#017AFB',
        // },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },

      //차트위에 값 나타내기
      animation: {
        duration: 700,
        onComplete: function () {
          const chartInstance = this, ctx = chartInstance.ctx;

          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach (function (dataset, i) {
            const meta = chartInstance.getDatasetMeta (i);
            meta.data.forEach (function (bar, index) {
              const data = dataset.data[index];
              if (index === 3) {
                // ctx.fillStyle = '#017AFB';
                // ctx.font =
                //   '1.8rem "Helvetica Neue", Helvetica, Arial, sans-serif';
              } else {
                ctx.fillStyle = '#017AFB';
                ctx.font = '1.4rem "Noto Sans CJK KR';
              }
              ctx.fillText (data + '%', bar.x, 20);
            });
          });
        },
      },
      scales: {
        x: {
          // x축 그리드 숨기기
          grid: {
            display: false,
            borderWidth: 0,
          },
          //x축 텍스트 폰트
          ticks: {
            font: {
              size: 14,
            },
            color: '#017AFB',
          },
        },
        y: {
          // y축 그리드 숨기기
          grid: {
            display: false,
            borderWidth: 0,
          },
          // y축 데이터 숨기기
          ticks: {
            display: false,
          },
          min: 0,
          max: 120,
        },
      },
    },
  };
  const barChart3 = {
    type: 'bar',
    data: {
      labels: [['12/12'], ['12/13'], ['12/14'], ['12/15'], ['12/16']], // 날짜
      datasets: [
        {
          label: '내 머릿속 기억률 현황',
          data: barData3,
          barPercentage: 0.6,
          // 그래프별 색상
          backgroundColor: [
            '#F1F2F2',
            '#F1F2F2',
            '#F1F2F2',
            '#017AFB',
            '#005427',
          ],
          borderRadius: 5,
        },
        // {
        //   label: '라인',
        //   type: 'line',
        //   data: lineData,
        //   borderColor: '#017AFB',
        // },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },

      //차트위에 값 나타내기
      animation: {
        duration: 700,
        onComplete: function () {
          const chartInstance = this, ctx = chartInstance.ctx;

          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach (function (dataset, i) {
            const meta = chartInstance.getDatasetMeta (i);
            meta.data.forEach (function (bar, index) {
              const data = dataset.data[index];
              if (index === 3) {
                // ctx.fillStyle = '#017AFB';
                // ctx.font =
                //   '1.8rem "Helvetica Neue", Helvetica, Arial, sans-serif';
              } else {
                ctx.fillStyle = '#017AFB';
                ctx.font = '1.4rem "Noto Sans CJK KR';
              }
              ctx.fillText (data + '%', bar.x, 20);
            });
          });
        },
      },
      scales: {
        x: {
          // x축 그리드 숨기기
          grid: {
            display: false,
            borderWidth: 0,
          },
          //x축 텍스트 폰트
          ticks: {
            font: {
              size: 14,
            },
            color: '#017AFB',
          },
        },
        y: {
          // y축 그리드 숨기기
          grid: {
            display: false,
            borderWidth: 0,
          },
          // y축 데이터 숨기기
          ticks: {
            display: false,
          },
          min: 0,
          max: 120,
        },
      },
    },
  };

  const isStatusSlide = document.querySelector ('.statusSlide');
  if (isStatusSlide !== null) {
    const reportCanvas_01 = document.getElementById ('reportCanvas_01');
    const reportCanvas_02 = document.getElementById ('reportCanvas_02');
    const reportCanvas_03 = document.getElementById ('reportCanvas_03');
    const ctx1 = reportCanvas_01.getContext ('2d');
    const ctx2 = reportCanvas_02.getContext ('2d');
    const ctx3 = reportCanvas_03.getContext ('2d');
    const barGraph1 = new Chart (ctx1, barChart1);
    const barGraph2 = new Chart (ctx2, barChart2);
    const barGraph3 = new Chart (ctx3, barChart3);
  }
}

window.addEventListener ('load', () => barGraph ());

/*============================================================
 * Description : 그래프 리스트
 *============================================================*/

function GraphMemoryCircle (option) {
  const percent = option.percent;
  const color = option.innerColor;
  const bgcolor = option.bgColor;
  const canvas = option.className;
  const start = option.start;
  const container = $ (option.className).parent ();

  const innerColor = color;
  const percentValue = percent;
  const animationTime = '700';
  const text = percent !== 0 ? percent + '% 기억중' : '기억 준비중';

  const chartCanvas = $ (canvas);
  const chartContainer = container;
  const divElement = document.createElement ('div');
  const domString =
    '<div class="chart__value"><img class="chart__img" src="../images/common/ico_brain.svg"><p>' +
    text +
    '</p></div> ';
  const domStringCehck =
    '<div class="chart__value--check">' + text + '</div></div>';

  // Create a new Chart object
  const doughnutChart = new Chart (chartCanvas, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [percentValue, 100 - percentValue],
          backgroundColor: [innerColor, bgcolor],
          borderRadius: [0, 0],
          borderWidth: 0,
        },
      ],
    },
    options: {
      cutout: '80%',
      // circumference : 360,
      radius: '80%',
      responsive: true,
      rotation: 0,
      tooltips: {
        enabled: false, // Hide tooltips
      },
      animation: {
        animateScale: true,
        duration: animationTime,
      },
    },
  });

  if (percent !== 100) {
    if (start) {
      divElement.innerHTML = domStringCehck;
    } else {
      divElement.innerHTML = domString;
    }
  }
  chartContainer.append (divElement.firstChild);
}

window.addEventListener ('load', function () {
  const isChart = document.querySelector ('.chart');
  if (isChart === null) return;

  let chart_list_01 = new GraphMemoryCircle ({
    className: '.chartCanvas_01',
    innerColor: '#F1798D',
    bgColor: '#F1F2F2',
    percent: 12,
    start: false,
  });
  let chart_list_02 = new GraphMemoryCircle ({
    className: '.chartCanvas_02',
    innerColor: '#BF2D2D',
    bgColor: '#F1F2F2',
    percent: 18,
    start: false,
  });
  let chart_list_03 = new GraphMemoryCircle ({
    className: '.chartCanvas_03',
    innerColor: '#D562C9',
    bgColor: '#F1F2F2',
    percent: 24,
    start: false,
  });

  let chart_list_04 = new GraphMemoryCircle ({
    className: '.chartCanvas_04',
    innerColor: '#F6C233',
    bgColor: '#F1F2F2',
    percent: 51,
    start: false,
  });

  let chart_list_05 = new GraphMemoryCircle ({
    className: '.chartCanvas_05',
    innerColor: '#005427',
    bgColor: '#F1F2F2',
    percent: '14',
    start: false,
  });
  let chart_list_06 = new GraphMemoryCircle ({
    className: '.chartCanvas_06',
    innerColor: '#6C85FF',
    bgColor: '#F1F2F2',
    percent: 0,
    start: false,
  });
  let chart_list_07 = new GraphMemoryCircle ({
    className: '.chartCanvas_07',
    innerColor: '#FAFAFA',
    bgColor: '#FAFAFA',
    percent: 94,
    start: true,
  });
  let chart_list_08 = new GraphMemoryCircle ({
    className: '.chartCanvas_08',
    innerColor: '#00000',
    bgColor: '#F1F2F2',
    percent: 24,
    start: false,
  });
});
