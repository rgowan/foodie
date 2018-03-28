import React from 'react';

import BackButton     from '../utility/BackButton';
import ReactFilestack from 'filestack-react';

const FoodsForm = ({ handleSubmit, handleChange, handleImageUpload, food }) => {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton />
      </div>
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
          <ReactFilestack
            apikey={FILESTACK_API_KEY}
            buttonText="Upload a photo"
            buttonClass="main-button"
            onSuccess={handleImageUpload}
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
      { food.image && <div className="image-tile col-md-6">
        <h2>Image Preview</h2>
        <img src={food.image} className="img-responsive" />
      </div> }
    </div>
  );
};

export default FoodsForm;
