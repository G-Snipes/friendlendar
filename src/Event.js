import React from 'react';
import { CardActions, Typography, CardContent, Button, Card } from "@mui/material"


const Event = ({ event }) => (

  <div className='centered'><Card variant="outlined" sx={{ minWidth: 275, maxWidth: 500, border: 1, borderColor: 'error.dark' }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Title:
        <div key={event.title}>{event.title}</div>
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Description:
        <div key={event.description}>{event.description}</div>
      </Typography>
      
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Start:
        <div key={event.start}>{new Date(event.start).toString()}</div>
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        End:
        <div key={event.end}>{new Date(event.end).toString()}</div>
      </Typography>
    </CardContent>
  </Card></div>

)

export default Event;