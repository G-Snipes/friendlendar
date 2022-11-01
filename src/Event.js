import {useState} from 'react';
import Calendar from 'react-calendar';
import './App.css';
import Times from './Times.js'

import React from 'react'

function Event(props) {

    return(
        <div>
            {props.showTime ? <Times date={props.date}/> : null}
        </div>
    )

}

export default Event;