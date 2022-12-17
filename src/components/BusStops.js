import React, { useState } from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import BusStop from './BusStop';

function BusStops({ busStops, buses, displayBuses, setDisplayBuses }) {
  // const busStops = useSelector((state) => state.busStop.busStopList);

  console.log(busStops);
  // TODO remove [0] to make this component scalable
  // want to use this component in AppContent
  return (
    <div className={styles.scroll}>
      {busStops[0].map((busStop) => {
        // function needs to return something
        return (
          <BusStop
            key={`${busStop.BusStopCode}`}
            busStop={busStop}
            buses={buses}
            setDisplayBuses={setDisplayBuses}
          />
        );
      })}
    </div>
  );
}

export default BusStops;
