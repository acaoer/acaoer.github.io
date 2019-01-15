import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             {/* Edit <code>src/App.js</code> and save to reload. */}
//             this is a  message.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
import Table from './Table';
import Form from './Form';

class App extends Component {


  state = {
    characters: [
      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspring actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }
    ]
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });

  }
  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {

        return i !== index;
      })

    });

  }
  render() {
    const { characters } = this.state;
    // const characters = [
    //   {
    //     'name': 'Charlie',
    //     'job': 'Janitor'
    //   },
    //   {
    //     'name':'Mac',
    //     'job':'Bouncer'
    //   },
    //   {
    //     'name': 'Dee',
    //     'job': 'Aspring actress'
    //   },
    //   {
    //     'name': 'Dennis',
    //     'job': 'Bartender'
    //   }
    // ];
    return (
      <div className="container">
        <Table characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit}/>

      </div>
    );
  }
}

export default App;