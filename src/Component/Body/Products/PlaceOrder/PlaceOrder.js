
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Sharer/Loading';

const PlaceOrder = ({data, value, updatePrice}) => {
    // console.log(data,value,updatePrice);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    if (loading) {
        return <Loading></Loading>
    }
    const handleConfirmOrder = () =>{
        const orderInfo = {
            email: user.email,
            value : value,
            price: updatePrice,
            name : data.productName,
            img : data.image

        }
        if (user) {
            fetch('http://localhost:5000/orders',{
                method :'POST',
                headers : {
                    'Content-type': 'application/json',
                },
                body : JSON.stringify(orderInfo)
            })
            .then(res => res.json())
            .then(data => {
                toast.success('Confirm Order successfully, Fill up Payment method to get your Product');
                navigate('/dashboard/myorders');
                // console.log(data)
            })
        }
        
        
    }
    return (
        <div>

            
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
            <div class="modal-box">
                <div className='flex items-center justify-evenly'>
                    <div className='w-36'>
                        <img src={data.image} alt="" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">{data.productName}</h4>
                    </div>
                </div>

            <div>
                <div className="productQuantity flex items-center justify-evenly">
                    <h3 className="text-xl font-semibold my-1">Confirm Products :</h3>
                    <p className="text-2xl font-bold">{value} pics</p>
                </div>
                <div className="productQuantity flex items-center justify-evenly my-2">
                    <h3 className="text-xl font-semibold my-1">Total Price :</h3>
                    <p className="text-2xl font-bold"> ${updatePrice} </p>
                </div>
            </div>







                <div class="modal-action">
                <label onClick={handleConfirmOrder} id='basicBtn' for="my-modal" class="btn btn-primary">Confirm Order</label>
                <label for="my-modal" class="btn">Cancel</label>
                </div>
            </div>
            </div>

        </div>
    );
};

export default PlaceOrder;