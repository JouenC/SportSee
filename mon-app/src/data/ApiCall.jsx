const baseURL = 'http://localhost:3000';

/**
 * Get user infos
 *
 * @param {number} id User id
 * @returns {object} Response
 */

const getUserInfos = async (id) => {
	try {
		const response = await fetch(`${baseURL}/user/${id}`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return { data };
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
const getUserActivity = async (id) => {
	try {
		const response = await fetch(`${baseURL}/user/${id}/activity`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return { data };
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
const getUserAverageSessions = async (id) => {
	try {
		const response = await fetch(`${baseURL}/user/${id}/average-sessions`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return { data };
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
const getUserPerformance = async (id) => {
	try {
		const response = await fetch(`${baseURL}/user/${id}/performance`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return { data };
	} catch (e) {
		console.log(e);
	}
};


export {getUserInfos, getUserActivity, getUserAverageSessions, getUserPerformance};