import axios from 'axios';

const KEY = 'AIzaSyD0yvoWRiEVJIO7MzI_oRZ4bSc2r-8UZ20';

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: KEY
  };

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });
