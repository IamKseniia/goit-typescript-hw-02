import axios, { AxiosResponse } from 'axios';
import { FetchPhotosResponse } from './types';

const ACCESS_KEY = 'aoijLXA1KGzoMKMJ5M3TNHR_79Pjcu6ivDc9hYTB_Es';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.headers.common['Accept-Version'] = 'v1';

export const fetchPhotos = async (
  query: string,
  page: number,
  perPage: number
): Promise<AxiosResponse<FetchPhotosResponse>> => {
  return axios.get(
    `/search/photos?page=${page}&per_page=${perPage}&query=${query}`
  );
};
