import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMovie.css"; // Import CSS for styling

const AddMovie = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "", // Fixed incorrect key name
    synopsis: "",
    posterImage: "", // Fixed incorrect key name
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie added:", formData);
    navigate("/"); // Redirect back to Dashboard
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="director"
          placeholder="Director"
          value={formData.director}
          onChange={handleChange}
          required
        />
        <select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        >
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <input
          type="number"
          name="releaseYear"
          placeholder="Release Year"
          value={formData.releaseYear}
          onChange={handleChange}
          required
        />
        <textarea
          name="synopsis"
          placeholder="Synopsis"
          value={formData.synopsis}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="posterImage"
          placeholder="Poster Image URL"
          value={formData.posterImage}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddMovie;