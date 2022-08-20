import React, { Component } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';
import axios from 'axios'

export class Axiosclass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err.message))
    }



  render() {
    return (
        < MDBContainer className="w-100">
            <h1 style={{ marginBottom: "7%", textAlign: "center" }} >Axios - Class Component</h1>
            
            <MDBTable small responsive>

                <MDBTableHead dark>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Contact</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {this.state.user.map((user, index) => {
                        return (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        )
                    }
                    )}
                </MDBTableBody>
            </MDBTable>
        </MDBContainer>


    )
  }
}

export default Axiosclass;