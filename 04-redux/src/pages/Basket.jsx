import React from 'react'; // React-i import edirik
import { useDispatch, useSelector } from 'react-redux'; // Redux store-dan məlumatları əldə etmək üçün useSelector istifadə edirik
import { removeFromCart } from '../redux/reducers/cartSlice';

const Basket = () => {
    const dispatch = useDispatch();
    // Redux store-dan 'cart' məlumatını alırıq
    const cart = useSelector(state => state.cart); // 'cart' state-ni Redux store-dan çəkirik
    
    const handleRemove =(item)=>{
        dispatch(removeFromCart(item))
    }
    return (
        <div>
            <h2>Basket</h2>
            {/* Əgər səbət boşdursa, "Səbətiniz boşdur" mesajını göstəririk */}
            {cart.length === 0 ? (
                <p>Your cart is empty.</p> 
            ) : (
                // Əgər səbət doludursa, hər bir məhsulu render edirik
                cart.map(item => (
                    <div key={item.id} style={{ margin: "10px" }}>
                        <img src={item.image} alt={item.title} style={{ width: '100px' }} /> {/* Məhsulun şəkli */}
                        <span>{item.title}</span> {/* Məhsulun adı */}
                        <p>$ {item.price}</p> {/* Məhsulun qiyməti */}
                        <button onClick={()=>handleRemove(item)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Basket;
