// App.js or App.jsx
import React, { useState } from 'react';
import './App.css';
import Chip from './Chip';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [availableUsers, setAvailableUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fman-face&psig=AOvVaw1FVZEEPzT3KNQSAsjgMofB&ust=1705484529269000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCAhJDP4YMDFQAAAAAdAAAAABAD' },
    { id: 2, name: 'ayush shukla', email: 'a@example.com', photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dman&psig=AOvVaw2rd6cbPSV4KGF9LNykwpnF&ust=1705484404713000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCIDl1dXO4YMDFQAAAAAdAAAAABAE' },
    { id: 3, name: 'arpit shukla', email: 'b@example.com', photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dman&psig=AOvVaw2rd6cbPSV4KGF9LNykwpnF&ust=1705484404713000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCIDl1dXO4YMDFQAAAAAdAAAAABAE' },
    { id: 4, name: 'ayush yadav', email: 'c@example.com', photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dman&psig=AOvVaw2rd6cbPSV4KGF9LNykwpnF&ust=1705484404713000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCIDl1dXO4YMDFQAAAAAdAAAAABAE' },
    { id: 5, name: 'anjali lalwani', email: 'd@example.com', photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dman&psig=AOvVaw2rd6cbPSV4KGF9LNykwpnF&ust=1705484404713000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCIDl1dXO4YMDFQAAAAAdAAAAABAE' },
    { id: 6, name: 'akash kumar', email: 'e@example.com', photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dman&psig=AOvVaw2rd6cbPSV4KGF9LNykwpnF&ust=1705484404713000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCIDl1dXO4YMDFQAAAAAdAAAAABAE' },
    { id: 7, name: 'akansha', email: 'f@example.com', photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dman&psig=AOvVaw2rd6cbPSV4KGF9LNykwpnF&ust=1705484404713000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCIDl1dXO4YMDFQAAAAAdAAAAABAE' },
    // Add more user data as needed
  ]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleInputClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleUserClick = (user) => {
    setSelectedUsers((prevUsers) => [...prevUsers, user]);
    setAvailableUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
    setInputValue('');
    setDropdownOpen(false);
  };

  const handleRemoveChip = (removedUser) => {
    setSelectedUsers((prevUsers) => prevUsers.filter((user) => user.id !== removedUser.id));
    setAvailableUsers((prevUsers) => [...prevUsers, removedUser]);
  };

  return (
    <div className="App">
      <div className="chips-container">
        {selectedUsers.map((user) => (
          <Chip key={user.id} label={user.name} onRemove={() => handleRemoveChip(user)} />
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onClick={handleInputClick}
        placeholder="Select users"
        readOnly
      />
      {isDropdownOpen && (
        <div className="dropdown">
          {availableUsers.map((user) => (
            <div key={user.id} onClick={() => handleUserClick(user)}>
              <img src={user.photo} alt={user.name} width="30" height="30" />
              <span>{user.name}</span>
              <span>{user.email}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
