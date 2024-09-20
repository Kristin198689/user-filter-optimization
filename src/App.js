import React, { useState, useCallback, useMemo } from "react";
import UserList from "./UserList";

function App() {
  // Массив пользователей
  const userList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bobe" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eva" },
  ];

  // Состояние для фильтрации
  const [filter, setFilter] = useState("");

  // Функция фильтрации пользователей
  const filterUsers = useCallback(() => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  // Мемоизируем отфильтрованный список пользователей
  const filteredUsers = useMemo(() => filterUsers(), [filter, filterUsers]);

  return (
    <div>
      <h1>Фильтрация пользователей</h1>
      <input
        type="text"
        placeholder="Фильтровать по имени..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
