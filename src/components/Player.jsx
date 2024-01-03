import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

function Player({name,team,nationality,jersynumber,age,image}) {

  return (
    <Card className="mt-6 w-96">
    <CardHeader color="blue-gray" className="relative h-56">
      <img
        src={image}
        alt="card-image"
      />
    </CardHeader>
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        {name}
      </Typography>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        {team}
      </Typography> <Typography variant="h5" color="blue-gray" className="mb-2">
        {nationality}
      </Typography> <Typography variant="h5" color="blue-gray" className="mb-2">
        {jersynumber} 
      </Typography> <Typography variant="h5" color="blue-gray" className="mb-2">
       {age}
      </Typography>
     
    </CardBody>

  </Card>
  )
}



Player.defaultProps ={
    name : 'Player name',
    team : 'Team name  ',
    nationality  : "Player Nationality",
    jersynumber :"Player Number",
    age : 'Player age',
    image : "Player Image"

}

export default Player