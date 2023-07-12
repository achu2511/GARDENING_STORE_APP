import React, { Component, useState } from 'react';
import './add.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nav';

const Add = ()=>
{

    const[category,setCategory] = useState('Select category');

    const changeHandler2 = ()=>
    {
        setCategory("Garden Decor");
    }

    const changeHandler1 = ()=>
    {
        setCategory("Plants");
    }

    const changeHandler3 = ()=>
    {
        setCategory("Tools");
    }
    const changeHandler4 = ()=>
    {
        setCategory("Grocery");
    }
    return(<>
   
        <Navbar></Navbar>
        <div className='add-product'>
            <h4 className='add-header'>Add your Product</h4>
           <form className='add-form'>
  <div class="form-group">
   
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Title"/>
    </div>
  
  <div className='form-group1'>
  <select style={{height:'40px'}}>
  <option selected>Choose Product Category</option>
  <option value="Decor">Garden Decor</option>
  <option value="Plants">Plants</option>
  <option value="Tools">Tools / Equipments</option>
  <option value="Grocery">Grocery</option>
</select>
  </div> 



  <div class="form-group">
    
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Product Price"/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Product Description"/>
  </div>
  <div class="form-group">
    
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Product Quantity"/>
  </div>
  <div class="form-group">
    <label style={{marginBottom:'1%' , color:'gray'}} for="exampleFormControlFile1">Upload Image</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
 
  <button  style={{marginTop:'5%'}} type="submit" class="j-btn btn-success">Submit</button>
</form>
</div>
</>
    )

}

export default Add;