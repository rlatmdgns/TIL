# HighChart

## 리액트에서  Highcharts 사용 방법

### 1. 라이브러리 설치

import Highcharts from "highcharts/highstock"; 
import HighchartsReact from "highcharts-react-official";

```jsx
import Highcharts from "highcharts/highstock"; // 라이브러리 설치
import HighchartsReact from "highcharts-react-official";

const chartRef = useRef(null)

const Chart = ({ options, chartRef }: ChartProps) => {
  Highcharts.setOptions({
    lang: {
      rangeSelectorZoom: "확대/축소",
    },
    time: {
      timezone: "Asia/Seoul",
      useUTC: false,
    },
    credits: {
      enabled: false,
    }, // 하이차트 credits 링크 제거 
  });
  return (
    <HighchartsReact
      ref={chartRef}
      constructorType={"stockChart"}
      highcharts={Highcharts}
      oneToOne={true}
      options={options}
    />
  );
};

export default Chart
```

### 2. 기본 옵션 값  설정

- options
    
    ```jsx
    @observable options: any = {
        chart: {
          animation: true,
          type: "spline",
          zoomType: "x",
          height: 400,
        },
        exporting: {
          enabled: false,
        },
        plotOptions: {
          series: {
            showInNavigator: true,
            states: {
              inactive: {},
            },
            connectNulls: false,
            boostThreshold: 2000,
          },
        },
        navigator: {
          adaptToUpdatedData: false,
        },
        rangeSelector: {
          allButtonsEnabled: false,
          buttons: [
            {
              type: "day",
              count: 3,
              text: "3일",
            },
            {
              type: "day",
              count: 2,
              text: "2일",
            },
            {
              type: "day",
              count: 1,
              text: "1일",
            },
            {
              type: "all",
              text: "전체",
            },
          ],
          selected: 3,
          inputEnabled: false,
          labelStyle: { color: "#636e72", fontWeight: "bold", fontSize: 14 },
          verticalAlign: "top",
          buttonSpacing: 8,
          buttonPosition: {
            align: "right",
            x: -30,
            y: 0,
          },
          buttonTheme: {
            width: 35,
            fill: "#FFFFFF",
            "stroke-width": 0, // hyphenated
            style: {
              color: "#08c7bd",
              fontWeight: "bold",
            },
            states: {
              select: {
                fill: "#08c7bd",
                style: {
                  color: "#ffffff",
                },
              },
              disabled: {
                fill: "#FFFFFF",
                style: {
                  color: "#707070",
                },
              },
            },
          },
        },
        series: [],
        tooltip: {
          borderWidth: 0,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          shadow: false,
          split: true,
        },
        xAxis: {
          type: "datetime",
          dateTimeLabelFormats: {
            day: "%m/%d",
            month: '%b "%y',
            year: "%Y",
          },
          events: {
            afterSetExtremes: () => {},
          },
          crosshair: {
            color: "#222",
          },
          minRange: 3600 * 1000, // one hour
        },
        yAxis: [
          {
            opposite: true,
            visible: true,
            title: {
              text: "",
            },
          },
        ],
      };
    ```
    

xAxis  - X축 드래그 이벤트 

```jsx
 xAxis: {
      **events: {
        afterSetExtremes: () => {},
      },**
    },Ï
차트 드래그시 **afterSetExtremes가 발생한다.**
```

---

### 3.  어려웠던 점.

mobx를 통하여 상태관리를 하였습니다.

메뉴1, 메뉴 2번 → 메뉴를 클릭 시 API를 호출하여 데이터를 불러와 options 상태를 변경하여 차트를 그려주려고 하였지만, 변경 되지 않는 문제를 발생하여 찾아보았습니다. 리액트에서는 HighCharts가 업데이트 되지 않는다고 합니다. ㅠㅠ 

해결방안으로 로딩 상태를 이용하여 차트를 새로 그리는 걸로 대체하였습니다. ㅠㅠ 

다른 해결방안으로는  userRef 를 이용하여 setData 메소드를 이용하여 데이터를 변경해주는 방안입니다.

Highart 가 제공하는 update 함수를 사용하여 차트를 갱신

**/* userRef를 이용한 업데이트  */**

```jsx
!isLoading && <HightCharts/>

/* userRef를 이용한 업데이트  */
chartRef.current.chart.series[index].setData([chartData[index]]); //차트 데이터 set

chartRef.current.chart.series[index].update(data); //차트 갱신

chartRef.current.chart.series[index].show() //차트  series 보이기 
chartRef.current.chart.series[index].hide(); // 숨기기

chartRef.current.chart.yAxis[index].update()
```

이슈 : 

[javascript - React에서 상태가 변경 될 때 HighCharts가 업데이트되지 않음](https://www.python2.net/questions-299307.htm)

### 참고자료

[https://api.highcharts.com/highcharts/yAxis](https://api.highcharts.com/highcharts/yAxis)

[https://streamls.tistory.com/178](https://streamls.tistory.com/178)

[https://yoogomja.github.io/2020/06/24/highchart-react/](https://yoogomja.github.io/2020/06/24/highchart-react/)

[https://beomy.tistory.com/37](https://beomy.tistory.com/37)

[https://www.popit.kr/좌충우돌-앗-리액트-하이차트로-차트를-그렸는데-차/](https://www.popit.kr/%EC%A2%8C%EC%B6%A9%EC%9A%B0%EB%8F%8C-%EC%95%97-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%95%98%EC%9D%B4%EC%B0%A8%ED%8A%B8%EB%A1%9C-%EC%B0%A8%ED%8A%B8%EB%A5%BC-%EA%B7%B8%EB%A0%B8%EB%8A%94%EB%8D%B0-%EC%B0%A8/)