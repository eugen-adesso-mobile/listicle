import axios from 'axios';
import Config from 'react-native-config';

export const request = ({url, method, data}) => {
  return axios({
    method: method || 'get',
    url: `${Config.API_BASE_URL}${url}`,
    data,
  })
    .then(response => {
      console.log('response :>> ', response);
    })
    .catch(error => {
      console.log('error: >> ', error);
    });
};
