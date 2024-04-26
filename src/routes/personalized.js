import React, {useState, useEffect, useRef } from "react";
import styles from './personalized.module.css';
// import SimpleSlider from "./SimpleSliderPersonalized";
import axios from "axios";
import  {useNavigate, useParams} from "react-router-dom";
 function Personalized(props) {
    const navigate = useNavigate();



    return (
        <div className={styles.mainContainer} >

            <div className={styles.recommend}>
                <div className={styles.recommend_title_container}>
                    <div className={styles.recommend_main_title}> GARAGE 추천 축제</div>
                    <div className={styles.recommend_sub_title}> GARAGE에서 추천하는 축제입니다.</div>
                </div>
                <div className={styles.recommend_button_container}>
                    <div className={styles.recommend_button}><button> 계절 </button></div>
                    <div className={styles.recommend_button}><button> 지역 </button></div>
                    <div className={styles.recommend_button}><button> 세트 </button></div>
                </div>
                <div className={styles.recommend_boxes_container}>
                    <div className={styles.recommend_box}>첫 번째 박스</div>
                    <div className={styles.recommend_box}>두 번째 박스</div>
                    <div className={styles.recommend_box}>세 번째 박스</div>
                </div>
            </div>

            <div className={styles.custom}>
                <div className={styles.custom_title_container}>
                    <div className={styles.custom_title}>맞춤 여행지</div>
                    <div className={styles.custom_sub_title}>성향에 따른 맞춤형 여행지를 추천해 드립니다.</div>
                    <div className={styles.custom_button}><button> 다시 추천 받기 </button></div>
                </div>
                <div className={styles.custom_boxes_container}>
                    <div className={styles.custom_box}>랜덤 박스 1</div>
                    <div className={styles.custom_box}>랜덤 박스 2</div>
                    <div className={styles.custom_box}>랜덤 박스 3</div>
                    <div className={styles.custom_box}>랜덤 박스 4</div>
                </div>
            </div>

            <div className={styles.chart}>
                <div className={styles.traffic_chart_title_container}>
                    교통별 차트
                    <div className={styles.traffic_chart}>
                       차트1
                    </div>
                </div>
                <div className={styles.search_chart_title_container}>
                    연령별 검색량 차트
                    <div className={styles.search_chart}>
                        차트2
                    </div>
                </div>
            </div>
        </div>
    )
 }

export default Personalized;