import "./Chart.css";
import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from "recharts";

const Chart = () => {

    const data = [
        { name: "Celebrities", value: 2000},
        { name: "Order", value: 4000},
        { name: "Booking", value: 3000},
        { name: "Earnings", value: 6000},
    ];
    return (
        <div className="chart">
          <div className="card customer">
          <h4>Chart</h4>
        <BarChart
        width={500}
        height={300}
        data={data}
        marginTop={10}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#28a745" background={{ fill: '#eee' }} />
      </BarChart>
      </div>
      </div>
    )
}

export default Chart;