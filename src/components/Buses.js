import React from 'react';
import styles from '../styles/modules/todoItem.module.scss';

function Buses({ buses }) {
  // display buses
  return (
    <div className={styles.scroll}>
      {buses.Services.map((bus) => {
        let minutes = new Date().getTime();
        let m1 = new Date(bus.NextBus.EstimatedArrival).getTime();
        let m2 = new Date(bus.NextBus2.EstimatedArrival).getTime();
        let m3 = new Date(bus.NextBus3.EstimatedArrival).getTime();

        return (
          <div key={bus.ServiceNo} className={styles.item}>
            <h1>{bus.ServiceNo} </h1>
            <p className={styles.p}>
              {/* 
                check if NAN
                if < 0, display 0
              */}
              {isNaN(m1)
                ? 'NA'
                : Math.round((m1 - minutes) / 1000 / 60) < 0
                ? 0
                : Math.round((m1 - minutes) / 1000 / 60)}
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
