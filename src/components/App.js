import '../App.css';
import  { UseState } from './UseState'
import { UseEffect } from './UseEffect'
import { UseRef } from './UseRef';
import { Hello } from './ReactMemo';
import { UseCallback } from './UseCallback';


export const App = () =>  {
  return (
    <div className="App">
      <UseState />
      <UseEffect />
      <UseRef />
      <Hello />
      <UseCallback />
    </div>
  );
}


