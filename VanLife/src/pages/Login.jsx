import {useState} from "react"


export default function Login() {
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
    console.log(formData.get("email"))
    console.log(formData.get("password"))
}
  return (
    <div className="login-container">
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
