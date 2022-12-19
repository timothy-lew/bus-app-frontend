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
        let minutes = new Date().getTime();
        let m1 = new Date(bus.NextBus.EstimatedArrival).getTime();
        let m2 = new Date(bus.NextBus2.EstimatedArrival).getTime();
        let m3 = new Date(bus.NextBus3.EstimatedArrival).getTime();

        // Math.round(num * 10) / 10
        // function needs to return something
        return (
          <div key={bus.ServiceNo} className={styles.item}>
            <h1>{bus.ServiceNo} </h1>
            <p className={styles.p}>
              {!isNaN(m1) ? Math.round((m1 - minutes) / 1000 / 60) : 'NA'}
            </p>
            <p className={styles.p}>
              {!isNaN(m2) ? Math.round((m2 - minutes) / 1000 / 60) : 'NA'}
            </p>
            <p className={styles.p}>
              {!isNaN(m3) ? Math.round((m3 - minutes) / 1000 / 60) : 'NA'}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Buses;
