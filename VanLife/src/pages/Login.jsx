import {useState, useRef} from "react"
import {useLocation} from "react-router-dom"
import {loginUser} from "../api"

export default function Login() {
const [state, setState] = useState("idle")
const location = useLocation()
const [formData,setFormData] = useState({
    email:"",
    password:""
})
const loginBtn = useRef(null)
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
    setState("submitting")
    const loginData = Object.fromEntries(formData)
    loginUser(loginData).then(data => {
        setState("idle")
        loginBtn.current.disabled = true
        loginBtn.current.style.backgroundColor="grey"
        console.log(data)})

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
            <button ref={loginBtn} className="signin-btn" type="submit">Sign in</button>
        </form>
        <p>Don't have an account? <span className="orange-text">Create one now</span></p>
    </div>
    )
}
