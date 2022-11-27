import './App.css';
// import Mycomponent from './Mycomponent/Mycomponent';
// import Say from './UseState/Say';
// import EventPractice from './EventHandle/EventPractice';
// import ValidationSample from './ref/Validation';
import ScrollBox from './ref/scrollBox';

function App() {

  return (
    <div>
    <ScrollBox ref={(ref)=> this.scrollBox=ref}/>
    <button onClick={() => this.scrollBox.scrollToBottom()}/>
    </div >
  )
}

export default App;
