// react
import { useState, useEffect } from "react";
import { useParams } from "react-router";

// data
import getData from '../data/getData'

// composant
import UserName from '../components/UserName'
import BarCharts from "../components/BarChart";
import UserAverageSession from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";
import UserScore from "../components/UserScore";
import CardInfo from "../components/CardInfo";

//assets
import calories from "../assets/calories.svg";
import proteins from "../assets/proteins.svg";
import glucides from "../assets/glucides.svg";
import lipides from "../assets/lipides.svg";

function User () {
    const [data, setData] = useState(null);
    const { id } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      const request = await getData("USER_MAIN_DATA",id);
      if (!request) return alert("data error");
      setData(request.data);
    };
    fetchData();
  }, [id]);
  if (!data) return null;

  return (
    <div className="user">
      <UserName name={data.userInfos.firstName} />
      {/* <section> */}
        <BarCharts />
        {/* <article> */}
          <UserAverageSession />
          <UserPerformance />
          <UserScore data={data} />
        {/* </article> */}
        <aside>
          <CardInfo
            icon={calories}
            info={`${data.keyData.calorieCount}kCal`}
            text="Calories"
          />
          <CardInfo
            icon={proteins}
            info={`${data.keyData.proteinCount}g`}
            text="Proteines"
          />
          <CardInfo
            icon={glucides}
            info={`${data.keyData.carbohydrateCount}g`}
            text="Glucides"
          />
          <CardInfo
            icon={lipides}
            info={`${data.keyData.lipidCount}g`}
            text="Lipides"
          />
        </aside>
      {/* </section> */} 
    </div>
  );
}

export default User