import { useState } from "react";
import "./App.css";

export default function App({ users }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(users);

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value);

    // 바로 필터링된 사용자 목록을 업데이트
    const filteredUsers = users.filter((item) => item.name.includes(value));
    setFiltered(filteredUsers);
  };

  return (
    <div className="container">
      <div>
        <p>
          {users.length !== filtered.length
            ? `${filtered.length} matches`
            : null}
        </p>
      </div>

      <input onChange={handleChange} value={searchTerm} type="text" />

      <div className="cards">
        {filtered.map((user) => (
          <div className="card" key={user.id}>
            <div className="body">
              <strong>{user.name}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
