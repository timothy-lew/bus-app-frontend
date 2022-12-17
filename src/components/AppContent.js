import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from '../styles/modules/app.module.scss';
// import BusStops from './BusStops';

import BusStops2 from './BusStops2';

// import Starred from './Starred';

import { getBusesByBusStopCode } from '../utils/getBusesByBusStopCode';

function AppContent() {
  const busStops = useSelector((state) => state.busStop.busStopList);
  // console.log(busStops);

  busStops.map(async (busStop) => {
    // try {
    // console.log(busStop);
    let buses = await getBusesByBusStopCode(busStop.busStopCode);
    // console.log(JSON.stringify(buses));

    buses.Services.map((bus) => {
      let minutes = new Date().getMinutes();
      let m = new Date(bus.NextBus.EstimatedArrival).getMinutes();
      let m2 = new Date(bus.NextBus2.EstimatedArrival).getMinutes();
      let m3 = new Date(bus.NextBus3.EstimatedArrival).getMinutes();

      // console.log(JSON.stringify(bus));
      return (
        <div key={bus.ServiceNo} className={styles.item}>
          <h1>{bus.ServiceNo} </h1>
          <p className={styles.p}>{Math.abs(m - minutes)}</p>
          <p className={styles.p}>{Math.abs(m2 - minutes)}</p>
          <p className={styles.p}>{Math.abs(m3 - minutes)}</p>
        </div>
      );
    });
    // } catch (err) {
    //   console.log(err);
    // }
  });

  return (
    <div className={styles.content__wrapper}>
      <BusStops2 busStops={busStops} />{' '}
    </div>
  );
}

export default AppContent;
