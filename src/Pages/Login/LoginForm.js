import styled from "styled-components";
// import Wrapper from '../../Component/Wrapper'

const LoginForm = function({onSubmit, onChange, email, password, newAccount, username, toggleAccount}){
    return (
        <Wrapper>
            {
            newAccount ?
            <>
                <Title> Piggy 새 계정 만들기</Title>
                <Form onSubmit={onSubmit}>
                    <Input name="email" type="email" placeholder="email" required value={email} onChange={onChange} />
                    <Input name="password" type="password" placeholder="password" required value={password} onChange={onChange} />
                    <Input name="username" type="text" placeholder="username" required value={username} onChange={onChange} />
                    <Input type="submit" value="create Account" />
                </Form>
                <Button onClick={toggleAccount}>back</Button>
            </>
            :
            <>
                <Title>Piggy 로그인</Title>
                <Form onSubmit={onSubmit}>
                    <Input name="email" type="email" placeholder="email" required value={email} onChange={onChange} />
                    <Input name="password" type="password" placeholder="password" required value={password} onChange={onChange} />
                    <Input type="submit" value="login" />
                </Form>
            </>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 6px 12px;
`;
const Input = styled.input`
    padding: 10px;
    margin: 5px;
`;
const Button = styled.button`
    padding: 10px;
    width: 40%;
`;

export default LoginForm;