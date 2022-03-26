import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PieChart } from "react-minimal-pie-chart";

export default function Pchart({ title, data, datakey, grid }) {
  return (
    <>
      <div className="chart">
        <div className="chartTitle">{title}</div>
        <div className="pieChart">
          <ResponsiveContainer width="100%">
            <PieChart
              data={[
                { title: "Completed", value: 75, color: "#228b22" },
                { title: "Remaining", value: 25, color: "#ffbf00" },
                // { title: "Three", value: 20, color: "#6A2135" },
              ]}
              // onMouseOver = {}
            />
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
