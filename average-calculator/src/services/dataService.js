const fetch = require('node-fetch');

async function fetchNumbers(type) {
  const token = process.env.BEARER_TOKEN;
  let url;
  switch (type) {
    case 'f':
      url = 'http://20.244.56.144/test/fibonacci';
      break;
    case 'e':
      url = 'http://20.244.56.144/test/even';
      break;
    case 'r':
      url = 'http://20.244.56.144/test/random';
      break;
    default:
      throw new Error(`Unknown type: ${type}`);
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch numbers. Status: ${response.status}`);
  }

  const data = await response.json();
  return data.numbers || [];
}

module.exports = {
  fetchNumbers
};
