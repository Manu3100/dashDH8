import { useState, useEffect } from 'react'

function CountApi() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        console.log('se monto')
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.count)
            console.log(products)
        })
        .catch(error => console.error(error));
    }, [])

    
    return (
        <div>
            <h3>Total Productos</h3>
            <ul>
            <h4>{products}</h4>
            </ul>
        </div>
    )
}

export default CountApi