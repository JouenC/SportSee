// import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./dataMocked.js";

// /**
//  * Get user infos
//  *
//  * @param {number} id User id
//  * @returns {object} Response
//  */

// const getUserInfos = async (id) => {
// 	try {
// 		const res = USER_MAIN_DATA.find((el) => el.id == id);
// 		return {data:res};
// 	} catch (e) {
// 		console.log(e);
// 	}
// };


// /**
//  * Get user activity 
//  *
//  * @param {number} id User id
//  * @returns {object} Response
//  */

// const getUserActivity = async (id) => {
// 	try {
// 		const res = USER_ACTIVITY.find((el) => el.userId == id);
// 		return {data:res};
// 	} catch (e) {
// 		console.log(e);
// 	}
// };

// /**
//  * Get user average session 
//  *
//  * @param {number} id User id
//  * @returns {object} Response
//  */

// const getUserAverageSessions = async (id) => {
// 	try {
// 		const res = USER_AVERAGE_SESSIONS.find((el) => el.userId == id);
// 		return {data:res};
// 	} catch (e) {
// 		console.log(e);
// 	}
// };

// /**
//  * Get user performance 
//  *
//  * @param {number} id User id
//  * @returns {object} Response
//  */

// const getUserPerformance = async (id) => {
// 	try {
// 		const res = USER_PERFORMANCE.find((el) => el.userId == id);
// 		return {data:res};
// 	} catch (e) {
// 		console.log(e);
// 	}
// };

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