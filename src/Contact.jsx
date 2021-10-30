import React,{useState}from 'react'
  

const Contact = () => {
  const [data, setdata] = useState({
    fullname:'',
    lastname:'',
    email:'',
    phone:'',
    city:'',
    msg:''
  })
  const input_data=(event)=>{
    const{name,value}=event.target;
    setdata((preval)=>{
      return {
        ...preval,
        [name]:value,

      }
    })


  }

  const form_submit=(e)=>{
    e.preventDefault();
    alert(`${data.fullname} ${data.lastname} ${data.email} ${data.phone}`)
    
    
  }
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">

          <h1 className='text-center text-primary my-2'>Contact Us </h1>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6  col-10 mx-auto">
                <form onSubmit={form_submit} >

                <div className='row'>
                  <div class="col-md-6">
    
                    <label for="validationCustom01" class="form-label">First name</label>
                    <input type="text" class="form-control" name='fullname' value={data.fullname} onChange={input_data} id="validationCustom01"  />
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="validationCustom02" class="form-label">Last name</label>
                    <input type="text" class="form-control" name='lastname' value={data.lastname} onChange={input_data} id="validationCustom02"  />
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" name='email' value={data.email} onChange={input_data} id="exampleFormControlInput1" />
                </div>
                <div className='row'>
                  <div class="col-md-6">
                    <label for="validationCustom01" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" name='phone' value={data.phone} onChange={input_data} id="validationCustom01"  />
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="validationCustom02" class="form-label">City</label>
                    <input type="text" class="form-control" name='city' value={data.city} onChange={input_data} id="validationCustom02"  />
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea class="form-control" name='msg' value={data.msg} onChange={input_data} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                  <button className="btn btn-outline-primary">Submit Form</button>
                </div>
                </form>
              </div>
          </div>


        </div>
      </div>
    </div>
       
      </div >
    )
}

export default Contact
