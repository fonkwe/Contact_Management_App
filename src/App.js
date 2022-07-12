import React from 'react';
import Header from "./components/Header";
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const contacts = [
    {
      id: "1",
      "name": "Cedric",
      "email": "cedric@gmail.com"
    },
    {
      id: "2",
      "name": "Silas",
      "email": "silas@gmail.com"
    },
  ];
  return (
    <div className="ui container">
      <Header /> 
      <AddContact />
      <ContactList contacts = {contacts}/> 
    </div>
  )
}

export default App;
