import axios from 'axios';

const api = {
  trips: 'http://localhost:3000/desk/list',
  write: 'http://localhost:3000/desk/upload',
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
