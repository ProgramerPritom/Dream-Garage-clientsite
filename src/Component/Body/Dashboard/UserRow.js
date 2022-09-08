import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
    const makeAdmin = () =>{
        fetch(`https://whispering-meadow-28819.herokuapp.com/user/admin/${user.email}`,{
            method : 'PUT',
            headers : {
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if (res.status === 403) {
                toast.error('Failed to Make an Admin')
            }
            return res.json()})
        .then(data => {
            console.log(data);
            refetch()
            toast('Successfully made admin');
        })
    }
    return (
        <tr>
                        <th>{index + 1}</th>
                        <td>{user.email}</td>
                        <td>{user.role !== 'admin' && <button onClick={makeAdmin} class="btn btn-outline btn-info">Admin</button>}</td>
                        <td>Quality Control Specialist</td>
        </tr>
    );
};

export default UserRow;