import React from 'react';

const MyList = ({ header, items }) => {
    return (
      <div>
        <h3>{header}</h3>
        <ol>
          {items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ol>
      </div>
    );
  }

export default MyList;
