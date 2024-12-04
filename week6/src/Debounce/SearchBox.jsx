export function SearchBox({ value, onChange }) {
  return (
    <input
      type="search"
      placeholder="국가 이름을 입력하세요"
      value={value}
      onChange={onChange}
    />
  );
}
