import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
 <ChatEngine 
 height="100vh"
 projectID="0b856062-c898-42fe-9e7a-564d3a1e57f6"
 userName="malinnilsson"
 userSecret="123123"
 renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps } />}
 />
    )
}

export default App;