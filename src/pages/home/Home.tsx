import { useEffect, useMemo, useState } from "react";
import WidgetSm from "components/widgetSm/WidgetSm";
import WidgetLg from "components/widgetLg/WidgetLg";
import Chart from "components/chart/Chart";
import { api } from "services/api";
import "./home.css";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([] as any[]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await api.get("/users/stats", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        const statsList = res.data.sort((a: any, b: any) => a._id - b._id);
        statsList.map((item: { _id: number; total: any }) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
