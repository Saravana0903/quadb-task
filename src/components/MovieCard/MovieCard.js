import React from 'react'
import { useNavigate} from 'react-router-dom'
import './MovieCard.css'

function MovieCard(props) {
  const {key,cardDetails} = props
  const {show} = cardDetails 
  console.log(key)
  //const url = show.image !== null && show.image.medium  
  let url
  if (show.image !== null){
    url = show.image.medium
  } 
  else {
    url = "https://assetscdn1.paytm.com/images/cinema/Jailer-705x750-d6366ef0-2b00-11ee-a540-ef1242eadacd.jpg"
  }
  const navigate = useNavigate()
  const showDetails = () => {
    const id = show.id; 
    navigate(`/movie/${id}`,{state:cardDetails})
  }

  return (
    <div className='card-con'>
        {console.log(cardDetails)}
        <div>
        <img src={url} className='movie-icon'/>
        </div>
        <div className='content-con pt-2 pb-4 pl-2 pr-2'>
          
           <h2 className='text-warning'>{show.name}</h2>
           <div>
            <span className='label'>Language:</span><span>{show.language}</span>
           </div>
           <div>
            <span className='label'>Rating:</span><span>{show.weight/10}</span>
           </div>
           <div>
            <span className='label'>Run time:</span><span>{show.runtime ? show.runtime:'-'}</span>
           </div> 
           <div>
            <span className='label'>Status:</span><span>{show.status}</span>
           </div>
           <button className='btn btn-outline-primary btn-man' onClick={showDetails}>Show more</button>
        </div>
    </div>
  )
}

export default MovieCard