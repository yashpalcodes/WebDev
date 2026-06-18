import UseFetch from './UseFetch.js';
import "./Products.css";

const Products = () => {
    const {data, loading, error} = UseFetch(
        "https://api.escuelajs.co/api/v1/products"
    );

    if(loading){
        return<div className='status'>loading...</div>;
    }

    if(error){
        return<div className='status error'>Error: {error}</div>;
    }


  return (
    
    <div className="container">
        <h2>Product List</h2>

        <div className="grid">
            {data.map((product) => (
                <div key={product.id} className="card">
                    <img src={product.images[0]} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>$ {product.price}</p>
                </div>
            ))}
        </div>
    </div>
    
  );
};

export default Products