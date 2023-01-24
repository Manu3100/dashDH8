import { useState, useEffect } from 'react'


function CategoriasApi() {
const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        console.log('se monto')
        fetch('http://localhost:3000/categories')
        .then(response => response.json())
        .then(data => {
            setCategories(data.categories)
            console.log(categories)
        })
        .catch(error => console.error(error));
    }, [])


    return (
        <div>
            <h2> Categorias </h2>
            <ul>
          { categories.map((categorias, i) => {
            return (
                
                    <li key={i}>                       
                        <h5>{categorias.nombre}</h5>                  
                    </li>                     
            )
          })}
            </ul>
        </div>
    )
}

export default CategoriasApi