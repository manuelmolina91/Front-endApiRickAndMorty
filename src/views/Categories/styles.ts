import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CharacterImg from '../Categories/assets/wallpaperflare.com_wallpaper1.jpg'
import LocationImg from '../Categories/assets/wallpaperflare.com_wallpaper.jpg'
import EpisodeImg from '../Categories/assets/wallpaperflare.com_wallpaper2.jpg'

export const WelcomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
export const ButtonBoxes = styled.div`
    position: absolute;
    top: 40vh;
    flex-direction:column;
    margin-left: 90px;
    display: flex;
`

export const ButtonCharacters = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-size: cover;
max-width: 100%;
max-height: 100%;
width: 400px;
height: 100px;
border-radius: 20px;
margin-bottom: 2rem;
cursor: pointer;
 position: relative;
    border: none;
    font-size: 24px;
    color:${({ theme }) => theme.colors.black};
    margin: 20px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    &:hover{
      background-image: url(${CharacterImg});
        color:${({ theme }) => theme.colors.white100};
        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.8);
        font-size: 40px;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
  transform: translateY(4px);
    }
    
    }  
`
export const ButtonEpisodes = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-size: cover;
max-width: 100%;
max-height: 100%;
width: 400px;
height: 100px;
border-radius: 20px;
margin-bottom: 2rem;
cursor: pointer;
 position: relative;
    border: none;
    font-size: 24px;
    color:${({ theme }) => theme.colors.black};
    margin: 20px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    &:hover{
      background-image: url(${EpisodeImg});
        color:${({ theme }) => theme.colors.white100};
        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.8);
        font-size: 40px;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
  transform: translateY(4px);
    }
    
    }  
`

export const ButtonLocations = styled(Link)`
 display: flex;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-size: cover;
max-width: 100%;
max-height: 100%;
width: 400px;
height: 100px;
border-radius: 20px;
margin-bottom: 2rem;
cursor: pointer;
 position: relative;
    border: none;
    font-size: 24px;
    color:${({ theme }) => theme.colors.black};
    margin: 20px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    &:hover{
      background-image: url(${LocationImg});
        color:${({ theme }) => theme.colors.white100};
        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.8);
        font-size: 40px;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
  transform: translateY(4px);
    }
    
    }   
`
