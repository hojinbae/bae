import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import SecondPage from "./routes/secondPage";
import Home from "./routes/home"
import Footer from "./component/Footer";
import Header from "./component/Header";
import Boarder from "./routes/boarder"
import ChatBotPage from "./routes/chatBotPage";
import Login from "./routes/login";
import SignUp from "./routes/signUp"
import RecommendPage from "./routes/recommendPage";
import PJmain from "./routes/pj_main";
import Create from "./routes/create";
import Personalized from "./routes/personalized";


import axios from "axios";
import {useQuery} from "react-query";


function App() {
    // let resultQuery = useQuery('getRegions', ()=>
    //     axios.get('http://localhost:3000/mapPage')
    //         .then((response)=>{
    //             // console.log('서버요청')
    //             // console.log(response.data)
    //             return response.data
    //         })
    // )
    useEffect(() => {
        // if (resultQuery.isSuccess) {
        //     // console.log('여기확인', resultQuery.data.totalPosts);
        // }
        // }, [resultQuery.isSuccess, resultQuery.data]);
    })

    const [showChat, setShowChat] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const [serverURL, setServerURL] = useState('http://192.168.0.21:3000');
    const [imgURL, setImgURL] = useState('http://192.168.0.21:3000/uploads')

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    const openFullScreen = () => {
        setFullScreen(true);
    };

    const closeFullScreen = () => {
        setFullScreen(false);
    };
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [loginId, setLoginId] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [loginId, setLoginId] = useState('admin1');
  return (
      <div className="App">
          {/*<img src={imgURL+'/963a05deee2c1c5a2f599a3a098ac5b8'}></img>*/}
          {/*{resultQuery.isLoading && <div>Loading...</div>}*/}


          {/*{resultQuery.isSuccess && (*/}

          <React.Fragment>
                  {/*{resultQuery.data.mountName}*/}
          <Header serverURL={serverURL} isLoggedIn={isLoggedIn} loginId={loginId} setLoginId={setLoginId} setIsLoggedIn={setIsLoggedIn}/>
          <Routes>
              <Route path={"/home"} element={<PJmain imgURL={imgURL} serverURL={serverURL} isLoggedIn={isLoggedIn} loginId={loginId}/>}/>
              <Route path={"/second"} element={<SecondPage imgURL={imgURL} serverURL={serverURL} isLoggedIn={isLoggedIn} loginId={loginId}/>}/>
              <Route path={"/boarder"} element={<Boarder imgURL={imgURL} serverURL={serverURL} isLoggedIn={isLoggedIn} loginId={loginId}/>}/>
              <Route path={"/login"} element={<Login imgURL={imgURL} serverURL={serverURL} setLoginId={setLoginId} setIsLoggedIn={setIsLoggedIn}/>}/>
              <Route path={"/signup"} element={<SignUp/>}/>
              <Route path={"/recommend"} element={<RecommendPage imgURL={imgURL} serverURL={serverURL} isLoggedIn={isLoggedIn} loginId={loginId}/>}/>
              <Route path={"/create"} element={<Create imgURL={imgURL} serverURL={serverURL} isLoggedIn={isLoggedIn} loginId={loginId}/>}/>
              <Route path={"/personalized"} element={<Personalized imgURL={imgURL} serverURL={serverURL} isLoggedIn={isLoggedIn} loginId={loginId}/>}/>
          </Routes>
          <ChatBotPage/>

          <Footer/>

          </React.Fragment>
          {/*)}*/}




      </div>
  );
}

export default App;
