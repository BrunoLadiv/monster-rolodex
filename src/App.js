
import "./App.css";
import { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
          monsters: [
            { name: 'linda' },
            { name: 'frank' },
            { name: 'jack' },
            { name: 'Jao'  }
            
          ]

        }
      }
      
  
  render() {
    return <div className="App">
         {this.state.monsters.map((monster => <h1>{monster.name}</h1> ))}
       </div> 
      }

  // return(
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
