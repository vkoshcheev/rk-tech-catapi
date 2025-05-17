const apiKey = 'live_Y8yNDaEkp1Woq64akk2x0KoEztP23CFwXMzIKv06BbRPIiAxHpWh0WwA96iH1wTR';
const apiUrl =
  'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';

export const requestCatImage = async () => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  });

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
  };

  return fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      return { url: data[0].url as string, error: null };
    })
    .catch((error) => {
      console.log('Error: ', error);
      return { url: null, error: error.toString() };
    });
};
