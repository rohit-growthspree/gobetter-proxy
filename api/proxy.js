const axios = require('axios');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://www.skillbetter.ai');  // Replace with the exact domain of your Webflow site
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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
