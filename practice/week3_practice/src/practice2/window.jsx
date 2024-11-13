import React, { useState } from 'react';
import { FixedSizeList } from 'react-window';
import ListItem from './ListItem';

const ListItemRow = ({ index, style }) => (
  <ListItem style={style} order={index} />
);

const Window = () => {
  const [dummy, _] = useState(() => new Array(10000).fill(0));
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>상태 증가</button>
      <div>상태 값: {count}</div>
      <FixedSizeList
        height={800}
        itemCount={10000}
        itemSize={50}
        width={'100%'}
      >
        {ListItemRow}
      </FixedSizeList>
    </>
  );
};

export default Window;
