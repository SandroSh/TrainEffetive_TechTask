
import { useSearchInput } from './useSearchInput';
import { Input, SearchInputContainer } from './SearchInput.style';
import { SearchResults } from '../ResultContainer/ResultContainer';

export const SearchInput = () => {
  const { query, handleChange, userData } = useSearchInput();

  return (
    <>
      <SearchInputContainer>
        <Input
          placeholder='Searth the Profile...'
          type='text'
          value={query}
          onChange={handleChange}
        />
        <SearchResults userData={userData} />
      </SearchInputContainer>
    </>
  );
};
