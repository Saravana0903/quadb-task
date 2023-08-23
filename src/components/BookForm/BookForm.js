import React,{useState} from 'react'
import {useParams,useLocation} from "react-router-dom"
import './BookForm.css'

function BookForm() {

    const {id} = useParams()
    console.log(id)

    const location = useLocation()
    const data = location.state 
    console.log(data)
    const stitem = localStorage.getItem("user")
    console.log(stitem)
    let initial;
    if ((stitem === null) || (stitem===undefined)){
        initial = {}
    }
    else{
        initial = {email:stitem.email,username:stitem.username,pwd:stitem.pwd}
    }
    const [users,setUser] = useState(initial)
    
    const handleChange = (e) => {
        const name = e.target.name;
    const value = e.target.value;
    setUser(values => ({...values, [name]: value}))
    } 

    console.log(users)
    let url
    if (data.show.image !== null){
    url = data.show.image.medium
    } 
    else {
    url = "https://assetscdn1.paytm.com/images/cinema/Jailer-705x750-d6366ef0-2b00-11ee-a540-ef1242eadacd.jpg"
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Your values are submitted") 
        localStorage.setItem("user",users)
    }

  return (
    <div className='Container pt-4 pb-4'>
        <div className='row d-flex flex-row justify-content-center align-items-center'>
            <div className='col-12 col-lg-4'>
                <h1>{data.show.name}</h1>
                <img src={url} className='icon' />
                <p>{data.show.language}/3D/U</p>
                <p>Days:{JSON.stringify(data.show.schedule.days)}</p>
                <p>Time:{data.show.schedule.time}</p>  
                <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label><br/>
    <input type="email" className="inp-ele"  id="exampleInputEmail1" value={users.email} name="email" 
    onChange={handleChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">Username:</label> <br/>
    <input type="text" className="inp-ele"  id="username" value={users.username} name="username" 
    onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password:</label> <br/>
    <input type="password" className="inp-ele"  id="exampleInputPassword1" value={users.pwd} name="pwd"
    onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        </div>

    </div>
  )
}

export default BookForm