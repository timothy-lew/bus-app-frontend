import env from 'react-dotenv';

const Config = {
  base_url: env.BASE_URL,
  by_name_url: env.GET_BUS_STOP_BY_NAME_URL,
  by_number_url: env.GET_BUS_STOP_BY_NUMBER_URL,
};
export default Config;
