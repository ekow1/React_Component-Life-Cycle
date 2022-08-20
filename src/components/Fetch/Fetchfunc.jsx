import React, { useState, useEffect } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';


function Fetchfunc() {
    const [user, setUser] = useState([])
        useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/users')
              .then(res => res.json())
              .then(data => setUser(data))
            .catch (err => console.log(err.message))
      }, [])
      
    return (
      
        < MDBContainer  className="w-100">
        <h1 style={{ marginBottom : "7%", textAlign : "center"}} >Axios - Functional Component</h1>

          <MDBTable small  responsive >
            <MDBTableHead dark>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Contact</th>
              </tr>
            </MDBTableHead>
                      <MDBTableBody>
                          {user.map((user, index) => {
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

export default Fetchfunc