import React,{useContext} from 'react';
import {ShoppingContext} from "./context/ShoppingContext";

export default function Cart() {
    const {cartItems,setCartItems, incrementQ, decrementQ, removeFromCart} = useContext(ShoppingContext);
    return (
        <div className="row my-4">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        {cartItems.length>0? 
                        <table className="table" style={{alignItems:"center",textAlign:"center"}}>
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Total for this product</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                cartItems.map(item => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>
                                            <img src={item.image} alt={item.name} 
                                                className="img-fluid rounded" 
                                                width={100} height={100} />
                                        </td>
                                        <th>{item.name}</th>
                                        <td>
                                          
                                            <span className="mx-2"  style={{fontSize:'1.5rem',color:'black'}}>
                                                {item.quantity}
                                            </span>
                                           
                                        </td>
                                        <th>${item.price}</th>
                                        <th>${item.price * item.quantity}</th>
                                        <td style={{padding:"20px"}}>
                                        <i 
                                                className="bi bi-caret-up"
                                                style={{cursor: 'pointer' ,fontSize:'1.9rem',color:"blue"}}
                                                onClick={() => incrementQ(item)}
                                            ></i>
                                            
                                            <i 
                                                className="bi bi-cart-x text-danger"
                                                style={{cursor: 'pointer',fontSize:'1.8rem',color:"red"}}
                                                onClick={() => removeFromCart(item)}
                                            ></i>
                                             <i 
                                                className="bi bi-caret-down" 
                                                style={{cursor: 'pointer',fontSize:'1.9rem',color:"red"}}
                                                onClick={() => decrementQ(item)}
                                            ></i>
                                        </td>
                                    </tr>
                                ))
                            }
                            <tr>
                            <th colSpan={1} className="text-center">
                                    <button className=' btn btn-primary'    onClick={() => {
                                localStorage.clear();
                                setCartItems([]);
                            }}>Clear Cart</button>
                                </th>
                                <th colSpan={2} className="text-center" style={{fontSize:"2rem"}}>
                                    Total General :
                                </th>
                                <th colSpan={4} className="text-center">
                                    <span className="badge bg-danger rounded-pill" style={{fontSize:"1.4rem",marginTop:'8px'}}>
                                        $
                                        {
                                            cartItems.reduce((acc,item) => acc += item.price * item.quantity,0)
                                        }
                                    </span>
                                </th>
                               
                            </tr>
                            </tbody>
                        </table> :<h1 style={{textAlign:"center"}}>Table Empty</h1>}
                    </div>
                </div>
            </div>
        </div>
    )
}
