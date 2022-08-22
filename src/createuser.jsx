import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';



function Createuser() {
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
      if (values.name.length < 5) {
        errors.name = "Please enter valid name"
      }
      if (values.position === "") {
        errors.position = "Please enter valid position name"
      }
      if (values.office === "") {
        errors.office = "Please enter valid office name"
      }
      if (values.age < 18) {
        errors.age = "Please enter valid age"
        if (values.age === "") {
          errors.age = "Please enter valid age"
        }

      }
      if (values.startDate === "") {
        errors.startDate = "Please enter valid startDate"
      }
      if (values.salary === "") {
        errors.salary = "Please enter valid salary"
      }
      return errors;

    },

    onSubmit: async (values) => {
     let user = await axios.post("https://6301ec84c6dda4f287af4f45.mockapi.io/users",values)

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
              <label for="position" className="form-label">Position</label>
              <input type="text" className="form-control" id="position" name="position"
                onChange={formik.handleChange}
                value={formik.values.position} />
              <span style={{ color: "red" }}>{formik.errors.position}</span>
            </div>
            <div className="col-lg-6">
              <label for="office" className="form-label">Office</label>
              <input type="text" className="form-control" id="office" name="office"
                onChange={formik.handleChange}
                value={formik.values.office} />
              <span style={{ color: "red" }}>{formik.errors.office}</span>
            </div>
            <div className="col-lg-6">
              <label for="age" className="form-label">Age</label>
              <input type="number" className="form-control" id="age" name="age"
                onChange={formik.handleChange}
                value={formik.values.age} />
              <span style={{ color: "red" }}>{formik.errors.age}</span>
            </div>
            <div className="col-lg-6">
              <label for="startDate" className="form-label">Start Date</label>
              <input type="text" className="form-control" id="startDate" name="startDate"
                onChange={formik.handleChange}
                value={formik.values.startDate} />
              <span style={{ color: "red" }}>{formik.errors.startDate}</span>
            </div>
            <div className="col-lg-6">
              <label for="salary" className="form-label">Salary</label>
              <input type="text" className="form-control" id="salary" name="salary"
                onChange={formik.handleChange}
                value={formik.values.salary} />
              <span style={{ color: "red" }}>{formik.errors.salary}</span>
            </div>
          </div>
          <input type="submit"  vlaue="Submit"className="btn btn-primary mt-5" 
          disabled={!formik.isValid}/>
        
        </form>
      </div>
    </div>


  )
}

export default Createuser;