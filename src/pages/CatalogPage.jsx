
import {  useNavigate } from "react-router-dom";
import '../style/UserPage.css'

const CatalogPage = ()=>{
    
    const navigate = useNavigate()
    

    const handlePage = ()=>{
        navigate('/catalog/:id')
        }

    const handleMain = ()=>{
        navigate('/')
    }
   
   
    return (
        <div>
            <div className="header">
            <div className="header-logo">
                <img className="img" src="img/cat_mini.png" alt="" onClick={handleMain}/>
                PotatoCat
            </div>
            <div className="header-user">
                <span>username</span>
                <div className="user-icon">
                    <img src="img/paws.png" alt="" />
                </div>
            </div>
            </div>
            <div className="main-content">
                <h1 className="h1">Выберите собщество для анализа</h1>
                <div className="communities">
                    <div className="community-top">
                    <div className="community"onClick={handlePage}>
                        <img src="img/1С.png" alt="" />
                        Фирма "1С"
                    </div>
                    <div className="community">
                        <img src="img/Flipper.png" alt="" />
                        FlipperDevices
                    </div>
                    <div className="community">
                        <img src="img/Spark.png" alt="" />
                        Apache Spark
                    </div>
                    </div>
                    <div className="community-btn">
                    <div className="community">
                        <img src="img/Microsoft.png" alt="" />
                        Microsoft Visual Studio Code
                    </div>
                    <div className="community">
                        <img src="img/RedHat.png" alt="" />
                        Red Hat OpenShift
                    </div>
                    <div className="community">
                        <div className="menu-btn">
		                  <span></span>
		                  <span></span>
		                  <span></span>
	                    </div>
                        Все сообщества
                    </div>
                    </div>

                </div>

            </div>
         

        </div>
    )
}
export default CatalogPage;