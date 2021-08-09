import React, {useState, useEffect} from 'react';
import { Input, Button} from 'reactstrap';
import { Link } from 'react-router-dom';


import '../App.css';
import {Heading} from './Heading';
import pen from '../images/pen.png';
import trash from '../images/trash.png';

import 'bootstrap/dist/css/bootstrap.min.css';



function Home () {

  const [cityName, setCityName] = useState('');
  const [tags, setTags] = useState([]);

  const [prodRef, setProdRef] = useState('');
  const [prodName, setProdName] = useState('');
  const [prodCity, setProdCity] = useState('');
  const [prodPrice, setProdPrice] = useState('');

  const [message, setMessage] = useState('');
  const [productsList, setProductsList] = useState([]);


  const addNewProduct = async() =>{
    //const data = await fetch('http://192.168.1.13:3001/addProducts', {
    const data = await fetch('http://192.168.1.40:3001/addProducts', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body:`prodRef=${prodRef}&prodName=${prodName}&prodCity=${prodCity}&prodPrice=${prodPrice}`
    });
    const response = await data.json();
    setMessage(response.message)
    setProdRef("");
    setProdName("");
    setProdCity("");
    setProdPrice("");
    
  }
  

  const addNewCities = async() =>{
    //const data = await fetch('http://192.168.1.13:3001/addCities', {
    const data = await fetch('http://192.168.1.40:3001/addCities', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body:`cityName=${cityName}`
    });
    const listCities = await data.json();
    setMessage(listCities.message)
    setCityName("");
    setTags(listCities)
    
  }


  const deleteCity = async (cityName) => {
    const response = await fetch(`/delete/${cityName}`, {
      method: 'DELETE'
    })
    const removedCity = await response.json();
    setMessage(response.message)
  }
  
  useEffect(() => {
    const displayCities = async () => {
      const response = await fetch('/cities')
      const list = await response.json()
     
    const listCitiesFromDB = list.map((city,i) => {
        return (
            <li key={i} className="tag">
              <span className="tag-title">{city.cityName}</span>
              <span className='tag-close-icon' onClick={() => deleteCity(city.cityName)} > X
						</span>
            </li>
          )
    })
    setTags(listCitiesFromDB)
    }
    displayCities();
  }, [])

  const deleteProduct = async (prodRef) => {
    
    const response = await fetch(`/delete/${prodRef}`, {
      method: 'DELETE'
    })
    const removedProduct = await response.json();
    setMessage(response.message)
  }

  useEffect(() => {
    const displayProducts = async () => {
      const response = await fetch('/products')
      const list = await response.json()
  
    const listFromDB = list.map((product,i) => {
        return (
        <tr key={i}>
          <th scope="row">{product.prodRef}</th>
          <td>{product.prodName}</td>
          <td>{product.prodCity}</td>
          <td>{product.prodPrice}</td>
          <td><Link to={`/update/${product.prodRef}`}><img className="picto" src={pen} alt="picto-pen"></img></Link></td>
          <td><img className="picto" src={trash} onClick={() => deleteProduct(product.prodRef)} alt="picto-trash"></img></td>
        </tr>
    )})
    setProductsList(listFromDB)
    
    }
    displayProducts();
  }, [])


  return (
    <div className="App">
      <Heading/>
      <div className="zone1">

        <input className="input-city-tag"
            type="text"
            placeholder="Add a city"
            
            value={cityName}
            onChange={e => setCityName(e.target.value)}
          />
        <Button onClick={() => {addNewCities()}} id="btn-city-tag" type="submit">OK</Button>
      </div>
      <div className="zone2">
        <ul id="tags">
        {tags}

        </ul>
      
      </div>
      <Button id="btn-search-tag" type="search">Search</Button>
      <div className="zone3">
      <table className="products-table">
        <thead>
          <tr>
            <th>Ref #</th>
            <th>Name</th>
            <th>City</th>
            <th>Price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productsList}
          <tr>
            <th scope="row"><Input className="table-input" type="text" name="prodRef" id="prodRef" placeholder="Ref product" value={prodRef} onChange={e => setProdRef(e.target.value)}/></th>
            <td><Input className="table-input" type="text" name="prodName" id="prodName" placeholder="Name" value={prodName} onChange={e => setProdName(e.target.value)}/></td>
            <td><Input className="table-input" type="text" name="prodCity" id="prodCity" placeholder="City" value={prodCity} onChange={e => setProdCity(e.target.value)}/></td>
            <td><Input className="table-input" type="number" name="prodPrice" id="prodPrice" placeholder="Price" value={prodPrice} onChange={e => setProdPrice(e.target.value)}/></td>
            <td><Button onClick={() => {addNewProduct()}} >Add</Button></td>
            <td><Button onClick={() => {}} >MAJ</Button></td>
          </tr>
        </tbody>
      </table>
        
      </div>
      <div className="zone4">
        <p>{message}</p>


      </div>
    </div>
  );
}


export default Home;
