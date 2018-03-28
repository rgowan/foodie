import React from 'react';

import Banner from '../utility/Banner';

const FoodsForm = ({ handleSubmit, handleChange, food }) => {
  return (
    <div className="row">
      <Banner />
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={food.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={food.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={food.category}
            onChange={handleChange}
          >
            <option value="" disabled>Please Select</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Desert</option>
          </select>
        </div>
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default FoodsForm;
