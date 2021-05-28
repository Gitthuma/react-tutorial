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

const TableBody = () => {

    return (

        <tbody>

            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>

            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>

            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>

            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>

        </tbody>

    )

}

/*Class Component*/

/*Assign the TableHeader and the  TableBody simple components to the table class component*/

class Table extends Component {

    render() {

        return (

            <table>

                <TableHeader />
                <TableBody />

            </table>

        )

    }

}

/*Export component to App.js*/

export default Table

/*Note: This component we created is a custom class component. We capitalize custom components to differentiate them from regular HTML elements.*/

/*Note: If the return is contained to one line, it does not need parentheses.*/