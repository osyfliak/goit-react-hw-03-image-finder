import getImage from 'components/services/gallary-app';
import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default class Gallery extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loader: false,
    modal: false,
    modalImg: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
				const { query, loader, page } = this.state;
				this.setState({ loader: !loader, });
				const data = await getImage({ q: query, page });
				if (data.hits.length) {
					this.setState(prevState => {
						return {
							images: [...prevState.images, ...data.hits],
						};
					});
				} else {
					Notify.failure('Error11');
				}

			} catch (error) {
        console.log(error);
        Notify.failure('Error');
      } finally {
        this.setState({ loader: !this.state.loader });
      }
    }
  }
  onLoadMoreButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSearch = e => {
    e.preventDefault();
    if (this.state.query === e.target.elements.query.value) {
      return;
    }
    this.setState({
      query: e.target.elements.query.value,
      page: 1,
      images: [],
    });
  };

  toggleModal = imageURL => {
    this.setState(({ modal }) => ({
      modal: !modal,
      modalImg: imageURL,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={this.state.images} onClick={this.toggleModal} />
        {this.state.images.length > 0 && (
          <Button onClick={this.onLoadMoreButton} />
        )}
        {this.state.loader && <Loader />}
        {this.state.modal && (
          <Modal modalImg={this.state.modalImg} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}
