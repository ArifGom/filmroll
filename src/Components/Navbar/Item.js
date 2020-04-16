import ItemStyled from 'Components/Navbar/Item.styled';
import React from 'react';

const Item = ({ route, label, closeSidebar }) => {
  return (
    <li>
      <ItemStyled to={route} data-cy={`menu-${label}`} onClick={closeSidebar}>
        {label}
      </ItemStyled>
    </li>
  );
};

export default Item;
