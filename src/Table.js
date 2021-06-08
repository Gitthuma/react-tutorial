/*Import React and Componet from react*/

import React, {Component} from 'react'

/*Create a Table Class Component using class and extends*/

/*Add manadatory render method to render our component to HTML*/

/*Add render return function with component content to be rendered*/

/*Simple Component*/

/*Simple Components. These are functions and don't use the class keyword. In this exercies we will add two sinple components for our table - a table header and a table body.*/

/*TableHeader*/

/*Create a constant TableHeader pointing to a return function. This will be assigned to a function call using an assignment opertater which will then be assigned to the return function using an arrow function.*/

/*Inside the return function, create the table heading.*/

const TableHeader = () => {

    return (

        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>

    )

}

/*TableBody*/

/*Create a constant TableBody pointing to a return function. This will be assigned to a function call using an assignment opertater which will then be assigned to the return function using an arrow function.*/

/*Inside the return function, create the table body.*/

/*Props*/

/*Remove all the data from our TableBody component. We will move this data to the App class component inside App.js.*/

/*As is, the TableBody takes no arguments and returns a single tbody tag.To change this, we are going to pass through props from the Table class as an argument in TableBody.*/

/*Then create a constant rows that will contain an expression to return.*/

/*Create the return expression which is the map of the array from characterData, mapping it to return a table row for each object in the array.*/

const TableBody = (props) => {

    const rows = props.characterData.map((row, index) => {

        return (

            <tr key={index}>

                <td>{row.name}</td>
                <td>{row.job}</td>

            </tr>
        )
    })

    return <tbody />

}

/*Class Component*/

/*Assign the TableHeader and the  TableBody simple components to the table class component*/

/*Prpos*/

/*Access data from App class Table property from inside the Table component. We do this by creating a constant characterData inside Table class render() and assigning it the characterData properties using this.props. Our characterData constant is inside curly braces. We then assign the declared characterData constant to our TableBody child component inside return(). */

/*In Table, we can access all props through this.props. We are only passing one pops through, characterData, so to retrive it we will use this.props.characterData to retrieve it. The ES6 property shorthand is used to create a variable that contains this.props.character. Since table components consist of two simple components, we pass this.props.characterData to the TableBody simple component using props*/

class Table extends Component {

    render() {

        const {characterData} = this.props

        return (

            <table>

                <TableHeader />
                <TableBody characterData = {characterData} />

            </table>

        )

    }

}

/*Export component to App.js*/

export default Table

/*Note: This component we created is a custom class component. We capitalize custom components to differentiate them from regular HTML elements.*/

/*Note: If the return is contained to one line, it does not need parentheses.*/