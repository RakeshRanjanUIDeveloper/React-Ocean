import React, { useEffect, useState } from 'react'
import { fakeSocialFetch } from './fakeSocialFetch';

const Social = () => {
    const [allSocial, setAllSocial] = useState([]);
    const fetchSocialData = async () =>{
        try{
            const response = await fakeSocialFetch('https://example.com/api/posts');
            setAllSocial(response.data.posts);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchSocialData();
    },[])
  return (
    <React.Fragment>
        <div className='social-container'>
            
        </div>
    </React.Fragment>
  )
}

export default Social