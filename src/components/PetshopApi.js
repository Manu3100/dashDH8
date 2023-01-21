import { useState, useEffect } from 'react'

function Petshop() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log('se monto')
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.products)
            console.log(data, data.results)
            console.log(products)
        })
        .catch(error => console.error(error));
    }, [])

    useEffect(()=> {
        console.log('se actualizo');
    }, [products])
    
   
    return (
        <div>
            <h2> Petshop Productos</h2>
            <ul>
          { products.map((producto, i) => {
            return (
                
                    <li key={i}>
                        <h3>{producto.nombre}</h3>
                        <h3>{producto.precio}</h3>
                        <h3>{producto.categoria}</h3>
                    </li>
                    
                
            )
          })}
            </ul>
        </div>
    )
}

export default Petshop