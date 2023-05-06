import React from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import BusStop from './BusStop';

function BusStops({ busStops, setBuses, setDisplayBuses }) {
  const localBusStopCodeList = JSON.parse(
    window.localStorage.getItem('busStopCodeList')
  );

  return (
    <div className={styles.scroll}>
      {busStops.map((busStop) => {
        // function needs to return something
        return (
          <BusStop
            key={`${busStop.BusStopCode}`}
            busStop={busStop}
            setBuses={setBuses}
            isChecked={localBusStopCodeList.includes(`${busStop.BusStopCode}`)}
            setDisplayBuses={setDisplayBuses}
          />
        );
      })}
    </div>
  );
}

export default BusStops;
