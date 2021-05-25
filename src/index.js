/*Import React, ReactDOM and index.css file*/

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/*Create class with App compenent*/

/*Add mandatory render method inside App component*/

/*Add return fucntion inside render method*/

/*Add return function inside render method*/

/*Add div with className App inside return function*/

/*Add h1 tag with hello world! inside div*/

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <h1>Hello World</h1>
      </div>
    )
  }
}

/*Render the App to the HTML div with class root using ReactDOM*/

ReactDOM.render(<App />, document.getElementById('root'))
