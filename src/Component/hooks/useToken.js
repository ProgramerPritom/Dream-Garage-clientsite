import { current } from 'daisyui/src/colors';
import React, { useState } from 'react';
import { useEffect } from 'react';

const useToken = (user) => {
    const [token,setToken] = useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const name = user?.user?.UserName;
        const currentUser = {
            userName : name,
            email : email
        }
        if (email) {
            fetch(`https://whispering-meadow-28819.herokuapp.com/user/${email}`,{
                method: 'PUT',
                body : JSON.stringify(currentUser),
                headers: {
                'Content-type': 'application/json',
              },
            })
            .then(res => res.json())
            .then(data =>{
                console.log('data insert',data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    },[user])
    return [token, setToken];
};

export default useToken;