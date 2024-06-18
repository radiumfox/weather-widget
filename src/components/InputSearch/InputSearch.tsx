import Search from '@/assets/icons/Search';
import Location from '@/assets/icons/Location'
import styles from './styles';

export default function InputSearch() {
  const { 
    IconSearchContainer, 
    InputSearch, 
    LocationContainer 
  } = styles;

  return (
    <div>
      <IconSearchContainer>
        <Search />
      </IconSearchContainer>
      
      <InputSearch type="search">
      </InputSearch>

      <LocationContainer>
        <Location/>
      </LocationContainer>
    </div>
  );
}

