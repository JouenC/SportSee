// react
import { useState, useEffect } from "react";
import { useParams } from "react-router";

// data
import getData from '../data/getData'

// recharts
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import SessionTool from "./SessionTool";


/**
 * Render a LineChart with user average sessions Data
 */

function UserAverageSessions() { 
     
  const [data, setData] = useState(null);
  const { id } = useParams();

  // const [width, setWidth] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
        const request = await getData("USER_AVERAGE_SESSIONS",id);
        if (!request) return alert("data error");
      const formatData = request.data.sessions.map((data) => {
          
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    fetchData();
  }, [id]);
  if (!data) return null;

  return (
    <div className="userAverageSession">
      <ResponsiveContainer width="100%" height="100%">
        <h2 className="userAverageSession__title">Durée moyenne des sessions</h2>  
        <LineChart data={data} strokeWidth={1} 
        
             onMouseMove={(e) => {
              // console.log(e)
              // setWidth(e.chartX)
                if (e.isTooltipActive === true) {
                  let div = document.querySelectorAll('.recharts-surface')
                  if(div.length < 1) return null
                  
                  let secondDiv = div[1]
                  let windowWidth = secondDiv.clientWidth
                  let mouseXpercentage = Math.round(
                  (e.activeCoordinate.x / windowWidth) * 100
                  )
                   // @ts-ignore
                   secondDiv.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                  
                  
                 
                }
              }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" fill="#ccc" width={width}/> */}
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{right:5, left:5}}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8}}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={<SessionTool />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>  
  );
};

export default UserAverageSessions;