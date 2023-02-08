import { Header, Form, FormButton, FormInput } from './Searchbar.styled';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  return (
    <Header className="searchbar">
      <Form className="form" onSubmit={onSubmit}>
        <FormButton type="submit" className="button">
          <span className="button-label">Search</span>
        </FormButton>

        <FormInput
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
