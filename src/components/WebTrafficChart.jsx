import { useEffect } from "react";
import * as echarts from "echarts";

function WebTrafficChart() {
  useEffect(() => {
    echarts.init(document.querySelector("#trafficChart")).setOption({
      tooltip: { trigger: "item" },
      legend: {
        top: "%5",
        left: "initial",
        padding: [0, 0, 0, 0],
      },
      series: [
        {
          name: "Access Form",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverLap: false,
          label: { show: false, position: "center" },
          emphasis: {
            label: { show: true, fontSize: "18", fontWeight: "bold" },
          },
          labelLine: { show: false },
          data: [
            { value: 1024, name: "Search Engine" },
            { value: 750, name: "Direct" },
            { value: 550, name: "Email" },
            { value: 400, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    });
  }, []);
  return (
    <div
      id="trafficChart"
      style={{ minHeight: "400px" }}
      className="echart"
    ></div>
  );
}

export default WebTrafficChart;
