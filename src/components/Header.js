import DetailsHeader from './DetailsHeader';
import Filter from './Filter';

const Header = ({
  handleSearchFilter,
  toggleModal,
  details,
  data,
  handleLocationSearch,
  onChange,
  onChangeCheckBox,
}) => {
  return details ? (
    <DetailsHeader data={data} />
  ) : (
    <Filter
      handleLocationSearch={handleLocationSearch}
      handleSearchFilter={handleSearchFilter}
      toggleModal={toggleModal}
      onChange={onChange}
      onChangeCheckBox={onChangeCheckBox}
    />
  );
};

export default Header;
