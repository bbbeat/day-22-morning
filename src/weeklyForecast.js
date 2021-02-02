import React from 'react';

import {Weather} from './weather.js';
import {forecast} from './forecast.js';

export function WeeklyForecast(props){
    return (<div className="week-forecast">
    <Weather weekday= {forecast[0].weekday} weather= {forecast[0].weather} tempDay= {forecast[0].tempDay} tempNight= {forecast[0].tempNight} />
    <Weather weekday= {forecast[1].weekday} weather= {forecast[1].weather} tempDay= {forecast[1].tempDay} tempNight= {forecast[1].tempNight} />
    <Weather weekday= {forecast[2].weekday} weather= {forecast[2].weather} tempDay= {forecast[2].tempDay} tempNight= {forecast[2].tempNight} />
    <Weather weekday= {forecast[3].weekday} weather= {forecast[3].weather} tempDay= {forecast[3].tempDay} tempNight= {forecast[3].tempNight} />
    <Weather weekday= {forecast[4].weekday} weather= {forecast[4].weather} tempDay= {forecast[4].tempDay} tempNight= {forecast[4].tempNight} />
    <Weather weekday= {forecast[5].weekday} weather= {forecast[5].weather} tempDay= {forecast[5].tempDay} tempNight= {forecast[5].tempNight} />
    <Weather weekday= {forecast[6].weekday} weather= {forecast[6].weather} tempDay= {forecast[6].tempDay} tempNight= {forecast[6].tempNight} />   
</div>

);}