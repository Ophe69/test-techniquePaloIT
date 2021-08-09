import React, {useState, useEffect} from 'react';
import { Input, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

import '../App.css';


function EditProduct(props) {

    const [product, setProduct] = useState([]);
    const [prodRef, setProdRef] = useState('');
    const [prodName, setProdName] = useState('');
    const [prodCity, setProdCity] = useState('');
    const [prodPrice, setProdPrice] = useState('');

    useEffect(()=> {
        const updateProduct = async () => {

            const response = await fetch(`/update/${props.prodRef}`, {
                method: 'PUT'
            })
            const productToUpdate = await response.json()
            setProduct(productToUpdate)
            setProdRef(productToUpdate.prodRef)
            setProdName(productToUpdate.prodName)
            setProdCity(productToUpdate.prodCity)
            setProdPrice(productToUpdate.prodPrice)
    
        const productFromDB = product.map((product,i) => {
            return (
            <tr key={i}>
                <th scope="row">{product.prodRef}</th>
                <td>{product.prodName}</td>
                <td>{product.prodCity}</td>
                <td>{product.prodPrice}</td>
            </tr>
        )})
        setProduct(productFromDB)
        }
        updateProduct();

    }, [])
    

    return (
    
        <div className="App">
            <h1>Edit Product</h1>
        
        <div>
            <table className="products-table">
                <thead>
                <tr>
                    <th>Ref #</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                
                <tr>
                    <th scope="row"><Input className="table-input" type="text" name="prodRef" id="prodRef" placeholder="Ref product" value={prodRef} onChange={e => setProdRef(e.target.value)}/></th>
                    <td><Input className="table-input" type="text" name="prodName" id="prodName" placeholder="Name" value={prodName} onChange={e => setProdName(e.target.value)}/></td>
                    <td><Input className="table-input" type="text" name="prodCity" id="prodCity" placeholder="City" value={prodCity} onChange={e => setProdCity(e.target.value)}/></td>
                    <td><Input className="table-input" type="number" name="prodPrice" id="prodPrice" placeholder="Price" value={prodPrice} onChange={e => setProdPrice(e.target.value)}/></td>
                </tr>
                </tbody>
            </table>
                <Button type="submit" >Edit Product</Button>
                <Link to="/" className="btn btn-danger ml-2" >Cancel</Link>
        
            </div> 
        </div>
        )
    
    }
export default EditProduct;
