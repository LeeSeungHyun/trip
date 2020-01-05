import axios from 'axios';

let config = process.env.NODE_ENV === 'production'

const api = {
  trips: config ? 'https://frozen-hamlet-20379.herokuapp.com/trip/list' : 'http://localhost:3000/trip/list',
  write: config ? 'https://frozen-hamlet-20379.herokuapp.com/trip/upload' : 'http://localhost:3000/trip/upload',
};

function fetchTrips() {
  return axios.get(api.trips);
}

function tripWrite(formData) {
  return axios.post(api.write, formData);
}

export {
  fetchTrips,
  tripWrite
}
