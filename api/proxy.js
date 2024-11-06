const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        'https://api.betterplace.co.in/api/ess-service/v1/public/upskill/register',
        req.body,
        {
          headers: {
            'Authorization': 'Bearer JZzPUvNQmowjclqgsqyW0Izv0bj0ZI73-gg7wfbU0HU=',
            'Content-Type': 'application/json'
          }
        }
      );

      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
};