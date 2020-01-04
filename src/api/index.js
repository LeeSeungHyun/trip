import axios from 'axios';

let config = process.env.NODE_ENV === 'production'

const api = {
  trips: config ? '' : 'http://localhost:3000/desk/list',
  write: config ? '' : 'http://localhost:3000/desk/upload',
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
