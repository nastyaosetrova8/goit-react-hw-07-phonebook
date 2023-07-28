import PropTypes from 'prop-types';
import { FilterStyled } from './FilterStyled';


export default function Filter(props) {
  const { filterValue, filterContact } = props;

  const handleInputChange = event => {
    filterContact(event.target.value);
  };

  return (
    <FilterStyled>
      <input
        value={filterValue}
        onChange={handleInputChange}
        type="text"
        name="search"
      />
    </FilterStyled>
  );
}

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
