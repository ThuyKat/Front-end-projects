import {useState} from "react"
import {useLocation} from "react-router-dom"
import {loginUser} from "../api"

export default function Login() {
const [state, setState] = useState("idle")
const location = useLocation()
console.log(location)
const [formData,setFormData] = useState({
    email:"",
    password:""
})
const handleInputChange=(e)=>{
    const {name,value}= e.target
    setFormData(preData=>{
        return {
            ...preData,
            [name]:value
        }
    })  
}
const handleSubmit= async(formData)=>{
    const loginData = Object.fromEntries(formData)
    console.log("loginData",loginData)
    loginUser(loginData).then(data => console.log(data))

}
  return (
    <div className="login-container">
        {location.state?.message && <h3 className="error-message">{location.state.message}</h3>}
        <h1>Sign in to your account</h1>
        <form action={handleSubmit}>
            <div className="input-group">
                <input placeholder="Email address" type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                <input placeholder="Password" type="password" name="password" value={formData.password} onChange={handleInputChange}/>
            </div>
            <button className="signin-btn" type="submit">Sign in</button>
        </form>
        <p>Don't have an account? <span className="orange-text">Create one now</span></p>
    </div>
    )
}
