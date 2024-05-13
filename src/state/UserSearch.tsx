import React, { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

export const UserSearch: React.FC = () => {
  const inputRef = useRef <HTMLInputElement | null>(null)
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser)
  };

  return (
    <div>
      UserSearch
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};