import React, { useState, useEffect } from 'react';

function getJson() {
  return fetch('s3://hone-mongo-docdb/aetna-rates/2022-10-05_f783e744-b9f6-4ff2-a688-460bbbe2d155_Aetna-Life-Insurance-Company.json')
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
}

const S3Json = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getJson().then(list => setList(list));
  }, []);

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
export default S3Json ;