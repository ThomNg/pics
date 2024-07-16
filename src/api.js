import axios from "axios";

const searchImg = async (searchTerm) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers : {
      Authorization: 'Client-ID oPrP56uZsGVCMCVumB9s9elWUX5qhg3O74kXTZDkVF0'
    },
    params: {
      query: searchTerm,
    },
  });

  return response.data.results;

};

export default searchImg;