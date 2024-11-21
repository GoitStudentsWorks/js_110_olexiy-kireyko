import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study';
const END_POINT = '/api/reviews';

async function getReviews() {
  const { data } = await axios(BASE_URL + END_POINT);
  console.log(data);

  return data;
}

await getReviews();
