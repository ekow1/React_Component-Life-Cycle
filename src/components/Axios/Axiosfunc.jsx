import React , {useState , useEffect} from 'react'
import axios from 'axios'
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';




function Axiosfunc() {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUser(res.data))
            .catch(err => console.log(err.message))
    }
        , [])
  return (
   < MDBContainer  className="w-100">
        <h1 style={{ marginBottom : "7%", textAlign : "center"}} >Fetch - Functional Component</h1>

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

export default Axiosfunc