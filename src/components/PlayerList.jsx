import Player from "./Player";
import data from "../playres";

function PlayerList(props) {
  const myData = Object.values(props);
  console.log(myData);
  return (
    <div style={{ display: 'flex ', flexDirection: 'row'}}>
      {myData.map((e, i) => {
        return <Player name={e.name}  team={e.team} nationality={e.nationality} jersynumber={e.jersynumber} age={e.age} image={e.image} />    
        
        
        
      })}
    </div>
  );
}

PlayerList.defaultProps = data;

export default PlayerList;
