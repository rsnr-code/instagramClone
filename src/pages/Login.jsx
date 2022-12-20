import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import '../styles/app.css'

const Login = () => {
    const history = useNavigate();
    const { firebase } = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const inValid = password === '' || email === '';
    
    const handleLogin = () => {

    };

    useEffect(() => {
        document.title = 'Login - Instagram';
    }, [])

    return ( 
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram profile"/>
            </div>
            <div className="flex flex-col w-2/5">
                <p>Form</p>
            </div>
            
        </div>
    );
}
 
export default Login;