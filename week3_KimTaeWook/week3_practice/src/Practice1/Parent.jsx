import { useCallback, useState } from 'react';
import Child from './Child';

function Parent(){
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log('👪부모 컴포넌트가 렌더링 되었습니다.');

  const tellMe = useCallback(() => {
    console.log('리심스 화이팅👍');
  }, []); //useCallback을 사용하여 함수를 memoization한다.

  return(
    <div style = {{ border: '2px solid navy', padding: '10px'}}>
      <h1>👪부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={"김태욱"} tellMe={tellMe}/>
    </div>
  );
};

export default Parent;