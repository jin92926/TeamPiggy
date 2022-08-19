import { useState } from 'react';
import { authService } from '../../firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
} from '@firebase/auth'
import styled from "styled-components";
import { useNavigate } from "react-router";
import LoginForm from './LoginForm';
import LoginBtn from './LoginBtn';

const Login = () => {
    const [email, setEmail] = useState(""); //id
    const [password, setPassword] = useState(""); //pw
    const [username, setUsername] = useState(""); //username
    const [error, setError] = useState(" ")
    const [newAccount, setNewAccount] = useState(false);	// 새로운 유저인지 확인
    let navigate = useNavigate();
    
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
        setError(" ");
        if (newAccount) {
          data = await createUserWithEmailAndPassword(authService, email, password); // 계정 만들기
          await updateProfile(authService.currentUser, {displayName: username}); //displayName 추가
          // alert('새 계정 만들기 성공');
          navigate('/main');
        } else {
          data = await signInWithEmailAndPassword(authService, email, password); // 로그인
          alert('로그인 성공');
          navigate('/main');
        }
        console.log(data);
      } catch(error) {
        console.log(error.message);
      }
    }
    
    const toggleAccount = () => setNewAccount((prev) => !prev);

    //social login
    const OnSocialClick = async (event) => {
        const {target: {name}} = event;
        let provider;
        if (name === "google") {
          provider = new GoogleAuthProvider();
          navigate('/main');
        }
        else if(name === "github"){
          provider = new GithubAuthProvider();
          navigate('/main');
        }
        const data = await signInWithPopup(authService, provider);
        console.log(data);
      }

    return (
      <Background>
        <DivContainer>
        <LoginForm
          onSubmit={onSubmit} 
          onChange={onChange}
          email={email}
          password={password}
          username={username}
          newAccount={newAccount}
          toggleAccount={toggleAccount}
        >
        </LoginForm>
        <LoginBtn OnSocialClick={OnSocialClick} newAccount={newAccount} toggleAccount={toggleAccount}></LoginBtn>
        </DivContainer>
      </Background>
  )
}
const Background = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #FFFF4D; */
`;

const DivContainer = styled.div`
  width: 414px;
  height: 736px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180.45deg, #F6E7FB 1.69%, #3B6BB7 99.25%);
  border-radius: 10px;
`;

export default Login;