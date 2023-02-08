import axios from "axios";



//    const getImage = async (searchValue, page) => {
//   const BASE_URL = 'https://pixabay.com/api';
//   const OPTIONS = `q=${searchValue}&page=${page}&key=32803223-d7ae4ad2160d4578da0803e08&image_type=photo&orientation=horizontal&per_page=12`;
//   const response = await axios.get(`${BASE_URL}/?${OPTIONS}`);
//   return response.data;
// };
// export default getImage;

axios.defaults.baseURL = 'https://pixabay.com/api/';

 const getImage = async (searchValue, page) => {
  const response = await axios.get(
    `?q=${searchValue}&page=${page}&key=31844347-16adccdcc2872ee3a7bce49dd&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
export default getImage;
