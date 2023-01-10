import React, { useEffect, useState } from 'react';
import '../style/CommunityPage.css'
import users from '../../newJsonUsers199.json'

const CommunityPage= ()=>{

    const [searchText,setSearchText] = useState("")
  
    const [indicators,setIndicators] = useState([
        {id: 1, name: "1C-Company",
        countFollowers: 475,
        countRepo: 13,
        countContributors: 83,
        countDoubleContributors: 5,
        percentContributors: 17,
        countPopularFollowers: 25},
     
     ]);
  
     let res = indicators.map((item,index)=>{
        return <table>
           <tr key={item.id}>
           <td className='td td-main'>Подписчики</td>
           <td className='td '>{item.countFollowers}</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           </tr>
           <tr key={item.id}>
           <td className='td td-main'>Проекты</td>
           <td className='td '>{item.countRepo}</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           </tr>
           <tr key={item.id}>
           <td className='td td-main'>Контрибьюторы</td>
           <td className='td '>{item.countContributors}</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           </tr>
           <tr key={item.id}>
           <td className='td td-main'>Подписчики среди контрибьюторов</td>
           <td className='td '>{item.percentContributors}%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           <td className='td '>%</td>
           </tr>
           <tr key={item.id}>
           <td className='td td-main'>Популярные подписчики</td>
           <td className='td '>{item.countPopularFollowers}</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           <td className='td '>Число</td>
           </tr>
           </table>
     });
     
  

    return (
        
        <div>
            
            <div className="header">
                <div className="header-logo">
                <img className="img" src="/img/cat_mini.png" alt="" />
                PotatoCat
                </div>
                <div className="header-user">
                <span>username</span>
                <div className="user-icon">
                    <img src="/img/paws.png" alt="" />
                </div>
            </div>
            </div>
            <div className="community-main">
                <div className="items">
                    <img src="/img/equalizer.png" alt="" className='img'/>
                    <div className="firm">
                        <img src="/img/1С-mini.png" alt="" />
                        Фирма "1С"
                    </div>
                    <button className='btn'>Добавить собщество +</button>
                </div>
                <div className='tables'>
                <table>
                   {res}
                </table>
                <div className='params'>
                <svg className='params-svg' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2084 0.916626H3.79169C3.02919 0.916626 2.29792 1.21953 1.75876 1.75869C1.21959 2.29786 0.916687 3.02913 0.916687 3.79163V4.91288C0.91655 5.30861 0.998113 5.70012 1.15627 6.06288V6.12038C1.29166 6.42797 1.48344 6.70751 1.72169 6.94454L7.62502 12.8095V19.125C7.62469 19.2878 7.66588 19.4481 7.74469 19.5906C7.8235 19.7331 7.93733 19.8532 8.07544 19.9395C8.22795 20.0341 8.40393 20.0839 8.58335 20.0833C8.73337 20.0824 8.88109 20.0463 9.0146 19.9779L12.8479 18.0612C13.006 17.9816 13.1389 17.8597 13.2319 17.7092C13.325 17.5586 13.3745 17.3853 13.375 17.2083V12.8095L19.24 6.94454C19.4783 6.70751 19.67 6.42797 19.8054 6.12038V6.06288C19.9768 5.70296 20.0714 5.31133 20.0834 4.91288V3.79163C20.0834 3.02913 19.7805 2.29786 19.2413 1.75869C18.7021 1.21953 17.9709 0.916626 17.2084 0.916626ZM11.7363 11.7362C11.6475 11.8258 11.5772 11.932 11.5295 12.0487C11.4818 12.1655 11.4576 12.2905 11.4584 12.4166V16.6141L9.54169 17.5725V12.4166C9.54242 12.2905 9.51824 12.1655 9.47055 12.0487C9.42286 11.932 9.35259 11.8258 9.26377 11.7362L4.1846 6.66663H16.8154L11.7363 11.7362ZM18.1667 4.74996H2.83335V3.79163C2.83335 3.53746 2.93432 3.2937 3.11404 3.11398C3.29377 2.93426 3.53752 2.83329 3.79169 2.83329H17.2084C17.4625 2.83329 17.7063 2.93426 17.886 3.11398C18.0657 3.2937 18.1667 3.53746 18.1667 3.79163V4.74996Z" fill="white"/>
                </svg>
                <div className='form'>
                    <form className='search-form'>
                    <svg classname='search-svg' width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.04585 8.45413L7.50002 6.92079C8.10006 6.17263 8.39065 5.223 8.31203 4.26717C8.2334 3.31134 7.79155 2.42195 7.07732 1.7819C6.36309 1.14184 5.43077 0.799756 4.47207 0.82599C3.51337 0.852223 2.60116 1.24478 1.923 1.92294C1.24484 2.60109 0.852284 3.51331 0.826051 4.47201C0.799817 5.43071 1.1419 6.36303 1.78196 7.07726C2.42201 7.79149 3.3114 8.23334 4.26723 8.31196C5.22306 8.39059 6.17269 8.1 6.92085 7.49996L8.45419 9.03329C8.49292 9.07235 8.53901 9.10334 8.58978 9.1245C8.64056 9.14565 8.69502 9.15654 8.75002 9.15654C8.80503 9.15654 8.85949 9.14565 8.91026 9.1245C8.96104 9.10334 9.00712 9.07235 9.04585 9.03329C9.12095 8.9556 9.16293 8.85177 9.16293 8.74371C9.16293 8.63565 9.12095 8.53182 9.04585 8.45413ZM4.58335 7.49996C4.00649 7.49996 3.44258 7.3289 2.96294 7.00841C2.4833 6.68793 2.10946 6.23241 1.88871 5.69945C1.66795 5.1665 1.61019 4.58006 1.72273 4.01428C1.83527 3.4485 2.11306 2.9288 2.52096 2.5209C2.92886 2.113 3.44856 1.83521 4.01434 1.72267C4.58012 1.61013 5.16656 1.66789 5.69951 1.88864C6.23247 2.1094 6.68799 2.48324 7.00847 2.96288C7.32896 3.44252 7.50002 4.00643 7.50002 4.58329C7.50002 5.35684 7.19273 6.09871 6.64575 6.64569C6.09877 7.19267 5.3569 7.49996 4.58335 7.49996Z" fill="#EEEEEE"/>
                  </svg>
                        <input 
                        value = {searchText}
                        type="text"
                        placeholder="Поиск по параметрам"
                        className='seacrh-input'
                        onChange={(event)=> setSearchText (event.target.value)}
                         />
                        
                    </form>
                </div>
                <button className='btn-params'>Email <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.35503 3.41497L5.47503 1.29497C5.52189 1.24849 5.55909 1.19319 5.58447 1.13226C5.60986 1.07133 5.62292 1.00598 5.62292 0.939971C5.62292 0.873966 5.60986 0.808613 5.58447 0.747683C5.55909 0.686753 5.52189 0.631453 5.47503 0.584971C5.38134 0.491846 5.25462 0.439575 5.12253 0.439575C4.99043 0.439575 4.86371 0.491846 4.77003 0.584971L3.00003 2.35497L1.23003 0.584971C1.13634 0.491846 1.00962 0.439575 0.877525 0.439575C0.745432 0.439575 0.618707 0.491846 0.525025 0.584971C0.478685 0.631691 0.442022 0.687099 0.41714 0.748018C0.392258 0.808937 0.379645 0.874168 0.380026 0.939971C0.379645 1.00577 0.392258 1.07101 0.41714 1.13192C0.442022 1.19284 0.478685 1.24825 0.525025 1.29497L2.64503 3.41497C2.69151 3.46184 2.74681 3.49903 2.80774 3.52442C2.86867 3.5498 2.93402 3.56287 3.00003 3.56287C3.06603 3.56287 3.13138 3.5498 3.19231 3.52442C3.25324 3.49903 3.30854 3.46184 3.35503 3.41497Z" fill="white"/>
                </svg>
                </button>
                <button className='btn-params'>Город <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.35503 3.41497L5.47503 1.29497C5.52189 1.24849 5.55909 1.19319 5.58447 1.13226C5.60986 1.07133 5.62292 1.00598 5.62292 0.939971C5.62292 0.873966 5.60986 0.808613 5.58447 0.747683C5.55909 0.686753 5.52189 0.631453 5.47503 0.584971C5.38134 0.491846 5.25462 0.439575 5.12253 0.439575C4.99043 0.439575 4.86371 0.491846 4.77003 0.584971L3.00003 2.35497L1.23003 0.584971C1.13634 0.491846 1.00962 0.439575 0.877525 0.439575C0.745432 0.439575 0.618707 0.491846 0.525025 0.584971C0.478685 0.631691 0.442022 0.687099 0.41714 0.748018C0.392258 0.808937 0.379645 0.874168 0.380026 0.939971C0.379645 1.00577 0.392258 1.07101 0.41714 1.13192C0.442022 1.19284 0.478685 1.24825 0.525025 1.29497L2.64503 3.41497C2.69151 3.46184 2.74681 3.49903 2.80774 3.52442C2.86867 3.5498 2.93402 3.56287 3.00003 3.56287C3.06603 3.56287 3.13138 3.5498 3.19231 3.52442C3.25324 3.49903 3.30854 3.46184 3.35503 3.41497Z" fill="white"/>
                </svg>
                </button>
                <button className='btn'>Добавить фильтр +</button>
                </div>
                <div>
                    <table>
                     <thead>
                       <tr>
                         <td className='td td-main'>login</td>
                         <td className='td td-main'>id</td>
                         <td className='td td-main'>type</td>
                         <td className='td td-main'>site_admin</td>
                         <td className='td td-main'>Nickname</td>
                         <td className='td td-main'>Место работы</td>
                         <td className='td td-main'>Местонахождение</td>
                         <td className='td td-main'>email</td>
                         <td className='td td-main'>public_repos</td>
                         <td className='td td-main'>public_gists</td>
                         <td className='td td-main'>Подписчики</td>
                         <td className='td td-main'>Пописан на</td>
                       </tr>
                    </thead>
                    <tbody>
                       {users.map((user)=>{
            return <tr key={user.id}>
            <td className='td '>{user.login}</td>
            <td className='td '>{user.id}</td>
           <td className='td '>{user.type}</td>
           <td className='td '>{user.site_admin}</td>
           <td className='td '>{user.name}</td>
           <td className='td '>{user.company}</td>
           <td className='td '>{user.location}</td>
           <td className='td '>{user.email}</td>
           <td className='td '>{user.public_repos}</td>
           <td className='td '>{user.public_gists}</td>
           <td className='td '>{user.followers}</td>
           <td className='td '>{user.following}</td>
     </tr>;
    })}
                     </tbody>
                    </table>

                </div>
                </div>
            </div>
        </div>
    )
}
export default CommunityPage;