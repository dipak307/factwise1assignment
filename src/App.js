import React from 'react';
import './App.css';
import { useState } from 'react';
import Data from "./data.json";
import Card from './Card';
import "./Card.css";

function App() {
  const initialData = JSON.parse(JSON.stringify(Data));
  

  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState([]);
  // State to store edited data



  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleExpansion = (index) => {
    setExpandedItems((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      if (newExpanded.includes(index)) {
        // Remove index if already expanded
        newExpanded.splice(newExpanded.indexOf(index), 1);
      } else {
        // Add index if not expanded
        newExpanded.push(index);
      }
      return newExpanded;
    });
  };

  const filteredData = initialData.filter((item) =>
    item.first.toLowerCase().startsWith(searchTerm.toLowerCase())
  );





  return (
    <>
      <Card data={Data} />
      <div>
        {/* List View Search bar */}
        <div className='input1'>
          <label htmlFor="listViewSearch">List View : </label>
          <input
            type="text"
            id="listViewSearch"
            placeholder="Search by Name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {searchTerm.length > 0 &&
          filteredData.map((curr, index) => (
            <div key={index} className="card">
              {/* Left side showing first and last name */}
              <div className="left-side">
                <span>{curr.first} </span> <span> {curr.last}</span>
              </div>

              {/* Right side with toggle symbol */}
              <div
                className="right-side"
                onClick={() => toggleExpansion(index)}
              >
                <p className="toggle-symbol">
                  {expandedItems.includes(index) ? 'v' : '^'}
                </p>
              </div>

              {/* Additional details (visible if expanded) */}
              {expandedItems.includes(index) && (
                <div className="additional-details">
                  <p>Details:</p>
                  <ul>
                    <li>DOB : {curr.dob}</li>
                    <li>Email: {curr.email}</li>
                    <li>country: {curr.country}</li>
                    <li>description: {curr.description}</li>
                    {/* Add more details as needed */}
                  </ul>
                </div>
              )}

              {/* Buttons for edit, save, and delete */}
              

             


              {/* Clickable area to toggle expansion */}
              <div
                className="toggle-area"
                onClick={() => toggleExpansion(index)}
              ></div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;

