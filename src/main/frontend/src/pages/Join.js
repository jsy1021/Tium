import React, {useState} from 'react';
import { useNavigate }from 'react-router-dom';
import "./Join.css";

const Join = () => {

    let [email, setEmail]=useState("");
    let [checkEmail, setCheckEmail]=useState("");
    let [pw, setPw]=useState("");
    let [checkPw, setCheckPw]=useState("");
    let [name,setName]=useState("");

    const [button, setButton]=useState(true);


    return (
        <div className="wrapper">
            <div className="header">
                <h1 className="logo">
                    <img src="./img/logo.png" alt="Tium.logo" />
                </h1>
            </div>
            <div className="joinWrapper">
                 <form className="join" action="/">
                       <field-set>
                            <input
                                type="text"
                                placeholder="이름을 입력해주세요."
                                id="name"
                                className="name"/>
                            <input
                                type="text"
                                placeholder="이메일을 입력해주세요."
                                id="Email"
                                className="Email"/>
                            <input
                                type="text"
                                placeholder="이메일을 다시 입력해주세요."
                                id="checkEmail"
                                className="Email"/>

                            <input
                                type="password"
                                placeholder="비밀번호를 입력해주세요."
                                id="pw"
                                className="pw"/>
                            <input
                                type="password"
                                placeholder="비밀번호를 다시 입력해주세요."
                                id="checkPw"
                                className="pw"/>

                            <button type="submit" className="joinBtn">회원가입</button>
                       </field-set>
                 </form>
            </div>
        </div>
    );
};

export default Join;