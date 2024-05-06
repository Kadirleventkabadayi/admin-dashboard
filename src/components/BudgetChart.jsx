import { useEffect } from "react";
import * as echarts from "echarts";

function BudgetChart() {
  useEffect(() => {
    echarts.init(document.querySelector("#budgetChart")).setOption({
      legend: {
        data: ["Allocated Budget", "Actual Spending"],
        padding: [0, 0, 0, 0],
      },
      radar: {
        shape: "circle",
        indicator: [
          { name: "Sales", max: 6500 },
          { name: "Administration", max: 18000 },
          { name: "Information Tec.", max: 27000 },
          { name: "Support", max: 42000 },

          { name: "Dev.", max: 48000 },
          { name: "Marketing", max: 22500 },
        ],
      },
      series: [
        {
          name: "Budget vs Spending",
          type: "radar",
          data: [
            {
              value: [4150, 2000, 18000, 32000, 45000, 13000],
              name: "Allocated Budget",
            },
            {
              value: [5000, 12000, 25000, 21000, 38000, 19000],
              name: "Actual Spending",
            },
          ],
        },
      ],
    });
  }, []);

  return (
    <div
      id="budgetChart"
      style={{ minHeight: "400px" }}
      className="ecahrt"
    ></div>
  );
}

export default BudgetChart;
