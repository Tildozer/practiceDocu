const BASE_URL = "https://api.harvardartmuseums.org";
const KEY = "apikey=a8c9fe57-9335-4961-ab49-f742a6634ed8"; // USE YOUR KEY HERE

async function fetchObjects() {
  const url = `${BASE_URL}/object?${KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

fetchObjects().then((x) => console.log(x)); // { info: {}, records: [{}, {},]}
