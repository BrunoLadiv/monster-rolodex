
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";


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
  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    
    this.setState(() => {
      return { searchField };
    });
  }
  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        
        <SearchBox onChangeHandler={this.onSearchChange} placeholder='search monster' className='search-box'/>
        <CardList monsters={filteredMonsters}/>
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
