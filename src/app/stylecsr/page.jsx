"use client";
import React, { useState, useEffect } from 'react';
import StyledTable from '../../components/StyledTable';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-6">User List</h1>
      <StyledTable data={users} />
    </div>
  );
};

export default Home;
