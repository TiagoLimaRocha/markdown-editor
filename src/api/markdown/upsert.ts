import axios from 'axios';

import { BASE_URL } from '../macros';

export async function upsert(id: string, markdown: string) {
  try {
    const response = axios
      .put(`${BASE_URL}/markdown/${id}`, { data: { markdown } })
      .then((response) => response.data.markdown);

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
