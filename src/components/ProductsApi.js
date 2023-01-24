import { useState, useEffect } from 'react'

function ProductsApi() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        console.log('se monto')
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.products)
            console.log(products)
        })
        .catch(error => console.error(error));
    }, [])

    
    return (
        <div>
            <h2>Productos</h2>
            <ul>
          { products.map((producto, i) => {
            return (
                
                    <li key={i}>
                        <h4>{producto.nombre}</h4>
                        <h5>{producto.precio}</h5>
                        <h6>{producto.categoria}</h6>
                    </li>
                    
                
            )
          })}
            </ul>
        </div>
    )
}

export default ProductsApi