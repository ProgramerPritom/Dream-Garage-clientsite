import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sharer/Loading';
import UserRow from './UserRow';

const AllUser = () => {
    const {data: users, isLoading, refetch} = useQuery('userList', ()=>fetch('https://whispering-meadow-28819.herokuapp.com/user',{
        method : 'GET',
        headers: {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    console.log(users);


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-center text-3xl text-yellow-600 font-bold">All User Details {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        users.map((user,index) => <UserRow user={user} key={user._id} index={index} refetch={refetch}></UserRow>)
                    }
                    
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllUser;