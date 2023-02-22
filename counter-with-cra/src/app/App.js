import React from 'react';
import './App.css';
import {
  CounterFunction,
  CounterClass,
  Button,
  LifeCycle,
} from '../components';

function renderComponents(isVisible) {
  if (isVisible) {
    return (
      <>
        <h2>함수 컴포넌트</h2>
        <CounterFunction count={2} />
        <h2>클래스 컴포넌트</h2>
        <CounterClass step={3} />
        <h2>버튼 컴포넌트</h2>
        <Button />
      </>
    );
  } else {
    return null;
  }
}

function App() {
  // 상태 변수(state variable)
  const [isVisibleComponents, updateVisibleComponents] = React.useState(false);

  // 함수안에 이벤트핸들러 작성
  const handleToggleVisible = () => {
    updateVisibleComponents(!isVisibleComponents)
  }

  return (
    <div className='App'>
      <button type='button' onClick={handleToggleVisible}>{isVisibleComponents.toString()}</button>
      <h2>라이프 사이클</h2>
      {isVisibleComponents && <LifeCycle />}
      {renderComponents(isVisibleComponents)}
    </div>
  )
}

export default App;
