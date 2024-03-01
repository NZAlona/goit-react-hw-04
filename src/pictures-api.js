import axios from 'axios';

const ACCESS_KEY = 'ceVlrHZv7L3bZdc3FH4SH4y_1SvdB9P0t6Nx-6dUzZc';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPictures = async (request, page) => {
  const response = await axios.get(`/search/photos/?&client_id=${ACCESS_KEY}`, {
    params: {
      query: request,
      per_page: 20,
      page,
    },
  });
  // return response.data.results;
  const { results, total_pages } = response.data;
  return { total_pages, results };
};
