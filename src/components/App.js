import '../App.css';
import  { UseState } from './UseState'
import { UseEffect } from './UseEffect'
import { UseRef } from './UseRef';
export const App = () =>  {
  return (
    <div className="App">
      <UseState />
      <UseEffect />
      <UseRef />
    </div>
  );
}


