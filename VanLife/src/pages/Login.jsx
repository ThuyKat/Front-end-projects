import {useState, useRef} from "react"
import {useLocation, useNavigate} from "react-router-dom"
import {loginUser} from "../api"

export default function Login() {
const [state, setState] = useState("idle")
const [error, setError] = useState(null)
const location = useLocation()
const navigate = useNavigate()
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
    loginBtn.current.disabled = true
    loginBtn.current.style.backgroundColor="grey"

    loginUser(loginData).then(data => {
        setState("idle")
        console.log(data)
        if(data.status === 200){
            setError(null)
            navigate("/host", {replace:true})
        }
    
    }).catch(err=>setError(err))

}
  return (
    <div className="login-container">
        {location.state?.message && <h3 className="error-message">{location.state.message}</h3>}
        <h1>Sign in to your account</h1>
        {error? <p>{error}</p>:null}
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
