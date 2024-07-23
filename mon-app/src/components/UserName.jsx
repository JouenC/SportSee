// data
import text from "../data/text.json"

/**Render the userName
* @param {string} name
*/


function UserName ({name}) {
    return (
        <div className="userName">
            <h1>Bonjour <span className="userName__span">{name}</span></h1>
            <div>{text.congratulation}</div>
        </div>    
    )
}

export default UserName