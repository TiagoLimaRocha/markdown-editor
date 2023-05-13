import axios from 'axios';

import { BASE_URL } from '../macros';

export async function upsert(markdown: string) {
  try {
    const response = axios
      .put(`${BASE_URL}/markdown`, { data: markdown })
      .then((response) => response.data.markdown);

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
