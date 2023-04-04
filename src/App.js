import { /*useEffect,*/ useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState('');
  const [displayData, setDisplayData] = useState('No User Data');

  /* useEffect(()=> {
    callAPI()
  }, []) */ // This is when I want to call the API as soon as the page loads.

  const handleIncrease = () => {
    setCounter(counter + 1);
  }
  const handleDecrease = () => {
    setCounter(counter - 1);
  }
  const callAPI = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const dataString = JSON.stringify(data, null, 2);
    
    setData(data);
    setDisplayData(dataString);
  }

  return (
    <div className="App">
      <div className='counter'>
        <h1>Current Counter:</h1>
        <p>{counter}</p>
        <div>
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleDecrease}>-</button>
          <button onClick={callAPI}>Call RandomUser API</button>
        </div>
      </div>
      <div className='user-info'>
      <h2>User Profile:</h2>
        {data &&
          <div className='profile-info'>
            <img src={data.results[0].picture.large} alt='user profile' style={{border: '1px solid black',borderRadius: '50%'}}/>
            <div style={{marginLeft: '2.5rem'}}>
              <p><strong>Name: </strong>{data.results[0].name.first} {data.results[0].name.last}</p>
              <p><strong>Gender: </strong> {data.results[0].gender}</p>
            </div>
          </div>
        }
        <h2>Formatted JSON Response:</h2>
        <pre>{displayData}</pre> {/*This is preformatted text*/}
      </div>
    </div>
  );
}

export default App;
