import React from 'react';

const FiltersSidebar = () => (
  <aside style={{ width: '220px', marginRight: '20px' }}>
    <h3>Filtres</h3>
    <div>
      <strong>Catégories</strong>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li><input type="checkbox" /> Ordinateurs</li>
        <li><input type="checkbox" /> Smartphones</li>
        <li><input type="checkbox" /> Tablettes</li>
        <li><input type="checkbox" /> Gaming</li>
      </ul>
    </div>
    <div>
      <strong>Prix</strong>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li><input type="radio" name="price" /> Moins de 500 TND</li>
        <li><input type="radio" name="price" /> 500 - 1000 TND</li>
        <li><input type="radio" name="price" /> 1000 - 2000 TND</li>
      </ul>
    </div>
  </aside>
);

export default FiltersSidebar;


