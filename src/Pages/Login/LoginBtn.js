import styled from "styled-components";
import { ReactComponent as GoogleIcon } from '../../googleLogo.svg'
import { ReactComponent as GithubIcon } from '../../github.svg'

const LoginBtn = ({OnSocialClick, newAccount, toggleAccount}) => {
    return(
        newAccount ?
        null
        :
        <SocialBtn>
            <Button name="google" color="#d2d2d2" onClick={OnSocialClick}>
                <div>
                    <GoogleIcon width="16px" height="16px"/>
                </div>
                <span>Google 계정으로 로그인</span>
            </Button>
            <Button name="github" color="#222222" onClick={OnSocialClick}>
                <div>
                    <GithubIcon width="16px" height="16px"/>
                </div>
                <span>Github 계정으로 로그인</span>
            </Button>
            <Button onClick={toggleAccount}>새 계정 만들기</Button>
        </SocialBtn>
    )
}

const SocialBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
`;

const Button = styled.button`
    margin: 5px 0;
    padding: 10px 25px;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: ${(props) => props.color ? props.color : "skyblue"};
    border: none;
    border-radius: 50px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    > div{
        display: inline-block;
        background-color: white;
        width: 16px;
        height: 16px;
        padding: 5px;
        border-radius: 50px;
    }
    >span{
        margin-left: 5px;
    }
    &:hover{
        opacity: 0.9;
    }
`;
export default LoginBtn;