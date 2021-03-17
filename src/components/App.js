import '../App.css';
import  { UseState } from './UseState'
import { UseEffect } from './UseEffect'
import { UseRef } from './UseRef';
import { Hello } from './ReactMemo';
import { UseCallback } from './UseCallback';
import { UseMemo } from './UseMemo';
import { UseReducer } from './UseReducer';
import { UseContext } from './UseContext';
import { CustomHook } from './CustomHook';

export const App = () =>  {
  return (
    <div className="App">
      <UseState />
      <UseEffect />
      <UseRef />
      <Hello />
      <UseCallback />
      <UseMemo />
      <UseReducer />
      <UseContext />
      <CustomHook />
    </div>
  );
}


