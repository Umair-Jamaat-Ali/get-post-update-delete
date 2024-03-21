'use client'

import { useState } from "react";

export default function Home() {

  const [data, setData] = useState([
    { id: 11, name: 'Item 1' },
    { id: 12, name: 'Item 2' },
    { id: 13, name: 'Item 3' },
    { id: 14, name: 'Item 4' },
    { id: 15, name: 'Item 5' },
    { id: 16, name: 'Item 6' }
  ]);

  const [updatedName, setUpdatedName] = useState('');

  function deleteHandler(id) {
    let filterData = data.filter((item) => item.id !== id);
    setData(filterData);
  }

  function updateHandler(id) {
    setData(data.map(item => {
      if (item.id === id) {
        return { ...item, name: updatedName };
      }
      return item;
    }));
    setUpdatedName('');
  }

  return (
    <>
      <div>
        <h1>Data Rendering</h1>
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
              <button onClick={() => updateHandler(item.id)}>UPDATE</button>
              <button onClick={() => deleteHandler(item.id)}>DELETE</button>
              <hr />
            </div>
          )
        })}
      </div>
    </>
  );
}

