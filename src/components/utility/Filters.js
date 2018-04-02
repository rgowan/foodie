import React from 'react';

const Filters = ({ handleFilterChange, activeFilter }) => (
  <p className="filters">
    <a 
      className={ activeFilter === 'SHOW_ALL' ? 'active': ''} 
      onClick={() => handleFilterChange('SHOW_ALL')}
    >
      All
    </a>
    {' '}
    <a 
      className={ activeFilter === 'SHOW_BREAKFAST' ? 'active': ''} 
      onClick={() => handleFilterChange('SHOW_BREAKFAST')}
    >
      Breakfast
    </a>
    {' '}
    <a 
      className={ activeFilter === 'SHOW_LUNCH' ? 'active': ''}
      onClick={() => handleFilterChange('SHOW_LUNCH')}
    >
      Lunch
    </a>
    {' '}
    <a 
      className={ activeFilter === 'SHOW_DINNER' ? 'active': ''}
      onClick={() => handleFilterChange('SHOW_DINNER')}
    >
      Dinner
    </a>
    {' '}
    <a 
      className={ activeFilter === 'SHOW_DESERT' ? 'active': ''}
      onClick={() => handleFilterChange('SHOW_DESERT')}
    >
      Desert
    </a>
  </p>
);

export default Filters;