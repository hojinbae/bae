import React, {useState} from "react";
import styles from './create.module.css';
import axios from "axios";
import  {useNavigate, useParams} from "react-router-dom";
function Create(props) {
    const navigate = useNavigate();

    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleFileChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = async () => {
        const formData = new FormData();

        // 게시글 텍스트를 formData에 추가합니다.
        formData.append('title', title);
        formData.append('content', content);

        // 선택한 각 사진을 formData에 추가합니다.
        images.forEach((file, index) => {
            formData.append(`files`, file);
        });
        // console.log(formData.get('image1'))

        try {
            const response = await axios.post(props.serverURL+'/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },{withCredentials: true});
            navigate('/boarder');

            // 서버에서의 응답 처리
        } catch (error) {
            console.error('Error posting with images:', error);
        }
    };



    return (
        <div>
            <div id="about">
                <div className="about-content">
                    <div className="love-grid text-center">
                        <div className="container">
                            <div className="row" style={{display: 'inline-block'}}>
                                <div className="col-md-12" style={{textAlign: 'center'}}>
                                    <div className="main-title text-center wow fadeIn">
                                        {/* <!-- ================================ LOGIN =============================== --> */}
                                        <form  method="post"
                                              className={`${styles.formDefault} ${styles.formContact}`}>
                                            <div className={styles.formContactWrapper}>
                                                <h1 className="form-default__title">Sign Up Page</h1>

                                                <input name="title" type="text" id="title" value={title}
                                                       onChange={handleTitleChange}
                                                       required placeholder="제목을 입력하세요*"/>
                                                <label htmlFor="contact_message">YOUR MESSAGE*</label>
                                                <textarea value={content} className={styles.textAreaCS} name="contact_message"
                                                          id="contact_message"
                                                          onChange={handleContentChange}
                                                          required></textarea>
                                                <input type="file" accept="image/*" multiple onChange={handleFileChange}/>

                                                <button type={'button'} className={styles.loginBtn} onClick={handleSubmit}>Sign Up
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div id="skill">
                <div className="skill-main">

                    {/* <!-- ================================ 배너 =============================== --> */}

                </div>

            </div>

        </div>
    )
}

export default Create;