import { SetStateAction, useEffect, useState } from 'react';
import { Input, SearchInputContainer } from './styles/SearchInput.style'
import { useDebounce } from '../DebounceHook';
import { useQuery } from '@tanstack/react-query';
import { user } from '../types';
import { SearchResults } from './ResultContainer';


export const SearchInput = () => {
  const [query, setQuery] = useState<string>("");
  const [userData, setUserData] = useState<user[] | null>(null);
  const debauncedSearch = useDebounce(query);

  const fetchUsers = async () => {
    const API_URL = `https://api.github.com/search/users?q=${debauncedSearch}&per_page=5`;
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.status}`);
    }
    const data = await response.json();

    return data;

  }

  const { data } = useQuery({
    queryFn: () => fetchUsers(),
    queryKey: ['users'],
    enabled: !!debauncedSearch,
  });

  useEffect(() => {
    if (debauncedSearch) {
      fetchUsers();
      setQuery("");
    }

    if (data) {
      const result = data.items;
      setUserData([...new Set([...result])]);

    }

  }, [data, debauncedSearch]);


  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchInputContainer>
        <Input placeholder='Searth the Profile...' type='text' name='text' onChange={handleChange}></Input>
        <SearchResults userData={userData} />
      </SearchInputContainer>
    </>
  )
}
