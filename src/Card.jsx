import React, { useState } from 'react';
import "../src/Card.css"; // Assuming you have a CSS file for styling


const Card = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editedData, setEditedData] = useState({ dob: '', country: '', description: '' });
  
  const toggleState = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    // Add logic for handling edit action
    console.log('Edit button clicked');
  setEditedData({
    dob: data[0].dob,
    country: data[0].country,
    description: data[0].description,
  });
  setIsOpen(true);
  };

  const handleSave = () => {
    // Add logic for handling save action
    console.log('Save button clicked');
    setIsOpen(false);
    // Add logic to update the data with editedData
  };

  const handleDelete = () => {
    // Add logic for handling delete action
    console.log('Delete button clicked');
  };

  const handleChange = (field, value) => {
    setEditedData({
      ...editedData,
      [field]: value,
    });
  };
 
 

  const handleInputChange = (field, value) => {
    handleChange(field, value);
  };
  
  const handleInputClick = (e) => {
    // Stop the propagation of the click event to prevent the card from closing
    e.stopPropagation();
  };

  return (
    <div>
      <div
        className={`card1 ${isOpen ? 'open1' : 'closed1'}`}
        onClick={toggleState}
      >
        <div className="header1">
          <div className="name-container1">
            <span>{data[0].first}</span>
            <span>{data[0].last}</span>
          </div>

          <span className="buttons">
            {isOpen ? (
              <>
                <input
                  type="text"
                  placeholder="DOB"
                  value={editedData.dob}
                  onChange={(e) =>
                    handleInputChange('dob', e.target.value)
                  }
                  onClick={handleInputClick}
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={editedData.country}
                  onChange={(e) =>
                    handleInputChange('country', e.target.value)
                  }
                  onClick={handleInputClick}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={editedData.description}
                  onChange={(e) =>
                    handleInputChange('description', e.target.value)
                  }
                  onClick={handleInputClick}
                />
                <button className="save-button" onClick={handleSave}>
                  Save
                </button>
              </>
            ) : (
              <>
                <button className="edit-button" onClick={handleEdit}>
                  Edit
                </button>
                <button className="delete-button" onClick={handleDelete}>
                  Delete
                </button>
              </>
            )}
            <span className="toggle-symbol">{isOpen ? 'V' : '^'}</span>
          </span>
        </div>
        {isOpen && (
          <div className="additional-info1">
            <p>Date of Birth: {data[0].dob}</p>
            <p>Country: {data[0].country}</p>
            <p>Description: {data[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;