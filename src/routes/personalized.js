import React, {useState, useEffect, useRef } from "react";
import styles from './personalized.module.css';
// import SimpleSlider from "./SimpleSliderPersonalized";
import axios from "axios";
import  {useNavigate, useParams} from "react-router-dom";
 function Personalized(props) {
    const navigate = useNavigate();



    return (
        <div className={styles.mainContainer} >
            <div className={styles.title}>
                <h2> GARAGE 추천 축제 </h2>
            </div>
            <div className={styles.firstContainer}>
                <div className={styles.recommend}>
                        <div className={styles.recommendCategory1}>
                        {/*    카테고리별 추천(맟춤추천)*/}
                            {/*<div className={styles.recommendCategory1}>*/}
                                {/*추천지역축제콘텐츠*/}
                                {/*<button*/}
                                {/*    // onClick={() => setCurrentIndex(currentIndex => (currentIndex - 1 + items.length) % items.length)}*/}
                                {/*    // className={styles.controlBtn}>&lt;</button>*/}
                                <div className={styles.recommendButton}>
                                    {/*<div>{items[currentIndex].main}</div>*/}
                                    {/*<div>{items[currentIndex].text}</di|v>*/}
                                    <button> 계절 </button>
                                </div>
                                <div className={styles.recommendButton}>
                                    <button> 지역 </button>
                                </div>
                                <div className={styles.recommendButton}>
                                    <button> 세트 </button>
                                </div>
                            {/*</div>*/}
                        </div>
                    <div className={styles.recommendCategory2}>
                    {/*    지역 우선*/}
                    {/*    <div className={styles.recommendCategory2}>*/}
                    {/*        /!*지역우선콘텐츠*!/*/}
                                <div className={styles.recommendContent1}>
                                    내용1
                                    {/*<div className={styles.recommendContent2}>*/}
                                    {/*    내용*/}
                                    {/*</div>*/}
                                </div>
                                <div className={styles.recommendContent1}>
                                    내용2
                                    {/*<div className={styles.recommendContent2}>*/}
                                    {/*    내용*/}
                                    {/*</div>*/}
                                </div>
                                <div className={styles.recommendContent1}>
                                    내용3
                                    {/*<div className={styles.recommendContent2}>*/}
                                    {/*    내용*/}
                                    {/*</div>*/}
                                </div>
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div className={styles.secondContainer}>
                {/*<div className={styles.traffic}>*/}
                {/*    교통량*/}
                {/*    <div className={styles.secondContainerContent}>*/}
                {/*        교통량내용*/}
                {/*    </div>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className={styles.SearchByAgeContainer}>*/}
            {/*    <div className={styles.SearchByAge}>*/}
            {/*        연령별 검색*/}
            {/*        <div className={styles.secondContainerContent}>*/}
            {/*            연령별 검색 내용*/}
            {/*        </div>*/}
            {/*    </div>*/}
                <div className={styles.RandomContainer}>
                    <div className={styles.RandomContent}>
                        랜덤1
                    </div>
                    <div className={styles.RandomContent}>
                        랜덤2
                    </div>
                    <div className={styles.RandomContent}>
                        랜덤3
                    </div>
                    <div className={styles.RandomContent}>
                        랜덤4
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