import { useState, useEffect } from 'react';
import './App.css';
import UsersList from './components/users-list';
import Modal from './components/modal'
import { User } from './definitions';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
          `http://localhost:3030/users`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setUsers(postsData);
      } catch (err) {
        setUsers([]);
      }
  }

  const deleteUser = async (id: string) => {
    try {
      const response = await fetch(
          `http://localhost:3030/users/${id}`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        fetchUsers();
      } catch (err) {
      }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    fetchUsers();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users dashboard</h1>
      </header>
      <button className='new' onClick={() => openModal()}>New User</button>
      <UsersList users={users} deleteUser={deleteUser}/>
      <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      />
    </div>
  );
}

export default App;
