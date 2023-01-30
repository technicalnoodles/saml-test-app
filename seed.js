const axios = require('axios');
axios.post(
  'http://localhost:5000/api/event',
  { title: '55 RDP sessions detected' },
  {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
);

axios.post(
  'http://localhost:5000/api/event',
  { title: '24 SSH sessions from unknown origin' },
  {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
);
axios.post(
  'http://localhost:5000/api/event',
  { title: 'WebEx OAuth not implemented' },
  {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
);
