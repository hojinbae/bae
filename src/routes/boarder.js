import {useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import styles from './boarder.module.css';
import axios from "axios";


function Borader(props) {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState({});
    useEffect(()=>{
        axios.get(props.serverURL+'/boardmain',{withCredentials: true})
            .then(res=>{
                console.log(res)
            })
    })
    const toggleExpanded = id => {
        setIsExpanded(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="main-page-content">




            {/* <!-- ============================================== SERVICE ===================================================== --> */}

            <div id="service">
                <div className="service-content">
                    <div className="service-grid text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-title text-center wow fadeIn">
                                        <h3>자유 게시판</h3>
                                        <div className="underline1"></div>
                                        <div className="underline2"></div>
                                        <p>
                                           축제 후기를 올려주세요
                                        </p>
                                    </div>
                                    <button  onClick={()=>{

                                        navigate("/create");
                                    }}>글쓰기</button>
                                </div>
                            </div>
                            <div className="row love-row wow fadeIn">
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s" style={{maxHeight: '25%'}}>
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/design-development.jpg"
                                                alt="design-development"
                                            />
                                        </div>
                                        <div className="service-bottom">

                                            <h3>Design + Development</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                            <a onClick={() => toggleExpanded(1)}>
                                                {isExpanded[1] ? '접기' : '더보기'}
                                            </a>
                                            <h6>작성자 : abc</h6>
                                            <h6>좋아요 : like</h6>
                                            </div>

                                            <p style={{
                                                maxHeight: isExpanded[1] ? 'none' : '100px',
                                                overflow: 'hidden',
                                                textAlign: 'center',
                                                marginLeft: 0
                                            }}>
                                                Looking to improve your page performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.


                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s" style={{maxHeight: '25%'}}>
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/design-development.jpg"
                                                alt="design-development"
                                            />
                                        </div>
                                        <div className="service-bottom">

                                            <h3>Design + Development</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                                <a onClick={() => toggleExpanded(1)}>
                                                    {isExpanded[1] ? '접기' : '더보기'}
                                                </a>
                                                <h6>작성자 : abc</h6>
                                                <h6>좋아요 : like</h6>
                                            </div>

                                            <p style={{
                                                maxHeight: isExpanded[1] ? 'none' : '100px',
                                                overflow: 'hidden',
                                                textAlign: 'center',
                                                marginLeft: 0
                                            }}>
                                                Looking to improve your page performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.


                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s" style={{maxHeight: '25%'}}>
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/design-development.jpg"
                                                alt="design-development"
                                            />
                                        </div>
                                        <div className="service-bottom">

                                            <h3>Design + Development</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                                <a onClick={() => toggleExpanded(1)}>
                                                    {isExpanded[1] ? '접기' : '더보기'}
                                                </a>
                                                <h6>작성자 : abc</h6>
                                                <h6>좋아요 : like</h6>
                                            </div>

                                            <p style={{
                                                maxHeight: isExpanded[1] ? 'none' : '100px',
                                                overflow: 'hidden',
                                                textAlign: 'center',
                                                marginLeft: 0
                                            }}>
                                                Looking to improve your page performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.


                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s" style={{maxHeight: '25%'}}>
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/design-development.jpg"
                                                alt="design-development"
                                            />
                                        </div>
                                        <div className="service-bottom">

                                            <h3>Design + Development</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                                <a onClick={() => toggleExpanded(1)}>
                                                    {isExpanded[1] ? '접기' : '더보기'}
                                                </a>
                                                <h6>작성자 : abc</h6>
                                                <h6>좋아요 : like</h6>
                                            </div>

                                            <p style={{
                                                maxHeight: isExpanded[1] ? 'none' : '100px',
                                                overflow: 'hidden',
                                                textAlign: 'center',
                                                marginLeft: 0
                                            }}>
                                                Looking to improve your page performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.


                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s" style={{maxHeight: '25%'}}>
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/design-development.jpg"
                                                alt="design-development"
                                            />
                                        </div>
                                        <div className="service-bottom">

                                            <h3>Design + Development</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                                <a onClick={() => toggleExpanded(1)}>
                                                    {isExpanded[1] ? '접기' : '더보기'}
                                                </a>
                                                <h6>작성자 : abc</h6>
                                                <h6>좋아요 : like</h6>
                                            </div>

                                            <p style={{
                                                maxHeight: isExpanded[1] ? 'none' : '100px',
                                                overflow: 'hidden',
                                                textAlign: 'center',
                                                marginLeft: 0
                                            }}>
                                                Looking to improve your page performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.


                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s" style={{maxHeight: '25%'}}>
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/design-development.jpg"
                                                alt="design-development"
                                            />
                                        </div>
                                        <div className="service-bottom">

                                            <h3>Design + Development</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                                <a onClick={() => toggleExpanded(1)}>
                                                    {isExpanded[1] ? '접기' : '더보기'}
                                                </a>
                                                <h6>작성자 : abc</h6>
                                                <h6>좋아요 : like</h6>
                                            </div>

                                            <p style={{
                                                maxHeight: isExpanded[1] ? 'none' : '100px',
                                                overflow: 'hidden',
                                                textAlign: 'center',
                                                marginLeft: 0
                                            }}>
                                                Looking to improve your page performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.


                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s" style={{maxHeight: '25%'}}>
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/design-development.jpg"
                                                alt="design-development"
                                            />
                                        </div>
                                        <div className="service-bottom">

                                            <h3>Design + Development</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                                <a onClick={() => toggleExpanded(1)}>
                                                    {isExpanded[1] ? '접기' : '더보기'}
                                                </a>
                                                <h6>작성자 : abc</h6>
                                                <h6>좋아요 : like</h6>
                                            </div>

                                            <p style={{
                                                maxHeight: isExpanded[1] ? 'none' : '100px',
                                                overflow: 'hidden',
                                                textAlign: 'center',
                                                marginLeft: 0
                                            }}>
                                                Looking to improve your page performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.Looking to improve your page
                                                performance, SEO, or user
                                                experience? Request a free site audit.


                                            </p>

                                        </div>
                                    </div>
                                </div>



                            </div>


                        </div>
                    </div>


                </div>
            </div>

            {/* <!-- ================================ BLOG ========================== --> */}


            {/* <!-- ================================ CONTACT ========================== --> */}


        </div>
    )
}

export default Borader;