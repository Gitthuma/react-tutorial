/*Import React and Component from react*/

/*Import Table from Table.js*/

import React, {Component} from 'react'
import Table from './Table'

/*Paste App component from index.js*/

/*Create class with App compenent*/

/*Add mandatory render method inside App component*/

/*Add return fucntion inside render method*/

/*Add return function inside render method*/

/*Add div with className App inside return function*/

/*Add h1 tag with hello world! inside div*/

/*Remove Hello World and load Table*/

/*Change Table div class to container*/

/*Props*/

/*Move all the data from the TableBody component to an array of objects inside the App class component. This is done is as if we are bringing in a JSON-based API. We create this array inside our render().*/

class App extends Component {
  render() {

    const characters = [

      {
        name: 'Charlie',
        job: 'Janitor',
      },

      {
        name: 'Mac',
        job: 'Bouncer',
      },

      {
        name: 'Dee',
        job: 'Aspring actress',
      },

      {
        name: 'Dennis',
        job: 'Bartender',
      }

    ]

    return(

      <div className="container">
        <Table />
      </div>
    )
    
  }
}

/*Export the component as App and load it in index.js*/

export default App