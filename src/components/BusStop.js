import React, { useState, useEffect } from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import axios from 'axios';
import CheckButton from './CheckButton';

import { addBusStop, deleteBusStop } from '../slices/busStopSlice';
import { useDispatch } from 'react-redux';

function BusStop({ busStop, setBuses, setDisplayBuses, isChecked }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isChecked);

  // useEffect(() => {
  //   console.log(checked);
  // }, [checked]);

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

  const handleCheck = (busStopCode, description, roadName) => {
    if (!checked) {
      setChecked(!checked);
      dispatch(
        addBusStop({
          BusStopCode: busStopCode,
          Description: description,
          RoadName: roadName,
        })
      );
    } else {
      setChecked(!checked);
      dispatch(deleteBusStop({ BusStopCode: busStopCode }));
    }
  };

  return (
    <div className={styles.scroll}>
      <div className={styles.item}>
        <h1 onClick={() => getBuses(busStop.BusStopCode)}>
          {busStop.Description}
        </h1>
        <p onClick={() => getBuses(busStop.BusStopCode)}>{busStop.RoadName}</p>
        <div className={styles.todoDetails}>
          <CheckButton
            checked={checked}
            handleCheck={handleCheck}
            busStopCode={`${busStop.BusStopCode}`}
            description={`${busStop.Description}`}
            roadName={`${busStop.RoadName}`}
          />
        </div>
      </div>
    </div>
  );
}

export default BusStop;
