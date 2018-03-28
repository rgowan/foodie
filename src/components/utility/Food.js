import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({
  data
}) => (
  <div className="image-tile col-md-4 col-sm-6 col-xs-12">
    <Link to={`/foods/${data.id}`}>
      <img src={data.image} className="img-responsive" />
    </Link>
  </div>
);

export default Food;
