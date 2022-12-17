import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import axios from 'axios';
// import toast from 'react-hot-toast';

import styles from '../styles/modules/modal.module.scss';
import Button from './Button';
import Buses from './Buses';
import BusStops from './BusStops';

function BusModel({ modelOpen, setModelOpen }) {
  const [busStopId, setBusStopId] = useState('');
  const [busStopName, setBusStopName] = useState('orchard');

  const [buses, setBuses] = useState([]);
  const [busStops, setBusStops] = useState([]);

  const [displayBuses, setDisplayBuses] = useState(false);
  const [displayBusStops, setDisplayBusStops] = useState(false);

  async function getBusStop(busStopId, busStopName) {
    try {
      console.log('busStopId = ', busStopId);
      console.log('busStopName = ', busStopName);

      if (busStopId) {
        let res = await axios({
          method: 'get',
          url: `http://localhost:3000/busstop/number/${busStopId}`,
        });
        let res_json = JSON.stringify(res.data);
        // console.log(res_json);

        let services = res.data.Services;
        // console.log('logging services', JSON.stringify(services));

        // need to convert back to json object
        buses.push(JSON.parse(res_json));
        // console.log(buses);

        console.log('logging bus stops', buses);
        setDisplayBuses(true);
      } else {
        let res = await axios({
          method: 'get',
          url: `http://localhost:3000/busstop/name/${busStopName}`,
        });
        let res_json = JSON.stringify(res.data);
        console.log(res_json);

        busStops.push(JSON.parse(res_json));

        setDisplayBusStops(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  // useEffect(() => {
  //   console.log('displayBuses: ', displayBuses);
  //   console.log('buses: ', buses);
  // }, [displayBuses, buses]);

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
              <label htmlFor="busStopId">
                Bus stop number
                <input
                  type="text"
                  id="busStopId"
                  value={busStopId}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setBusStopId(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="busStopName">
                Stop name
                <input
                  type="text"
                  id="busStopName"
                  value={busStopName}
                  onChange={(e) => {
                    // console.log(e.target.value);
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
                    getBusStop(busStopId, busStopName);
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
