import React from 'react';
import MyList from './MyList';

const MyContainer = () => {
  const listHeader = "My List Header";
  const listItems = [
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
  ];
  return (
    <div>
      <h2>This is MyContainer Component</h2>
      <MyList header={listHeader} items={listItems} />
    </div>
  );
}

export default MyContainer;
