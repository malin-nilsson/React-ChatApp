import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': "0b856062-c898-42fe-9e7a-564d3a1e57f6", 'User-Name': username, 'User-Secret': password };

    try {
         // username, password => chatengine -> give message
   
await axios.get('https://api.chatengine.io/chats', { headers: authObject });
 // works out -> logged in

 localStorage.setItem('username', username);
 localStorage.setItem('password', password);

 window.location.reload();

    }
    catch (error) {
  // error -> try with new username...

    }

}

    return(
<div className="wrapper">
<div className="form">
    <h1 className="title">Chat Application</h1>
    <form onSubmit={handleSubmit}>
<input type="text" value="username" onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
<input type="password" value="password" onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
<div align="center">
<button type="submit" className="button">
    <span>Start Chatting</span>
</button>
</div>
    </form>
</div>

</div>

    )
}

export default LoginForm;