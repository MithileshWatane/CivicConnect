import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/complaints.css';
import './styles/main.css';

export default function Complaints() {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (description.trim() === '') {
      alert('Please provide a valid complaint description.');
      return;
    }

    alert(`Complaint submitted in the "${category}" domain. Thank you!`);
    // Reset form
    setCategory('');
    setDescription('');
    setLocation('');
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">CivicConnect</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <section className="complaint-form">
        <h2>Report a Complaint</h2>
        <form id="complaintForm" onSubmit={handleSubmit}>
          <label htmlFor="category">Select Complaint Domain:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="road">Road Safety</option>
            <option value="garbage">Garbage</option>
            <option value="electricity">Electricity</option>
            <option value="water">Water Supply</option>
            <option value="building">Infrastructural</option>
            <option value="nature">Natural Disaster</option>
            <option value="trees">Trees Related</option>
            <option value="animal">Animal Related</option>
          </select>

          <label htmlFor="description">Complaint Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            placeholder="Provide details about the issue..."
            required
          />

          <label htmlFor="location">Location (Optional):</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter address or location details"
          />

          <label htmlFor="file-upload" className="file-upload">
            <span className="file-label">Choose a file...</span>
            <input type="file" id="file-upload" />
          </label>

          <button type="submit" className="btn">Submit Complaint</button>
        </form>
      </section>

      <footer>
        <p>© 2024 CivicConnect. All Rights Reserved.</p>
      </footer>
    </>
  );
}
