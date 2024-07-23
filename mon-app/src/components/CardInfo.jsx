import PropTypes from 'prop-types'; 

/** display icon with user infos 
 * @param  {string} icon
 * @param  {string} info
 * @param  {string} text
 */

function CardInfo({icon,info,text}) {
     
    return (  
    <div className='cardInfo'>
        <img src={icon} alt="calories icon" className='cardInfo__img' />
        <div className='cardInfo__detail'>
            <div className='cardInfo__detail__info'>{info}</div>
            <div className='cardInfo__detail__text'>{text}</div>
        </div>
    </div> );
}

CardInfo.propTypes = {
  icon: PropTypes.any,
  info: PropTypes.string,
  text: PropTypes.string,
}

export default CardInfo;