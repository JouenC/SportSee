// data
import text from "../data/text.json"

/**Render the userName
* @param {string} name
*/


function UserName ({name}) {
    return (
        <div>
            <h1>Bonjour {name} </h1>
            <h2>{text.congratulation}</h2>
        </div>    
    )
}

export default UserName