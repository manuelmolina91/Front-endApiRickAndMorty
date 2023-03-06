import styled, { css } from "styled-components";
import { Form as DefaultForm } from 'formik'
import  LetrasRick from '../../views/Auth/Login/assets/portal.jpg'


export const FormContainer = styled.div`
background-repeat: no-repeat;
background-image: url(${LetrasRick});

background-size: cover;
background-position: 100% 100%;
width: 100vw;
height:110vh;
align-items: center;
display: flex;
justify-content: center;

`

export const Form = styled(DefaultForm)`
display: flex;
flex-direction: column; 
border-radius: 10px;
background-color: rgb(51, 51, 51, 0.602 );
height: 32rem;
width:22.5rem;
margin-top: 6.25rem;
margin-left: 1.7rem;
margin-right: 1.7rem;
`
export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  &:not(:first-child) {
    margin-top: 16px;
  }
`

export const Input = styled.input<{ $hasError?: boolean }>`
padding:10px;
margin:10px;
border-radius: 5px;
background-color: transparent;

color: ${({ theme }) => theme.colors.white100};
${({ $hasError, theme }) =>
        $hasError ? theme.colors.danger : theme.colors.white100};
  padding: 10px 14px;

  ${({ $hasError, theme }) =>
        $hasError &&
        css`
      color: ${theme.colors.white100};
    `}
   
`

export const FormButton = styled.button`
   border-radius: 5px;
   cursor:pointer;
   margin: 16px;
   padding:5px;
   &:hover{
       background-color: ${({ theme }) => theme.colors.bluerick};
       color: white;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       width: 340px;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
      background-color: ${({ theme }) => theme.colors.bluerick};
  box-shadow: 0 6px #666;
  transform: translateY(4px);
    }
    
    }  
`

export const FormMessage = styled.p`
align-items: center;
display: flex;
justify-content: center;
`

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 16px;
  font-weight: bold;
  background-color: black;
  margin-top: 8px;
`
export const BackButton = styled.button`
 width: 60px;
 border-radius: 5px;
 border: 2px solid black;
 margin-left: 17px;
 padding: 6px;
 cursor:pointer;
 &:hover{
       background-color: ${({ theme }) => theme.colors.bluerick};
       color: white;
       font-weight: bold;
       padding: 6px;
       text-align: center;
       width: 100px;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
      background-color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 6px #666;
  transform: translateY(4px);
    }
    
    }  
`


