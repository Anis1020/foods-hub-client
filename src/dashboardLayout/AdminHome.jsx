import { useQuery } from "@tanstack/react-query";
import useAuth from "../customHooks/useAuth";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaMemory, FaUsers } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: analytics = [] } = useQuery({
    queryKey: ["admin-analytics"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-analytics");
      return res.data;
    },
  });
  const { data: chartData = [] } = useQuery({
    queryKey: ["order-state"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-state");
      return res.data;
    },
  });
  //for bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //for piChart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const piChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });
  return (
    <div>
      <h1>
        Admin is: {user?.displayName ? user.displayName : "Admin Coming"}{" "}
      </h1>

      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{analytics.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">All Users</div>
          <div className="stat-value">{analytics.allUsers}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-3xl"></FaBook>
          </div>
          <div className="stat-title">Total MenuI Items</div>
          <div className="stat-value">{analytics.totalMenuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaMemory className="text-3xl"></FaMemory>
          </div>
          <div className="stat-title">Total Orders</div>
          <div className="stat-value">{analytics.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
            <Tooltip></Tooltip>
          </BarChart>
        </div>
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={350} height={350}>
              <Pie
                data={piChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {piChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip></Tooltip>
              <Legend verticalAlign="top"></Legend>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
