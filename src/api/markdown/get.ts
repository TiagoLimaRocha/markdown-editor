import axios from 'axios';

import { BASE_URL } from '../macros';

export async function get() {
  try {
    const response = axios
      .get(`${BASE_URL}/markdown`)
      .then((response) => response.data.markdown);

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
