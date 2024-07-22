// react
import { useState, useEffect } from "react";
import { useParams } from "react-router";

// data
import getData from '../data/getData'

// composant
import UserName from '../components/UserName'
import BarCharts from "../components/BarChart";
import UserAverageSession from "../components/UserAverageSession";

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
    <div>
      <UserName name={data.userInfos.firstName} />
      <BarCharts />
      <UserAverageSession />
    </div>
  );
}

export default User