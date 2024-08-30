import {getUserInfos, getUserActivity, getUserAverageSessions, getUserPerformance} from "./apiCall"
import {getUserInfos as getUserInfosMocked, getUserActivity as getUserActivityMocked, getUserAverageSessions as getUserAverageSessionsMocked, getUserPerformance as getUserPerformanceMocked} from "./dataMockedCall"


 /**
   * 
   * @param {string} type 
   * @param {number} id 
   * @returns {Array}
   */

const getData = async (type, id) => {
  const origin = window.localStorage.getItem("origin")
    let data = [];

    switch (type) {
      case "USER_ACTIVITY":
        data = origin === "api" ? await getUserActivity(id) : await getUserActivityMocked(id);
        break;
      case "USER_PERFORMANCE":
        data = origin === "api" ? await getUserPerformance(id) : await getUserPerformanceMocked(id);
        break;
      case "USER_AVERAGE_SESSIONS":
        data = origin === "api" ? await getUserAverageSessions(id) : await getUserAverageSessionsMocked(id);
        break;
      case "USER_MAIN_DATA":
        data = origin === "api" ? await getUserInfos(id) : await getUserInfosMocked(id);
        break;
    }
    return data;
  };

  export default getData;