import { useEffect, useState } from 'react';
import './App.scss';

function App() {

  const [messageValue, setMessageValue] = useState('');
  const [error, setError] = useState(false);


  const handleSubmit = () => {
    console.log(messageValue);
    let regex = /\S{51}/;
    if (regex.test(messageValue) && messageValue.trim()) {
      setError(true);
    } else {
      let partial = messageValue.length % 46 === 0 ? messageValue.length % 46 : messageValue.length % 46 + 1;
      console.log(partial);
      for (let i = 0; i < partial; i++) {
        if (i === 0) {
          console.log(messageValue.slice(0, 46));
        } else {
          let stringTemp = messageValue.slice(46 * i, messageValue.length).trim();
          console.log(stringTemp.slice(0, 46).trim());
        }

      }
      setError(false);
    }
  }

  return (
    <div className="app">
      <div className="header">
        <input value={messageValue} onChange={(e) => setMessageValue(e.target.value)} type="text" className="header-input" placeholder="Send your message here" />
        <button onClick={handleSubmit} className="header-submit">Send</button>
      </div>
      <span className={`invalid-message ${error ? 'active' : ''}`}>Please recheck your input! (The word's length should be more than 0 and less than 50 characters)</span>
      <div className="content">

      </div>
    </div>
  );
}

export default App;
