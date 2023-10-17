import { useState } from "react"
 
function Signup(){

    let [name,setName]=useState('')
    let [email,setEmail]=useState('')
    let [password,setPassword] = useState('')
    let [conPassword,setConPassword] = useState('')
    let [languages, setlanguages]=useState([])
    function handleChange(e){
        const value = e.target.value
        const checked = e.target.checked
        console.log(value,checked)
        if(checked){
                languages.push(value)
        }else{
            setlanguages(languages.filter((e)=>(e !== value)))
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(languages)
    }

    return(

        <div>
            <form>
                <label>UserName</label><br/>
                <input type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}}></input><br/>
                <label>Email</label><br/>
                <input type='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br/>
                <label>Password</label><br/>
                <input type='password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input><br/>
                <label>Confirm Password</label><br/>
                <input type='password' name="conPassword" value={conPassword} onChange={(e)=>{setConPassword(e.target.value)}}></input><br/>
                <input type='checkbox' name="Languages" value="java" onChange={handleChange}></input>
                <label>Java</label>
                <input type='checkbox' name="Languages" value="php" onChange={handleChange}></input>
                <label>Php</label>
                <input type='checkbox' name="Languages" value="python" onChange={handleChange}></input>
                <label>Python</label>
                <input type='checkbox' name="Languages" value="cpp" onChange={handleChange}></input>
                <label>Cpp</label><br/>
                <input type='radio' name="gender" value='male' />Male
                <input type='radio' name="gender" value='female' />Female<br/>
                <button type='submit' onClick={handleSubmit}>Signup</button>
            </form>
        </div>
    )
}
export default Signup