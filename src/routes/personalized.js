import React, {useState, useEffect, useRef } from "react";
import styles from './personalized.module.css';
import SimpleSlider from "./SimpleSliderPersonalized";
import axios from "axios";
import  {useNavigate, useParams} from "react-router-dom";
 function Personalized(props) {
    const navigate = useNavigate();

const Personalized = () => {
     const items = [

     ];

     for(var i =0; i<10; i++){
         items.push( { id: i, url:'https://www.mcst.go.kr/attachFiles/cultureInfoCourt/localFestival/notifyFestival/1713487928673.jpg', main:'추천1', text:'맞춤추천1', text1:'자세히 보기' })
         items.push( { id: i, url:'https://www.mcst.go.kr/attachFiles/cultureInfoCourt/localFestival/notifyFestival/1712191981252.jpg', main:'추천2', text:'맞춤추천2', text1:'자세히 보기' })
         items.push( { id: i, url:'https://www.mcst.go.kr/attachFiles/cultureInfoCourt/localFestival/notifyFestival/1710202932037.jpg', main:'추천3', text:'맞춤추천3', text1:'자세히 보기' })
         items.push( { id: i, url:'https://www.mcst.go.kr/attachFiles/cultureInfoCourt/localFestival/notifyFestival/1709165173504.jpg', main:'추천4', text:'맞춤추천4', text1:'자세히 보기' })
         items.push( { id: i, url:'https://www.mcst.go.kr/attachFiles/cultureInfoCourt/localFestival/notifyFestival/1714006754278.png', main:'추천5', text:'맞춤추천5', text1:'자세히 보기' })
         items.push( { id: i, url:'https://www.mcst.go.kr/attachFiles/cultureInfoCourt/localFestival/notifyFestival/1713832023635.jpg', main:'추천6', text:'맟춤추천6', text1:'자세히 보기' })

     }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(100);
    const intervalRef = useRef();

     const locKorea =[
         {loc:'서울',lat:37.566330,lon:126.978451},{loc:'경기',lat:37.289052,lon:127.053697},{loc:'강원도',lat:37.884856,lon:127.729701},{loc:'충청남도',lat:36.658627,lon:126.673915},
         {loc:'충청북도',lat:36.635508,lon:127.491323},{loc:'서울',lat:31.2212,lon:123.212},{loc:'경상북도',lat:36.575947,lon:128.505889},{loc:'경상남도',lat:35.238099,lon:128.691418},
         {loc:'전라북도',lat:31.2212,lon:123.212},{loc:'전라남도',lat:31.2212,lon:123.212},{loc:'제주도',lat:31.2212,lon:123.212}
     ]

     let COUNT_LOC = locKorea.length;

     const getCurrentLocation = ()=>{
         navigator.geolocation.getCurrentPosition( (position) => {
             let lat = 0;
             let lon = 0;
             let locPo = '';
             if(COUNT_LOC === locKorea.length) {

                 COUNT_LOC = 0;
                 lat = position.coords.latitude;
                 lon = position.coords.longitude;
                 locPo = '현재위치'
             } else {

                 lat = locKorea[COUNT_LOC].lat
                 lon = locKorea[COUNT_LOC].lon
                 locPo = locKorea[COUNT_LOC].loc
                 COUNT_LOC ++;
             }

             getWeatherByCurrentLocation(lat,lon,locPo);

         })
     }

     const getWeatherByCurrentLocation = async (lat, lon, locPo) => {
         let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e4da173a465467c2fe1afdf007ebb1f8&units=metric`;
         let response = await fetch(url);
         let data = await response.json();
         displayWeeklyWeather(data,locPo);
     }

     function displayWeeklyWeather(data, locPo){
         const weeklyForecast = document.querySelector('.weekly-forecast');
         const children = weeklyForecast.querySelectorAll('*');
         children.forEach(child => {
             child.remove();
         });
         // const dailyForecasts =
     }

     useEffect(()=> {
         intervalRef.current = setInterval(() => {
             setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
             setProgress(100);
         }, 5000);

         const progressInterval = setInterval(() => {
             setProgress(prevProgress => prevProgress > 0 ? prevProgress - 2 : 0);
         }, 100);
         const timer = setTimeout(() => {
             getCurrentLocation();
             const interval = setInterval(() => {
                 getCurrentLocation();
             }, 100000); // 5초마다 실행
             return () => clearInterval(interval);
         }, 1000);

         return () => {
             clearInterval(intervalRef.current);
             clearInterval(progressInterval);
             clearTimeout(timer);
         };
     },[items.length]);




     }

    return (
        <div className={styles.mainContainer} >
            <div className={styles.title}>
                <h2> GARAGE 추천 축제 </h2>
            </div>
            <div className={styles.firstContainer}>
                <div className={styles.recommend}>
                        <div className={styles.recommendCategory1}>
                            카테고리별 추천(맟춤추천)
                            <div className={styles.recommendCategory1}>
                                {/*추천지역축제콘텐츠*/}
                                {/*<button*/}
                                {/*    // onClick={() => setCurrentIndex(currentIndex => (currentIndex - 1 + items.length) % items.length)}*/}
                                {/*    // className={styles.controlBtn}>&lt;</button>*/}
                                <div className={styles.recommendContent1}>
                                    {/*<div>{items[currentIndex].main}</div>*/}
                                    {/*<div>{items[currentIndex].text}</di|v>*/}
                                    <button> 계절 </button>
                                </div>
                                <div className={styles.recommendContent1}>
                                    <button> 지역 </button>
                                </div>
                                <div className={styles.recommendContent1}>
                                    <button> 세트 </button>
                                </div>
                            </div>
                        </div>
                    {/*<div>*/}
                    {/*    지역 우선*/}
                    {/*    <div className={styles.recommendCategory}>*/}
                    {/*        /!*지역우선콘텐츠*!/*/}
                    {/*            <div className={styles.recommendContent}>*/}
                    {/*                추천1*/}
                    {/*            </div>*/}
                    {/*            <div className={styles.recommendContent}>*/}
                    {/*                추천2*/}
                    {/*            </div>*/}
                    {/*            <div className={styles.recommendContent}>*/}
                    {/*                추천3*/}
                    {/*            </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className={styles.secondContainer}>
                <div className={styles.traffic}>
                    교통량
                    <div className={styles.secondContainerContent}>
                        교통량내용
                    </div>
                </div>
            {/*</div>*/}
            {/*<div className={styles.SearchByAgeContainer}>*/}
                <div className={styles.SearchByAge}>
                    연령별 검색
                    <div className={styles.secondContainerContent}>
                        연령별 검색 내용
                    </div>
                </div>
            </div>
            <div>
            <div className={styles.thirdContainer}>
                여기에 차트
                {/*<div className={styles.RestaurantMain}>*/}
                {/*    인기식당 맞춤*/}
                {/*    <div className={styles.RestaurantCategory}>*/}
                {/*        <div className={styles.RestaurantContent}>*/}
                {/*        주차장 넓은, 꽃 많은 카페*/}
                {/*        </div>*/}
                {/*        <div className={styles.RestaurantContent}>*/}
                {/*            놀이방*/}
                {/*        </div>*/}
                {/*        <div className={styles.RestaurantContent}>*/}
                {/*            가성비*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            </div>








        </div>
    )
}

export default Personalized;