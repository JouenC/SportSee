// import {getUserInfos, getUserActivity, getUserAverageSessions, getUserPerformance} from "./apiCall"
import {getUserInfos, getUserActivity, getUserAverageSessions, getUserPerformance} from "./dataMockedCall"


 /**
   * 
   * @param {string} type 
   * @param {number} id 
   * @returns {Array}
   */


const getData = async (type, id) => {
    let data = [];

    switch (type) {
      case "USER_ACTIVITY":
        data = await getUserActivity(id);
        break;
      case "USER_PERFORMANCE":
        data = await getUserPerformance(id);
        break;
      case "USER_AVERAGE_SESSIONS":
        data = await getUserAverageSessions(id);
        break;
      case "USER_MAIN_DATA":
        data = await getUserInfos(id);
        break;
    }
    return data;
  };

  export default getData;