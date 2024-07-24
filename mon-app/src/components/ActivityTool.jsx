// props
import PropTypes from 'prop-types';

/** create a custom tooltype for the user activity barChart
 * @param  {bool} active
 * @param  {array} payload
 */

 function ActivityTool({active, payload}) {
    if (active){
    return (
        <div className='activityTool'>
            <div className='activityTool__detail'>{payload[0].value}kg</div>
            <div className='activityTool__detail'>{payload[1].value}Kcal</div>
        </div>
    
     );
    }
    return null
}

ActivityTool.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};

export default ActivityTool;