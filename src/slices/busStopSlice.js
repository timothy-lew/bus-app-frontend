import { createSlice } from '@reduxjs/toolkit';

const getInitialBusStops = () => {
  const localBusStopList = window.localStorage.getItem('busStopList');
  if (localBusStopList) {
    return JSON.parse(localBusStopList);
  }
  window.localStorage.setItem('busStopList', JSON.stringify([]));
  return [];
};

const initialValue = {
  busStopList: getInitialBusStops(),
};

export const busStopSlice = createSlice({
  name: 'busStop',
  initialState: initialValue,
  reducers: {
    addBusStop: (state, action) => {
      // console.log(initialValue);
      // console.log(action.payload);

      // if (state.busStopList.includes(action.payload)) {
      //   console.log('HIT IF');
      //   return;
      // }
      state.busStopList.push(action.payload);

      const busStopList = window.localStorage.getItem('busStopList');
      if (busStopList) {
        const busStopListArr = JSON.parse(busStopList);
        busStopListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem(
          'busStopList',
          JSON.stringify(busStopListArr)
        );
      } else {
        window.localStorage.setItem(
          'busStopList',
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
    deleteBusStop: (state, action) => {
      // console.log(initialValue);
      // console.log(action.payload);

      const busStopList = window.localStorage.getItem('busStopList');
      console.log(busStopList);
      if (busStopList) {
        const busStopListArr = JSON.parse(busStopList);
        console.log(busStopListArr);

        busStopListArr.forEach((busStop, index) => {
          // console.log(busStop);
          if (busStop.busStopCode === action.payload.busStopCode) {
            busStopListArr.splice(index, 1); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
          }
        });
        window.localStorage.setItem(
          'busStopList',
          JSON.stringify(busStopListArr)
        );
        state.busStopList = busStopListArr;
      }
    },
  },
});

export const { addBusStop, deleteBusStop } = busStopSlice.actions;
export default busStopSlice.reducer;
