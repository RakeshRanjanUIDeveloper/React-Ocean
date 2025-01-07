import React, { useEffect, useState } from 'react'
import fakeVideoFetch from './fakeVideoFetch'

const Videos = () => {
    const [allVideos, setAllVideos] = useState([]);

    useEffect(() =>{
        const fetchVideos = async () =>{
            try {
                const response = await fakeVideoFetch('https://example.com/api/videos');
                if(response.status === 200){
                    setAllVideos(response.data.videos);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchVideos();
    }, [])
  return (
    <React.Fragment>
        <h2>PlayList</h2>
        <div className='video-list'>

            {
                allVideos.map((video) => (
                    <div className='video'>
                        <video className='each-video' autoPlay>
                            <source src={video.thumbnail} type="video/mp4" />
                        </video>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Videos