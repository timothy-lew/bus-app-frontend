import React, { useState } from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import axios from 'axios';
import CheckButton from './CheckButton';

import { deleteBusStop } from '../slices/busStopSlice';
import { useDispatch } from 'react-redux';

import Config from '../config/config.js';

function BusStop2({ busStop, setBuses, setDisplayBuses }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  async function getBuses(busStopId) {
    try {
      let res = await axios({
        method: 'get',
        url: `${Config.base_url}/busstop/number/${busStopId}`,
        params: {
          number: busStopId,
        },
      });
      setBuses(res.data);
      setDisplayBuses(true);
    } catch (err) {
      console.log(err);
    }
  }

  const handleCheck = (busStopCode) => {
    if (checked) {
      setChecked(!checked);
      dispatch(deleteBusStop({ BusStopCode: busStopCode }));
    }
  };

  return (
    <div className={styles.scroll}>
      <div className={styles.item}>
        <h1 onClick={() => getBuses(busStop.BusStopCode)}>
          {busStop.BusStopCode}
        </h1>
        <h1 onClick={() => getBuses(busStop.BusStopCode)}>
          {busStop.Description}
        </h1>
        <div className={styles.todoDetails}>
          <CheckButton
            onClick={() => handleCheck(busStop.BusStopCode)}
            checked={checked}
            handleCheck={handleCheck}
            busStopCode={busStop.BusStopCode}
          />
        </div>
      </div>
    </div>
  );
}

export default BusStop2;
