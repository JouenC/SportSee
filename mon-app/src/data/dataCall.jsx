import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./dataMocked.js";

/**
 * Get user infos
 *
 * @param {number} id User id
 * @returns {object} Response
 */

export const getUserInfos = async (id) => {
	try {
		const res = USER_MAIN_DATA.find((el) => el.id == id);
		return {data:res};
	} catch (e) {
		console.log(e);
	}
};


/**
 * Get user activity 
 *
 * @param {number} id User id
 * @returns {object} Response
 */

export const getUserActivity = async (id) => {
	try {
		const res = USER_ACTIVITY.find((el) => el.userId == id);
		return {data:res};
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user average session 
 *
 * @param {number} id User id
 * @returns {object} Response
 */

export const getUserAverageSessions = async (id) => {
	try {
		const res = USER_AVERAGE_SESSIONS.find((el) => el.userId == id);
		return {data:res};
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user performance 
 *
 * @param {number} id User id
 * @returns {object} Response
 */

export const getUserPerformance = async (id) => {
	try {
		const res = USER_PERFORMANCE.find((el) => el.userId == id);
		return {data:res};
	} catch (e) {
		console.log(e);
	}
};