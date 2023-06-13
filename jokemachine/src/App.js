
import './App.css';
function Jokecontainer(){
  return (
    <div className ="Jokecontainer" >
    Jokes Will be Displayed Here  
     </div>
  );
}

function App() {
  return (
    <div className="App">
     <p>WELCOME TO MY SIMPLE REACT JOKE GENERATOR </p>
     <Jokecontainer />
    </div>
  );
}

export default App;
