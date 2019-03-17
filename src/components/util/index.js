import React from 'react';

export const stringy = x => console.log(JSON.stringify(x, null, 2));

export const StringyBtn = ({log}) => <button onClick={()=> stringy(log)}>log</button>
