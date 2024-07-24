import PropTypes from "prop-types";

// recharts
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";



/** create a PieChart with score value
 * @param  {object} {data}
 */

 function UserScore({ data }) {
     
  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - data.todayScore || data.score },
  ];

  return (
    <div className="userScore">
      <h2 className="userScore__title">Score</h2>
      <ResponsiveContainer width="100%" height="100%" className="userScore__container">
        <PieChart>
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="userScore__text">
        <div className="userScore__text__pourcent">
            {score[0].value * 100}%
        </div>
        <div className="userScore__text__br">
            de votre <br /> objectif
        </div>    
      </div>
    </div>
  );
}

UserScore.propTypes = {
  data: PropTypes.object,
};

export default UserScore;