import { createSlice } from '@reduxjs/toolkit';

const getInitialBusStops = () => {
  const localBusStopList = window.localStorage.getItem('busStopList');
  if (localBusStopList) {
    return JSON.parse(localBusStopList);
  }
  window.localStorage.setItem('busStopList', JSON.stringify([]));
  return [];
};

const getInitialBusStopCodes = () => {
  const localBusStopCodeList = window.localStorage.getItem('busStopCodeList');
  if (localBusStopCodeList) {
    return JSON.parse(localBusStopCodeList);
  }
  window.localStorage.setItem('busStopCodeList', JSON.stringify([]));
  return [];
};

const initialValue = {
  busStopList: getInitialBusStops(),
  busStopCodeList: getInitialBusStopCodes(),
};

export const busStopSlice = createSlice({
  name: 'busStop',
  initialState: initialValue,
  reducers: {
    addBusStop: (state, action) => {
      state.busStopList.push(action.payload);
      state.busStopCodeList.push(action.payload.BusStopCode);

      const busStopList = window.localStorage.getItem('busStopList');
      const busStopCodeList = window.localStorage.getItem('busStopCodeList');

      if (busStopList) {
        const busStopListArr = JSON.parse(busStopList);
        const busStopCodeListArr = JSON.parse(busStopCodeList);

        busStopListArr.push({
          ...action.payload,
        });
        busStopCodeListArr.push(action.payload.BusStopCode);

        window.localStorage.setItem(
          'busStopList',
          JSON.stringify(busStopListArr)
        );
        window.localStorage.setItem(
          'busStopCodeList',
          JSON.stringify(busStopCodeListArr)
        );
      } else {
        window.localStorage.setItem(
          'busStopList',
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
    deleteBusStop: (state, action) => {
      const busStopList = window.localStorage.getItem('busStopList');
      const busStopCodeList = window.localStorage.getItem('busStopCodeList');

      if (busStopList) {
        const busStopListArr = JSON.parse(busStopList);
        const busStopCodeListArr = JSON.parse(busStopCodeList);

        busStopListArr.forEach((busStop, index) => {
          if (busStop.BusStopCode === action.payload.BusStopCode) {
            busStopListArr.splice(index, 1); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
          }
        });
        busStopCodeListArr.forEach((busStop, index) => {
          if (busStop === action.payload.BusStopCode) {
            busStopCodeListArr.splice(index, 1);
          }
        });

        window.localStorage.setItem(
          'busStopList',
          JSON.stringify(busStopListArr)
        );
        window.localStorage.setItem(
          'busStopCodeList',
          JSON.stringify(busStopCodeListArr)
        );
        state.busStopList = busStopListArr;
        state.busStopCodeList = busStopCodeListArr;
      }
    },
  },
});

export const { addBusStop, deleteBusStop } = busStopSlice.actions;
export default busStopSlice.reducer;
