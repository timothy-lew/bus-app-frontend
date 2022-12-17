import axios from 'axios';

export async function getBusesByBusStopCode(busStopCode) {
  try {
    let res = await axios({
      method: 'get',
      url: `http://localhost:3000/busstop/number/${busStopCode}`,
    });

    // console.log(res.data);

    // console.log(res.data.BusStopCode);

    return res.data;
  } catch (err) {
    console.log(err);
  }
}
