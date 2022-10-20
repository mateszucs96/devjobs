import DetailsHeader from './DetailsHeader';
import Filter from './Filter';

const Header = ({
  handleSearchFilter,
  toggleModal,
  details,
  data,
  handleLocationSearch,
}) => {
  return details ? (
    <DetailsHeader data={data} />
  ) : (
    <Filter
      handleLocationSearch={handleLocationSearch}
      handleSearchFilter={handleSearchFilter}
      toggleModal={toggleModal}
    />
  );
};

export default Header;
