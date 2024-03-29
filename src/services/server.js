import axios from 'axios';

import { API_URL, IMAGE_API_URL, TOKEN_KEY } from '../config';

const axiosInstance = axios.create({ baseURL: API_URL });

const getAuthHeader = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const createConfig = (customHeaders) => {
  return {
    headers: {
      ...getAuthHeader(),
      ...customHeaders
    }
  };
};

const server = {
  async get({ url }) {
    const { data: fetchedData } = await axiosInstance.get(url, createConfig());
    return fetchedData;
  },

  async post({ url, data }) {
    const { data: fetchedData } = await axiosInstance.post(url, data, createConfig());
    return fetchedData;
  },

  async put({ url, data }) {
    const { data: fetchedData } = await axiosInstance.put(url, data, createConfig());
    return fetchedData;
  },

  async delete({ url }) {
    const { data: fetchedData } = await axiosInstance.delete(url, createConfig());
    return fetchedData;
  },

  async postImage({ imageBase64, imageName }) {
    const formData = new FormData();
    formData.append('image', imageBase64);
    formData.append('name', imageName);

    const {
      data: {
        data: {
          image: { url }
        }
      }
    } = await axios.post(IMAGE_API_URL, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    return url;
  }
};

export default server;
