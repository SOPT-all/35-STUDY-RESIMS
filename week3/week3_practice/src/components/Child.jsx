import React from 'react';

const Child = ({name, age}) => {
    console.log('👶자녀도 렌더링 되었습니다');

    return(
        <div style={{ border: '2px solid powerblue', padding: '10px'}}>
            <h3>👶자녀</h3>
            <p>name: {name}</p>
            <p>age: {age}</p>
        </div>
    );
};

export default Child;