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

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <>
      <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1} id="responsive-container">
          <LineChart data={data}>
            <XAxis dataKey="date" stroke="#000000" />
            <Line type="monotone" dataKey={dataKey} stroke="#000000" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
