import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import axios from 'axios';
import toast from 'react-hot-toast';

import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

async function getBusStop(busStop) {
  try {
    console.log('busStop: ', busStop);
    let res = await axios({
      method: 'get',
      url: `http://localhost:3000/busstop/${busStop}`,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }

  // axios
  //   .get(`http://localhost:3000/${busStop}`)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     if (error.response) {
  //       console.log('in err');
  //       console.log(error.response); // => the response payload
  //     }
  //   });
}

function BusModel({ modelOpen, setModelOpen }) {
  const [busStop, setBusStop] = useState('');

  // useEffect(() => {
  //   let res = axios({
  //     method: 'get',
  //     url: `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${busStop}`,
  //     headers: {
  //       AccountKey: 'ZbRKQU+sTGeHkcgjAACh6g==',
  //     },
  //   });
  //   console.log(res);
  // }, []);

  return (
    modelOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setModelOpen(false)}
            onKeyDown={() => setModelOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form className={styles.form}>
            <h1 className={styles.formTitle}>Search bus stop</h1>
            <label htmlFor="busStop">
              Bus stop number
              <input
                type="text"
                id="busStop"
                value={busStop}
                onChange={(e) => {
                  console.log(e.target.value);
                  setBusStop(e.target.value);
                }}
              />
            </label>
            <div className={styles.buttonContainer}>
              <Button
                type="submit"
                variant="primary"
                onClick={getBusStop(busStop)}
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
        </div>
      </div>
    )
  );
}

export default BusModel;
