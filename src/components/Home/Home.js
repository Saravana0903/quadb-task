import React,{useEffect,useState} from 'react'
import "./Home.css"
import MovieCard from '../MovieCard/MovieCard';

function Home() {

   const [details,setState] = useState([]) 
   
   const genData = async() => { 
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all")
    const data = await response.json()
     console.log(data) 
     setState(data)
   }
    
    useEffect(() => {
      genData()
    },[])
   //console.log(details[1].show.image.medium);
  


  return (
    <div className='Container p-5'>
        <div className='row'>
            {console.log(details.show)}
            {details.map(item => (
               <div className='col-12 col-lg-3'>
              <MovieCard key={item.show.id} cardDetails = {item} />
              </div>
            ))}
        </div>
    </div>
  )
}

export default Home