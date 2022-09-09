import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';



function Products() {
  const [Products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        loadData()
    }, [])
    let loadData = async () => {
        setLoading(true)
        let Products = await axios.get("https://6301ec84c6dda4f287af4f45.mockapi.io/Products")
        setProducts(Products.data)
        console.log(Products.data)
        setLoading(false)
    }
    let productDelete = async (id) => {
        
        try {
            let ask = window.confirm(`Do you want to delete?`)
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
  <Link to="/portal/createproduct" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
      className="fas fa-download fa-sm text-white-50"></i> Create product</Link>
  <br />
  {
      isLoading ? <span>Loading...</span> : <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
              <tr style={{textAlign:"center"}}>
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
              <tr style={{textAlign:"center"}}>
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
                  Products.map((product, index) => {
                      return (<tr style={{textAlign:"center"}}>
                          <td>{index + 1}</td>
                          <td>{product.name}</td>
                          <td>{product.model}</td>
                          <td>{product.fuel}</td>
                          <td>{product.color}</td>
                          <td>{product.price}</td>
                          
                          <td>
                              <button type="button" class="btn btn-primary mr-2"><Link style={{ color: "white" }} to={`${product.id}`}>View</Link></button>
                              <button type="button" class="btn btn-warning mr-2"><Link style={{ color: "white" }} to={`edit/${product.id}`}>Edit</Link></button>
                              <button type="button" onClick={() => productDelete(product.id)} class="btn btn-danger mr-2" style={{ color: "white" }}>Delete</button>
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