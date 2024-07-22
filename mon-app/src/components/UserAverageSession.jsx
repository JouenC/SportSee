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
      console.log(formatData)
    };
    fetchData();
  }, [id]);
  if (!data) return null;

  return (

      
      <ResponsiveContainer width="100%" height="100%" className="responsiveContainer">
        <h3 className="responsiveContainer__title">Durée moyenne des sessions</h3>  
        <LineChart data={data} strokeWidth={1} 
            //  onMouseMove={(e) => {
            //     if (e.isTooltipActive === true) {
            //       let div = document.querySelector('.bUPtxZ')
            //       let windowWidth = div.clientWidth
            //       let mouseXpercentage = Math.round(
            //         (e.activeCoordinate.x / windowWidth) * 100
            //       )
            //       // @ts-ignore
            //       div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
            //     }
            //   }}
        >
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



    
      
      // <ResponsiveContainer width="100%" height="100%">
      //   <LineChart
      //     width={500}
      //     height={300}
      //     data={data}
      //     margin={{
      //       top: 5,
      //       right: 30,
      //       left: 20,
      //       bottom: 5,
      //     }}
      //   >
      //     <XAxis dataKey="day" />
      //     <YAxis dataKey="sessionLength"/>
      //     <Tooltip content={<SessionTool />} />
      //     <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
      //     <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      //   </LineChart>
      // </ResponsiveContainer>
    
  );
};

export default UserAverageSessions;