import { Triangle } from 'react-loader-spinner';
import { LoadStyle } from './Loader.styled';

const Loader = () => {
  return (
    <LoadStyle>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </LoadStyle>
  );
};

export default Loader;
