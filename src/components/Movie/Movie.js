import React from 'react'
import { useParams,useLocation,useNavigate } from 'react-router-dom'
import './Movie.css'
function Movie() {

     
    const {id} = useParams()
    //const [data,setData] = useState([])
    console.log(id)
    
    const location = useLocation()
    const reqData = location.state     
    console.log(reqData)
    const navigate = useNavigate()
    const bookBtn = () => {
        navigate(`/form/${id}`,{state:reqData})
    }
    let url
  if (reqData.show.image !== null){
    url = reqData.show.image.medium
  } 
  else {
    url = "https://assetscdn1.paytm.com/images/cinema/Jailer-705x750-d6366ef0-2b00-11ee-a540-ef1242eadacd.jpg"
  }
  return (
    <div className="bg-con">
    <div className='Container'>
        <div className='row'>
            <div className='col-12 col-lg-6'>
                <img src = {url} className='big' /> 
            </div>
            <div className='col-12 col-lg-6'>
                <h1 className='main-head'>{reqData.show.name}</h1> 
                <span>Summary:</span>
                <p>{reqData.show.summary}</p>
                <button className='btn btn-primary' onClick={bookBtn} >Book tickets</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Movie