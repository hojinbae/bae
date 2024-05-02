/* global csvData */
// import csvData from "../../data/events.csv";
// import csvData from "../../data/festivals.csv";
import React, {useState, useEffect, useRef } from "react";
import styles from './personalized.module.css';
// import SimpleSlider from "./SimpleSliderPersonalized";
import axios from "axios";
import  {useNavigate, useParams} from "react-router-dom";
import TrafficChart from "./TrafficChart";
import AgeChart from "./AgeChart";
import SearchWordChart from "./SearchWordChart";


function Personalized(props) {
    const navigate = useNavigate();

    const [scvData, setCsvData] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            // 파일 내용을 읽어와서 상태에 설정
            setCsvData(e.target.result);
        };
        reader.readAsText(file);
    };


    // 각 버튼에 대한 박스 내용을 배열로 저장합니다.
    const boxContentsByButton = {
        "계절": ["https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=dc70d9dd-14f1-43bd-be08-eba2a487d943",
            "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=c9ab6325-1057-4849-ab5f-e8e0d647a115",
            "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=f39cd6e4-6478-4266-935a-3994e3616ce6"],
        "지역": ["https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=e91073f2-4e1e-41ca-bc95-22a7c1745038",
            "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=1a9403fc-ffc8-4b74-a326-a5e95b5ea194",
            "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=2684e8ed-23f0-4b75-8315-917f82213b72"],
        "세트": ["https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=98fc90c1-616b-4077-b4e5-42226d6cda7d",
            "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=8b735795-abd9-4a05-8ad0-2c5146143d33",
            "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=c635c3c1-cbbe-410c-9f80-fd285b38e6cb"]
    };

    // 현재 선택된 버튼과 박스 내용을 관리합니다.
    const [currentButton, setCurrentButton] = useState("계절");
    const [currentBoxContents, setCurrentBoxContents] = useState(boxContentsByButton["계절"]);

    // 버튼 클릭 이벤트 핸들러
    const handleButtonClick = (buttonName) => {
        setCurrentButton(buttonName);
        setCurrentBoxContents(boxContentsByButton[buttonName]);

    };

    // 각 랜덤 박스에 대한 이미지 배열
    const randomBoxImages = [
        "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=fa19901a-00db-4fc6-ba94-df851994cccc",
        "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=1229ae98-0815-45d4-8706-291f0d7282ea",
        "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=1b3d7ae2-d966-4ef5-a8c5-914fd897976f",
        "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=b7ba9199-c753-40ad-b8d5-f4838d3369e8",
        "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=e612abda-1147-4b57-92bb-becb935f3503"
    ];

    // 4개의 랜덤 이미지를 선택
    const shuffledImages = randomBoxImages.sort(() => Math.random() - 0.5);
    // const selectedImages = shuffledImages.slice(0, 4);

    // 4개의 랜덤 박스에 대한 이미지 배열
    // const randomBoxImagesSubset = randomBoxImages.slice(0,4);

    // 랜덤 박스의 이미지를 관리하는 상태
    const [boxImages, setBoxImages] = useState(randomBoxImages);

    // "다시 추천 받기" 버튼 클릭 이벤트 핸들러
    const handleReloadImages = () => {
        // 랜덤 이미지 선택을 위해 배열 복사
        const shuffledImages = [...randomBoxImages];
        // 배열 섞기
        for (let i = shuffledImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
        }
        // 처음 4개의 이미지 선택
        const selectedImages = shuffledImages.slice(0, 4);
        // 상태 업데이트
        setBoxImages(selectedImages);
    };

    return (
        <div>
            {/*/!* 파일 선택을 위한 input 엘리먼트 *!/*/}
            {/*<input type="file" onChange={handleFileChange} />*/}
            {/*/!* 파일 내용을 표시하는 부분 *!/*/}
            {/*{csvData !== null&& (*/}
            {/*    <div>*/}
            {/*        <h2>CSV 파일 내용:</h2>*/}
            {/*        <pre>{csvData}</pre>*/}
            {/*    </div>*/}
            {/*)}*/}
            <div className={styles.mainContainer} >

                <div className={styles.recommend}>
                    <div className={styles.recommend_title_container}>
                        <div className={styles.recommend_main_title}> GARAGE 추천 축제</div>
                        <div className={styles.recommend_sub_title}> GARAGE에서 추천하는 축제입니다.</div>
                    </div>
                    <div className={styles.recommend_button_container}>
                        {/* 버튼들에 대한 매핑과 클릭 이벤트 핸들링을 설정합니다. */}
                        {Object.keys(boxContentsByButton).map(buttonName => (
                            <div key={buttonName} className={styles.recommend_button_div}>
                                <button className={styles.recommend_button} onClick={() => handleButtonClick(buttonName)}>{buttonName}</button>
                            </div>
                        ))}
                    </div>
                    <div className={styles.recommend_boxes_container}>
                        {/* 현재 선택된 버튼에 따라 박스 내용을 출력합니다. */}
                        {currentBoxContents.map((content, index) => (
                            <div key={index} className={styles.recommend_box}>
                                <img src={content} alt={`Box ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.custom}>
                    <div className={styles.custom_title_container}>
                        <div className={styles.custom_title}>맞춤 여행지</div>
                        <div className={styles.custom_sub_title}>성향에 따른 맞춤형 여행지를 추천해 드립니다.</div>
                        <div>
                            <div className={styles.custom_button_div}>
                                <button className={styles.custom_button} onClick={handleReloadImages} > 다시 추천 받기 </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.custom_boxes_container}>
                        {/* 랜덤 박스 이미지 표시 */}
                        {boxImages.map((image, index) => ( // selectedImages 대신 boxImages 사용
                            <div key={index} className={styles.custom_box}>
                                <img src={image} alt={`Random Box ${index + 1 }`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.chart}>
                    <div className={styles.traffic_chart_title_container}>
                        <div className={styles.traffic_chart}>
                            <TrafficChart/>
                        </div>
                    </div>
                    <div className={styles.search_chart_title_container}>
                        <div className={styles.search_chart}>
                            <AgeChart/>
                        </div>
                    </div>
                    <div className={styles.search_chart_title_container}>
                        <div className={styles.search_chart}>
                            <SearchWordChart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personalized;