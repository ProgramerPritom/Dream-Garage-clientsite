import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const imageStorageKey = 'f554d4a94faa54a256b033c9a2b30f21';

    const onSubmit = data =>{
      // console.log(data);
        const image = data.image[0];
        // console.log(image)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url,{
          method: 'POST',
          body: formData
      })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const productInfo = {
              productName : data.productName,
              image : img,
              price : data.price,
              quantity : data.quantity,
              minimumQuantity : data.minimumQuantity,
              description : data.description

          }

          fetch('http://localhost:5000/products',{
                method: "POST",
                headers : {
                  'content-type' : 'application/json'
                },
                body : JSON.stringify(productInfo)

          })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              toast('Product added Successfully');
              reset();
            }
            else{
              toast.error('Failed to added One product');
            }
          })

        }
      })



    } 





    return (
        <div class="card w-full">
        <div class="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      
      <div class="form-control">
          <label class="label">
            <span class="label-text font-bold">Product Name</span>
          </label>
          <input type="text" placeholder="Product Name" class="input input-bordered" 
          {...register("productName", { required: true })}
          />
        </div>
      
      {errors.productName && <span className='text-red-600'>Product Name is required</span>}



      


      <div className="flex justify-between">
          <div>
            <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Price</span>
                </label>
                <input type="text" placeholder="Price" class="input input-bordered" 
                {...register("price", { required: true })}
                />
              </div>
            
            {errors.price && <span className='text-red-600'>Price is required</span>}
          </div>

          <div>
          <div class="form-control">
              <label class="label">
                <span class="label-text font-bold">Quantity</span>
              </label>
              <input type="text" placeholder="Quantity" class="input input-bordered" 
              {...register("quantity", { required: true })}
              />
            </div>
          
              {errors.quantity && <span className='text-red-600'>Quantity is required</span>}
          </div>

          <div>
          <div class="form-control">
          <label class="label">
            <span class="label-text font-bold">Minimum Orders</span>
          </label>
          <input type="text" placeholder="Minimum Quantity" class="input input-bordered" 
          {...register("minimumQuantity", { required: true })}
          />
        </div>
      
        {errors.minimumQuantity && <span className='text-red-600'>Minimum Quantity is required</span>}
          </div>
      </div>

      <div className="form-control w-full max-w-full">
                <label className="label">
                    <span className="label-text font-bold">Image</span>
                </label>
                <input type="file" className="p-2 input input-bordered w-full max-w-xs" 
                    {...register("image",  {
                        
                        required : {
                            value : true,
                            message : 'Image is Needed'
                        }
                        
                      })}
                />
                <label className="label">
                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    
                    
                </label>
                </div>


      <div class="form-control">
          <label class="label">
            <span class="label-text font-bold">Description</span>
          </label>
          <textarea class="textarea textarea-bordered" placeholder="Description" {...register("description", { required: true })}
          ></textarea>
          {/* <input type="text" placeholder="Description" class="input input-bordered" 
          {...register("description", { required: true })}
          /> */}
        </div>
      
      {errors.description && <span className='text-red-600'>Description is required</span>}
      
      











      <div className='my-4'>
      <input type="submit" className='btn btn-primary'/>
      </div>
    </form>
        </div>
        </div>
    );
};

export default AddProduct;