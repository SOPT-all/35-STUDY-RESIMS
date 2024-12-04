import { useEffect, useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";
import { fetchCountries } from "./countries";
import { useDebouncedState } from "./useDebouncedState";

export function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedState(query, 1_000);
  const [countries, setCountries] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSearching(true);
    console.log("이벤트 발생");
    fetchCountries(debouncedQuery).then((countries) => {
      setCountries(countries);
      setSearching(false);
    });
  }, [debouncedQuery]);

  return (
    <>
      <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchResults countries={countries} searching={searching} />
    </>
  );
}
