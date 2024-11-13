import { useState } from 'react';
import Child from './components/Child';

function App(){
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log('👪부모 컴포넌트가 렌더링 되었습니다.');

  return(
    <div style = {{ border: '2px solid navy', padding: '10px'}}>
      <h1>👪부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <button onClick={incrementChildAge}>자식 나이 증가</button>
      <Child name={'김태욱'} age={childAge} />
    </div>
  );
}
export default App
