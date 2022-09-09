import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';



function Createproduct() {
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: ""
    },

    validate: (values) => {
      let errors = {}
      if (values.name === "") {
        errors.name = "Please enter valid name"
      }
      
      if (values.model === "") {
        errors.model = "Please enter valid model name"
      }
      if (values.fuel === "") {
        errors.fuel = "Please enter valid fuel type"
      }
      
        if (values.color === "") {
          errors.color = "Please enter color name"
        }

      if (values.price === "") {
        errors.price = "Please enter valid price"
      }
      return errors;

    },

    onSubmit: async (values) => {
     let user = await axios.post("https://6301ec84c6dda4f287af4f45.mockapi.io/Products",values)

    }
  })

  return (

    <div className='container col-lg-12  mt-5'>
      <div className='container col-lg-6  mt-5'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row '>
            <div className="col-lg-6">
              <label for="name" className="form-label">Name</label>
              <input type={"text"} className="form-control" id="name" name="name"
                onChange={formik.handleChange}
                value={formik.values.name} />
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label for="position" className="form-label">Model</label>
              <input type="text" className="form-control" id="model" name="model"
                onChange={formik.handleChange}
                value={formik.values.model} />
              <span style={{ color: "red" }}>{formik.errors.model}</span>
            </div>
            <div className="col-lg-6">
              <label for="office" className="form-label">Fuel</label>
              <input type="text" className="form-control" id="fuel" name="fuel"
                onChange={formik.handleChange}
                value={formik.values.fuel} />
              <span style={{ color: "red" }}>{formik.errors.fuel}</span>
            </div>
            <div className="col-lg-6">
              <label for="age" className="form-label">Color</label>
              <input type="text" className="form-control" id="color" name="color"
                onChange={formik.handleChange}
                value={formik.values.color} />
              <span style={{ color: "red" }}>{formik.errors.color}</span>
            </div>
            <div className="col-lg-6">
              <label for="startDate" className="form-label">Price</label>
              <input type="text" className="form-control" id="price" name="price"
                onChange={formik.handleChange}
                value={formik.values.price} />
              <span style={{ color: "red" }}>{formik.errors.price}</span>
            </div>
          </div>
          <input type="submit"  vlaue="Submit"className="btn btn-primary mt-5" 
          disabled={!formik.isValid}/>
        
        </form>
      </div>
    </div>


  )
}

export default Createproduct;