import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import { useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false)
    // the useEffect calls the data while the component gets mounted/ page refreshed.
    useEffect(() => {
        loadData()
    }, [])
    // if the below function is linked to on click it will render on clicking the assigned button
    let loadData = async () => {
        setLoading(true)
        let users = await axios.get("https://6301ec84c6dda4f287af4f45.mockapi.io/users")

        //Users is an object and inside it data has the array of details.
        setUsers(users.data)
        setLoading(false)
        // console.log(Users.data)
    }
    let userDelete = async (id) => {
        
        try {
            let ask = window.confirm("Do you want to delete?")
        if(ask){ 
            await axios.delete(`https://6301ec84c6dda4f287af4f45.mockapi.io/users/${id}`)
        loadData()
    }
           
        }
        catch (error) {

        }
    }
    return (<>
        <div className="container-fluid">
            <Link to="/portal/createuser" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            <br />
            {
                isLoading ? <span>Loading...</span> : <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (<tr>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.position}</td>
                                    <td>{user.office}</td>
                                    <td>{user.age}</td>
                                    <td>{user.startDate}</td>
                                    <td>{user.salary}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary mr-2"><Link style={{ color: "white" }} to={`${user.id}`}>View</Link></button>
                                        <button type="button" class="btn btn-warning mr-2"><Link style={{ color: "white" }} to={`edit/${user.id}`}>Edit</Link></button>
                                        <button type="button" onClick={() => userDelete(user.id)} class="btn btn-danger mr-2" style={{ color: "white" }}>Delete</button>
                                    </td>
                                </tr>
                                )
                            })

                        }
                    </tbody>
                </table>

            }


        </div>

    </>
    )
}

export default Users;