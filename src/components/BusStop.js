import React, { useState } from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import axios from 'axios';
import CheckButton from './CheckButton';

import { addBusStop, deleteBusStop } from '../slices/busStopSlice';
import { useDispatch } from 'react-redux';

function BusStop({ busStop, buses, displayBuses, setDisplayBuses }) {
  // console.log(busStop);

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  async function getBuses(busStopId) {
    try {
      let res = await axios({
        method: 'get',
        url: `http://localhost:3000/busstop/number/${busStopId}`,
      });
      let res_json = JSON.stringify(res.data);

      let services = res.data.Services;

      // need to convert back to json object
      buses.push(JSON.parse(res_json));
      setDisplayBuses(true);
    } catch (err) {
      console.log(err);
    }
  }

  const handleCheck = (busStopCode) => {
    console.log(busStopCode);
    if (!checked) {
      setChecked(!checked);
      dispatch(addBusStop({ busStopCode: busStopCode }));
    } else {
      setChecked(!checked);
      dispatch(deleteBusStop({ busStopCode: busStopCode }));
    }
  };

  return (
    <div className={styles.scroll}>
      <div key={busStop.BusStopCode} className={styles.item}>
        <h1 onClick={() => getBuses(busStop.BusStopCode)}>
          {busStop.Description}
        </h1>
        <p onClick={() => getBuses(busStop.BusStopCode)}>{busStop.RoadName}</p>
        <div
          className={styles.todoDetails}
          onClick={() => console.log('clicked')}
        >
          <CheckButton
            checked={checked}
            handleCheck={handleCheck}
            busStopCode={`${busStop.BusStopCode}`}
          />
        </div>
      </div>
    </div>
  );
}

export default BusStop;
