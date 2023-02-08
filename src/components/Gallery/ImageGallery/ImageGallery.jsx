import { UlGalary, LiGalary, ImgGalary } from './GaleryImage.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClick }) => {
  return (
    <UlGalary className="gallery">
      {images.map(image => (
        <LiGalary key={image.id} className="gallery-item">
          <ImgGalary
            onClick={() => onClick(image.largeImageURL)}
            src={image.webformatURL}
            alt={image.tags}
          />
        </LiGalary>
      ))}
    </UlGalary>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};
export default ImageGallery;
