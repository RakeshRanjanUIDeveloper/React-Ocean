
//step 1 - create context
import { createContext, useEffect, useState } from "react";
import { fakeVideoFetch } from "./fakeVideoFetch";
export const VideoContext = createContext();

// step 2 - create provider
export const VideoProvider = ({children}) =>{
    const [allVideos, setAllVideos] = useState([])
    useEffect(() =>{
        const fetchVideos = async () =>{
            try {
                const response = await fakeVideoFetch('https://example.com/api/videos');
                if(response.status === 200){
                    setAllVideos(response.data.videos)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchVideos();
    }, [])
    return (
        <VideoContext.Provider value={{allVideos}}>
            {children}
        </VideoContext.Provider>
    )
}