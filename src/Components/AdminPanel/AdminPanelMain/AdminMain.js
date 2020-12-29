import React, { useState } from 'react';

const AdminMain = () => {
    const [info, setInfo] = useState({
        name:'',
        email:'',
        price:'',
        description:''
    });
    const [files, setFile] = useState(null);

    const hadleBlur = (event) => {
        const newInfo = {...info};
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo)

        

    }
    const handleOnChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', files);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('price', info.price);
        formData.append('description', info.description);
        fetch('http://localhost:5000/fileUpload', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })

        e.preventDefault();
    }
    return (
        <div>
           <div className="row">
               <div className="col-md-6">
               <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        onChange={hadleBlur}
                        type="email"
                        class="form-control"
                        name='email'
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">description</label>
                    <input
                        onChange={hadleBlur}
                        type="text"
                        class="form-control"
                        name='description'
                        placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Price</label>
                    <input
                        onChange={hadleBlur}
                        type="number"
                        class="form-control"
                        name='price'
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input
                        onChange={hadleBlur}
                        type="text"
                        name='name'
                        
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Name"/>
                </div>
                
                <div class="form-group">
                    <label>Upload</label>
                    <input
                       
                        onChange={handleOnChange}
                        type="file"
                        class="form-control"
                        placeholder="File"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
               </div>
               <div className="col-md-6">
    <h1>{info.price}</h1>
    <h1>{info.name}</h1>
    <h1>{info.random}</h1>
               </div>
           </div>
        </div>
    );
};

export default AdminMain;