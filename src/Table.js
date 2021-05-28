/*Import React and Componet from react*/

import React, {Component} from 'react'

/*Create a Table Component using class and extends*/

/*Add manadatory render method to render our component to HTML*/

/*Add render return function with component content to be rendered*/

/*Simple Components. These are functions and don't use the class keyword. In this exercies we will add two sinple components for our table - a table header and a table body.*/

/*TableHeader*/

/*Create a constant TableHeader pointing to a return function. This will be assigned to a function call using an assignment opertater whhich will then be assigned to the return function using an arrow function.*/

/*Inside the return function, create the table heading.*/

const TableHeader = () => {

    return(

        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>

    )

}

class Table extends Component {

    render() {

        return (

            <table>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>

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
                        <td>Dennis</td>
                        <td>Bartender</td>
                    </tr>

                </tbody>

            </table>

        )

    }

}

/*Export component to App.js*/

export default Table

/*Note: This component we created is a custom class component. We capitalize custom components to differentiate them from regular HTML elements.*/