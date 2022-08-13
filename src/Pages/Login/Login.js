import { useState } from 'react';
import { authService } from '../../firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from '@firebase/auth'

import LoginForm from './LoginForm';
import LoginBtn from './LoginBtn';

const Login = () => {
    const [email, setEmail] = useState(""); //id
    const [password, setPassword] = useState(""); //pw
    const [username, setUsername] = useState(""); //username
    const [newAccount, setNewAccount] = useState(false);	// 새로운 유저인지 확인
    
    const onChange = (event) => {
      const {target: {name, value}} = event;
      if (name ==="email") {
        setEmail(value)
      } else if (name === "password") {
        setPassword(value);
      } else if (name === "username") {
        setUsername(value);
      }
    }
    
    const onSubmit = async (event) => {
      event.preventDefault();
      try {
        let data;
        if (newAccount) {
          data = await createUserWithEmailAndPassword(authService, email, password, username); // 계정 만들기
        } else {
          data = await signInWithEmailAndPassword(authService, email, password); // 로그인
        }
        console.log(data);
      } catch(error) {
        console.log(error)
      }
    }
    
    const toggleAccount = () => setNewAccount((prev) => !prev);

    //social login
    const OnSocialClick = async (event) => {
        const {target: {name}} = event;
        let provider;
        if (name === "google") {
          provider = new GoogleAuthProvider()
        }
        else if(name === "github"){
          provider = new GithubAuthProvider()
        }
        const data = await signInWithPopup(authService, provider);
        console.log(data);
      }
  
    return (
        <div>
          <LoginForm
            onSubmit={onSubmit} 
            onChange={onChange}
            email={email}
            password={password}
            username={username}
            newAccount={newAccount}
            >
          </LoginForm>
          <LoginBtn OnSocialClick={OnSocialClick} newAccount={newAccount} toggleAccount={toggleAccount}></LoginBtn>
        </div>
  )
}

export default Login;