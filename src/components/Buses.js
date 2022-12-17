import React from 'react';
import styles from '../styles/modules/todoItem.module.scss';

function Buses({ buses }) {
  // console.log(busStops);
  // console.log(busStops[0]);

  // busStops[0].Services.map((busStop) => {
  //   console.log(busStop.NextBus.EstimatedArrival);
  // });

  return (
    <div className={styles.scroll}>
      {buses[0].Services.map((bus) => {
        let minutes = new Date().getMinutes();
        let m = new Date(bus.NextBus.EstimatedArrival).getMinutes();
        let m2 = new Date(bus.NextBus2.EstimatedArrival).getMinutes();
        let m3 = new Date(bus.NextBus3.EstimatedArrival).getMinutes();

        // function needs to return something
        return (
          <div key={bus.ServiceNo} className={styles.item}>
            <h1>{bus.ServiceNo} </h1>
            <p className={styles.p}>{Math.abs(m - minutes)}</p>
            <p className={styles.p}>{Math.abs(m2 - minutes)}</p>
            <p className={styles.p}>{Math.abs(m3 - minutes)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Buses;
