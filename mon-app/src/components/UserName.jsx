// data
import text from "../data/text.json"

/**Render the userName
* @param {string} name
*/


function UserName ({name}) {
    return (
        <div className="userName">
            <h1 className="userName__title">Bonjour <span className="userName__span">{name}</span></h1>
            <div className="userName__text">{text.congratulation}</div>
        </div>    
    )
}

export default UserName