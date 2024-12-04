import { useEffect, useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";
import { fetchCountries } from "./countries";

export function Search() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSearching(true);
    console.log("이벤트 발생");
    fetchCountries(query).then((countries) => {
      setCountries(countries);
      setSearching(false);
    });
  }, [query]);

  return (
    <>
      <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchResults countries={countries} searching={searching} />
    </>
  );
}
