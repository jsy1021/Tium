import React, { useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Login.css";


const Login = () => {
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");

  const [button, setButton] = useState(true);

  function ActiveButton() {
    id.includes("@") && pw.length >= 8 ? setButton(false) : setButton(true);
  }
  const navigate=useNavigate();

  const goToMain = () => {
    navigate("/");
    
  };


  const realId = "jangsuyeong923@naver.com";
  const realPw = "12345678";

  

  return (
    <div className="wrapper">
      <div className="login_wrapper">
        <div className="logo">
          <h1 className="logo_img">
            <img src="./img/logo.png" alt="Tium.logo" />
          </h1>
        </div>
        <input
          placeholder="전화번호 사용자 이름 또는 이메일"
          id="id"
          className="login"
          onChange={(e) => {
            setId(e.target.value);
          }}
          onKeyUp={ActiveButton}
          
        />

        <input
          type="password"
          placeholder="비밀번호"
          id="password"
          className="login"
          onChange={(e) => {
            setPw(e.target.value);
          }}
          onKeyUp={ActiveButton}
        />
        <div className="join_wrap">
            <div className="join">
                <Link to={"/join"}>
                    회원가입
                </Link>
            </div>
            
        </div>
        <button
          type="button"
          className="loginButton"
          disabled={button}
          onClick={(e) => {
            if (realId === id) {
              if (realPw === pw) {
                e.stopPropagation();
                goToMain();
              }
            } else {
              alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
            }
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
