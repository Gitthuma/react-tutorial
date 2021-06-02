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

/*Pass the characters array data through to the Table child component. Table components has Table properties. The passing of data is done the same way you pass data through using data- attributes. We can then call the property whatever we want, as long as it's not a reserved keyword; in or case we will use characterData. The data we are passing through is the characters variable, we will put curly braces around it as it's a JavaScript expression.*/

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

        <Table characterData = {characters} />
        
      </div>
    )

  }
}

/*Export the component as App and load it in index.js*/

export default App