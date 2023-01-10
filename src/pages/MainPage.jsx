import { useNavigate } from "react-router-dom";
import '../style/MainPageStyle.css'


const MainPage = ()=>{


const navigate = useNavigate()
const handleStart = ()=>{
    navigate('/login')
}

    return (
        <div className ="main-page">
            <h1 className="h1">Добро пожаловать в <span>PotatoCat</span></h1>
            <div className="page-information">
            <div className="img">
                <img src="/img/cat.png" alt="" />
            </div>
            <div className="enter">
            <div className="h2-enter">
            <h2 className="h2">Вход</h2>
            </div>
            <form className="form-enter" action="">
            <input className="input" type='text' name='login' placeholder="Логин"/>
            <input className="input" type="text" name="password" placeholder="Пароль"/>
            <button className='button' onClick={handleStart}>Войти</button>
            </form>
            </div>
            </div>
            </div>
            
    )
}
export default MainPage;