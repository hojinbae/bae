import React, { useState, useEffect, useRef } from "react";
import styles from './PJmain.module.css';
import SimpleSlider from "./SimpleSliderMain";
import axios from "axios";
import SearchWordChart from "./SearchWordChart";
import AgeChart from "./AgeChart";


const PJmain = () => {
    const items = [

    ];
    // let [itemNumber,setItemNumber] = useState(0);

    for(var i =0; i < 10; i++){
        items.push( { id: i, url: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=82d75629-ca89-4d4d-85b9-5e8dae133e20&mode=raw',main:'소희왕자 진자 멋있다',text:'특별한 체험이 있는 서울 고궁 야간개장',text1:'자세히 보기' })
        items.push( { id: i, url: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=cb5ab904-aa43-45c2-a5fe-ff79102b1cf7&mode=raw',main:'데뷔 단체 사진',text:'특별한 체험이 있는 서울 고궁 야간개장',text1:'자세히 보기' })
        items.push( { id: i, url: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=03701c87-65be-4ec7-b039-50a9c9bda2e7&mode=raw',main:'LOVE119' ,text:'특별한 체험이 있는 서울 고궁 야간개장',text1:'자세히 보기'  })
        items.push( { id: i, url: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=7f000536-86d0-4a58-8aca-c65e2b97f32c&mode=raw',main:'LOVE119' ,text:'특별한 체험이 있는 서울 고궁 야간개장',text1:'자세히 보기'  })
        items.push( { id: i, url: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=9cf52ccf-0692-4854-81a2-6c87f8a6d6f5&mode=raw',main:'LOVE119' ,text:'특별한 체험이 있는 서울 고궁 야간개장',text1:'자세히 보기'  })
        items.push( { id: i, url: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=a310b6d9-a396-419b-9534-8aa6efe30f2c&mode=raw',main:'LOVE119' ,text:'특별한 체험이 있는 서울 고궁 야간개장',text1:'자세히 보기'  })

    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(100);
    const intervalRef = useRef();


    const weatherIcons = {

        '01d': 'clear-sky-day.png',
        '01n': 'clear-sky-night.png',
        '02d': 'few-clouds-day.png',
        '02n': 'few-clouds-night.png',
        '03d': 'scattered-clouds.png',
        '03n': 'scattered-clouds.png',
        '04d': 'broken-clouds.png',
        '04n': 'broken-clouds.png',
        '09d': 'shower-rain.png',
        '09n': 'shower-rain.png',
        '10d': 'rain-day.png',
        '10n': 'rain-night.png',
        '11d': 'thunderstorm.png',
        '11n': 'thunderstorm.png',
        '13d': 'snow.png',
        '13n': 'snow.png',
        '50d': 'mist.png',
        '50n': 'mist.png'
    };

    const locKorea=[
        {loc:'서울',lat:37.566330,lon:126.978451},{loc:'경기',lat:37.289052,lon:127.053697},{loc:'강원도',lat:37.884856,lon:127.729701},{loc:'충청남도',lat:36.658627,lon:126.673915},
        {loc:'충청북도',lat:36.635508,lon:127.491323},{loc:'서울',lat:31.2212,lon:123.212},{loc:'경상북도',lat:36.575947,lon:128.505889},{loc:'경상남도',lat:35.238099,lon:128.691418},
        {loc:'전라북도',lat:31.2212,lon:123.212},{loc:'전라남도',lat:31.2212,lon:123.212},{loc:'제주도',lat:31.2212,lon:123.212}
    ]
    let COUNT_LOC = locKorea.length;


    const getCurrentLocation = ()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = 0;
            let lon = 0;
            let locPo = '';
            if(COUNT_LOC === locKorea.length) {

                COUNT_LOC = 0;
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                locPo = '현재위치'
            }else{

                lat = locKorea[COUNT_LOC].lat
                lon = locKorea[COUNT_LOC].lon
                locPo = locKorea[COUNT_LOC].loc
                COUNT_LOC ++;
            }

            // console.log('현재 위치는 ::: ', lat, lon);
            getWeatherByCurrentLocation(lat,lon,locPo);

        })
    }
    // getCurrentLocation()
    const getWeatherByCurrentLocation = async (lat, lon, locPo)=>{
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e4da173a465467c2fe1afdf007ebb1f8&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        displayWeeklyWeather(data,locPo);
        // setWeather(data);
        // console.log("현재날씨는?", data);
    }

    // function fahrenheitToCelsius(fahrenheit) {
    //     console.log(fahrenheit)
    //     return fahrenheit - 273.15;
    // }

    function displayWeeklyWeather(data,locPo) {
        const weeklyForecast = document.querySelector('.weekly-forecast');
        const children = weeklyForecast.querySelectorAll('*');
        children.forEach(child => {
            child.remove();
        });
        const dailyForecasts = data.list.filter((item, index) => index % 4 === 0); // 각 날짜의 첫번째 예보만 선택

        // dailyForecasts.forEach(forecast => {
        for(let i = 0; i < dailyForecasts.length-1; i++){

            let forecast = dailyForecasts[i];
            const date = new Date(forecast.dt * 1000);
            const hours = date.getHours(); // 시간 가져오기

            const timeOfDay = hours >= 12 ? '오후' : '오전'; // 오전과 오후 구분
            const weather = forecast.weather[0].description;
            const temperatureCelsius = forecast.main.temp;
            // const temperatureFahrenheit = forecast.main.temp;
            // const temperatureCelsius = fahrenheitToCelsius(temperatureFahrenheit); // 화씨를 섭씨로 변환
            const iconCode = forecast.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');


            const weatherIcon = document.createElement('img');
            weatherIcon.src = iconUrl;
            weatherIcon.alt = '날씨 아이콘';


            // console.log(forecastItem)
            if(hours>=12) {
                if(i === 0){
                    forecastItem.innerHTML = ` <h4 style="color:black"><strong>${locPo}</strong></h4><br/></strong></h4><strong>오늘</strong>`;
                    forecastItem.appendChild(weatherIcon);
                    forecastItem.innerHTML += `<br/>  ${temperatureCelsius.toFixed(1)}℃`;
                }else{
                    forecastItem.innerHTML = `${timeOfDay}<br/>`
                    forecastItem.appendChild(weatherIcon);
                    forecastItem.innerHTML += `<br/>  ${temperatureCelsius.toFixed(1)}℃`;
                    forecastItem.style.display="inline-block";
                }

            }else{

                forecastItem.innerHTML = `<strong>${date.toLocaleDateString().split(".")[2]}일<br/></strong> ${timeOfDay}<br/>`
                forecastItem.appendChild(weatherIcon);
                forecastItem.innerHTML += `<br/> ${temperatureCelsius.toFixed(1)}℃`;

                forecastItem.style.display="inline-block";
            }


            weeklyForecast.appendChild(forecastItem);
        }
    }

    useEffect(() => {
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
        },1000);

        return () => {
            clearInterval(intervalRef.current);
            clearInterval(progressInterval);
            clearTimeout(timer);
        };
    }, [items.length]);


    return (
        <div className={styles.basics}>

            <div className={styles.banner}>
                <div className={styles.banner_letter}>
                    <button
                        onClick={() => setCurrentIndex(currentIndex => (currentIndex - 1 + items.length) % items.length)}
                        className={styles.controlBtn}>&lt;</button>
                    <div className={styles.banner_letter_text}>
                        <div className={styles.mainText}>{items[currentIndex].main}</div>
                        <div className={styles.additionalText}>{items[currentIndex].text}</div>
                        <button onClick={() => alert("자세히 보기")} className={styles.linkText}>
                            {items[currentIndex].text1}
                        </button>
                    </div>
                    <button onClick={() => setCurrentIndex(currentIndex => (currentIndex + 1) % items.length)}
                            className={styles.controlBtn}>&gt;</button>
                </div>
                <div className={styles.banner_img}>
                    <SimpleSlider myProp={items} currentIndex={currentIndex}/>

                </div>
            </div>
            <div className={styles.btnAuto}>
            </div>

            {/* <!-- ================================ 추천 / 날씨 =============================== --> */}

            <div id="resume" style={{backgroundColor:"#f1efe9"}}>

                        <div className="container">

                            <div className="row love-row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="exp-details" data-wow-delay=".2s">
                                        <div className="exp-hover"></div>
                                        <div className="exp-main">
                                            <i
                                                className="fa fa-building exp-icon"
                                                aria-hidden="true"
                                            ></i>
                                            <h3>
                                                <a
                                                    href="https://patelgtech.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ color: "#4d4d4d" }}
                                                >
                                                    Patel G Tech LLP
                                                </a>
                                            </h3>
                                            <h4>Repub Member</h4>
                                            <h2>2019-2020</h2>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>
                                                I did an internship at PATEL G TECH LLP as a
                                                Republication Team Member
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ================================ 날씨 =============================== --> */}
                                <div className="col-md-6 col-sm-12">
                                    <div className="exp-details" data-wow-delay=".3s">
                                        <div className="exp-hover"></div>
                                        <div className="exp-main">
                                            <div className="weekly-forecast">
                                                <SearchWordChart />
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ================================ 날씨 =============================== --> */}


                            </div>
                        </div>

            </div>

            {/* <!-- ================================ 추천 / 날씨 =============================== --> */}


            <div className={styles.popular}>
                <div className={styles.popular_title_container}>
                    <div className={styles.popular_main_title}>인기 게시글</div>
                    <div className={styles.popular_sub_title}>오늘 가장 핫한 게시글을 확인해보세요!</div>
                </div>
                <div className={styles.popular_boxes_container}>
                    <div className={styles.popular_box}>첫 번째 박스</div>
                    <div className={styles.popular_box}>두 번째 박스</div>
                    <div className={styles.popular_box}>세 번째 박스</div>
                    <div className={styles.popular_box}>네 번째 박스</div>
                </div>
            </div>
            <div className={styles.insta}>인스타추천</div>
        </div>

    )
}

export default PJmain;
