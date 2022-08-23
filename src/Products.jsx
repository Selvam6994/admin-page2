import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';



function Products() {
  const [Products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false)
    // the useEffect calls the data while the component gets mounted/ page refreshed.
    useEffect(() => {
        loadData()
    }, [])
    // if the below function is linked to on click it will render on clicking the assigned button
    let loadData = async () => {
        setLoading(true)
        let Products = await axios.get("https://6301ec84c6dda4f287af4f45.mockapi.io/Products")

        //Products is an object and inside it data has the array of details.
        setProducts(Products.data)
        setLoading(false)
        // console.log(Products.data)
    }
    let userDelete = async (id) => {
        
        try {
            let ask = window.confirm("Do you want to delete?")
        if(ask){ 
            await axios.delete(`https://6301ec84c6dda4f287af4f45.mockapi.io/Products/${id}`)
        loadData()
    }
           
        }
        catch (error) {

        }
    }
  return (
  <>
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
                  <th>Model</th>
                  <th>Fuel</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tfoot>
              <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Model</th>
                  <th>Fuel</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Action</th>
              </tr>
          </tfoot>
          <tbody>
              {
                  Products.map((user, index) => {
                      return (<tr>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.model}</td>
                          <td>{user.fuel}</td>
                          <td>{user.color}</td>
                          <td>{user.price}</td>
                          
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

export default Products;