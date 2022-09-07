import React from 'react';
import { toast } from 'react-toastify';

const DeleteProducts = ({deleteProduct,isLoading,refetch ,setDeleteProduct}) => {
// console.log(deleteProduct)

    const handleDelete = () =>{
        fetch(`http://localhost:5000/products/${deleteProduct._id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then (data => {
            if (data.deletedCount) {
                toast.success('Product successfully deleted');
                setDeleteProduct(null);
                refetch();
            }
        })
    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}
            

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Are you sure want to Delete this item!!!</h3>
                <p class="py-4">Item Name: {deleteProduct.productName}</p>
                <p>Price : $ {deleteProduct.price}</p>
                <div class="modal-action">
                    <button className='btn btn-primary' onClick={handleDelete}>Confirm</button>
                <label for="delete-modal" class="btn btn-warning">Cancel</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteProducts;