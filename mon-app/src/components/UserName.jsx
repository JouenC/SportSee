/**Render the userName
* @param {string} name
* @return {JSX}
*/


function UserName ({name}) {
    return (
        <div>
            <h1>Bonjour {name} </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>    
    )
}

export default UserName