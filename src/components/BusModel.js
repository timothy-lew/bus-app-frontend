import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import axios from 'axios';
// import toast from 'react-hot-toast';

import styles from '../styles/modules/modal.module.scss';
import Button from './Button';
import Buses from './Buses';
import BusStops from './BusStops';

function BusModel({ modelOpen, setModelOpen }) {
  const [busStopName, setBusStopName] = useState('orchard');

  const [buses, setBuses] = useState([]);
  const [busStops, setBusStops] = useState([]);

  const [displayBuses, setDisplayBuses] = useState(false);
  const [displayBusStops, setDisplayBusStops] = useState(false);

  async function getBusStop(busStopName) {
    try {
      console.log('busStopName = ', busStopName);
      let res = await axios({
        method: 'get',
        url: `http://localhost:3000/busstop/name/${busStopName}`,
      });
      let res_json = JSON.stringify(res.data);

      busStops.push(JSON.parse(res_json));

      setDisplayBusStops(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    modelOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => {
              setBuses([]);
              setBusStops([]);
              setBusStopName('');
              setDisplayBuses(false);
              setDisplayBusStops(false);
              setModelOpen(false);
            }}
            onKeyDown={() => {
              setBuses([]);
              setBusStops([]);
              setBusStopName('');
              setDisplayBuses(false);
              setDisplayBusStops(false);
              setModelOpen(false);
            }}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          {displayBuses ? (
            <Buses buses={buses} />
          ) : displayBusStops ? (
            <BusStops
              busStops={busStops}
              buses={buses}
              displayBuses={displayBuses}
              setDisplayBuses={setDisplayBuses}
            />
          ) : (
            <form className={styles.form}>
              <h1 className={styles.formTitle}>Search bus stop</h1>
              <label htmlFor="busStopName">
                Stop name
                <input
                  type="text"
                  id="busStopName"
                  value={busStopName}
                  onChange={(e) => {
                    setBusStopName(e.target.value);
                  }}
                />
              </label>
              <div className={styles.buttonContainer}>
                <Button
                  type="submit"
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    getBusStop(busStopName);
                  }}
                >
                  Search
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setModelOpen(false)}
                  onKeyDown={() => setModelOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  );
}

export default BusModel;