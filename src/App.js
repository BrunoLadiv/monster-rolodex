import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((r) => r.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monster "
          name=""
          id=""
          className="search-box"
          onChange={(e) => {
            const searchField = e.target.value.toLowerCase();
            
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => (
          <h1>{monster.name}</h1>
        ))}
      </div>
    );
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
