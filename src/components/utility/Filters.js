import React from 'react';

const Filters = ({ handleFilterChange, activeFilter }) => (
  <p className="filters">
    <a 
      className={ activeFilter === 'SHOW_ALL' ? 'active': ''} href="#" 
      onClick={() => handleFilterChange('SHOW_ALL')}
    >
      All
    </a>
    {' '}
    <a 
      className={ activeFilter === 'SHOW_BREAKFAST' ? 'active': ''} 
      href="#" 
      onClick={() => handleFilterChange('SHOW_BREAKFAST')}
    >
      Breakfast
    </a>
    {' '}
    <a 
      className={ activeFilter === 'SHOW_LUNCH' ? 'active': ''}
      href="#" 
      onClick={() => handleFilterChange('SHOW_LUNCH')}
    >
      Lunch
    </a>
    {' '}
    <a 
      className={ activeFilter === 'SHOW_DINNER' ? 'active': ''}
      href="#" 
      onClick={() => handleFilterChange('SHOW_DINNER')}
    >
      Dinner
    </a>
    {' '}
    <a 
      className={ activeFilter === 'SHOW_DESERT' ? 'active': ''}
      href="#" 
      onClick={() => handleFilterChange('SHOW_DESERT')}
    >
      Desert
    </a>
  </p>
);

export default Filters;