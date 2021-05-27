/*Import React and Componet from react*/

import React, {Component} from 'react'

/*Create a Table Component using class and extends*/

/*Add manadatory render method to render our component to HTML*/

/*Add render return function with component content to be rendered*/

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