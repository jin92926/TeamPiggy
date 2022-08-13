import styled from "styled-components";

const LoginBtn = ({OnSocialClick, newAccount, toggleAccount}) => {
    return(
        newAccount ?
        null
        :
        <SocialBtn>
            <Button name="google" onClick={OnSocialClick}>Google 계정으로 로그인</Button>
            <Button name="github" onClick={OnSocialClick}>Github 계정으로 로그인</Button>
            <Button onClick={toggleAccount}>새 계정 만들기</Button>
        </SocialBtn>
    )
        
}

const SocialBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    padding: 10px;
    width: 40%;
`;

export default LoginBtn;