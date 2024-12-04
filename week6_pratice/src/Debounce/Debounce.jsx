import { Search } from "./Search";
import { DebouncedSearch } from "./DebouncedSearch";

export function Debounce() {
  return (
    <>
      <header className="container-fluid">
        <h2>국가 검색</h2>
      </header>
      <main className="container-fluid">
        <div className="grid">
          <article>
            <header>
              <h3>일반 버전</h3>
            </header>
            <Search />
          </article>
          <article>
            <header>
              <h3>향상된 버전 (Debounced)</h3>
            </header>
            <DebouncedSearch />
          </article>
        </div>
      </main>
    </>
  );
}
