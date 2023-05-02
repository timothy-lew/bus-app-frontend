import React, { useState } from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import axios from 'axios';
import CheckButton from './CheckButton';
import getBusesByBusStopCode from '../utils/getBusesByBusStopCode';

import { addBusStop, deleteBusStop } from '../slices/busStopSlice';
import { useDispatch } from 'react-redux';

function BusStop2({ busStop, setBuses, setDisplayBuses }) {
  console.log(busStop);
  // console.log(buses);

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  async function getBuses(busStopId) {
    try {
      let res = await axios({
        method: 'get',
        url: `http://localhost:3000/busstop/number/${busStopId}`,
      });
      setBuses(res.data);
      setDisplayBuses(true);
    } catch (err) {
      console.log(err);
    }
  }

  const handleCheck = (busStopCode) => {
    // console.log(busStopCode);
    if (!checked) {
      setChecked(!checked);
      dispatch(addBusStop({ busStopCode: busStopCode }));
    } else {
      console.log('HIT ELSE');
      setChecked(!checked);
      dispatch(deleteBusStop({ busStopCode: busStopCode }));
    }
  };

  return (
    <div className={styles.scroll}>
      <div className={styles.item}>
        <h1
          // onClick={(buses) => {
          //   let res = getBusesByBusStopCode(busStop.busStopCode);
          //   console.log(typeof buses);
          //   buses.push(res);
          //   setDisplayBuses(true);
          // }}
          onClick={() => getBuses(busStop.busStopCode)}
        >
          {busStop.busStopCode}
        </h1>
        <h1 onClick={() => getBuses(busStop.busStopCode)}>
          {busStop.description}
        </h1>
        <p onClick={() => getBuses(busStop.BusStopCode)}>{busStop.RoadName}</p>
        <div
          className={styles.todoDetails}
          onClick={() => console.log('clicked')}
        >
          <CheckButton
            onClick={() => handleCheck(busStop.BusStopCode)}
            checked={checked}
            handleCheck={handleCheck}
            busStopCode={busStop.busStopCode}
          />
        </div>
      </div>
    </div>
  );
}

export default BusStop2;
