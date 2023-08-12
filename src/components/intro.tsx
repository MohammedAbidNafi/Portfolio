import React from "react";
import "./intro.css";

function Intro() {
  return (
    <>
      <div className="typing-effect">
        <a className = "typing">
          <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=40&duration=2500&pause=500&color=1144B3&center=true&vCenter=true&width=435&lines=Swift+Developer;Frontend+Engineer;Android+Developer;Student;CEO+of+MargsGlobal" />
        </a>
      </div>
      <div className="connect">
        <p>Contact me...</p>
        <div className="social-icons">
          <a
            href="mailto:abid.nafi04@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="icons"
          >
            <img
              src="https://img.icons8.com/color/75/000000/gmail.png"
              alt="Gmail"
            />
          </a>
          <a
            href="https://github.com/MohammedAbidNafi"
            target="_blank"
            rel="noreferrer"
            className="icons"
          >
            <img
              src="https://img.icons8.com/?size=75&id=12599&format=png"
              alt="github"
            />
          </a>

          <a
            href="https://www.instagram.com/md_abid_nafi/"
            target="_blank"
            rel="noreferrer"
            className="icons"
          >
            <img
              src="https://img.icons8.com/?size=75&id=32323&format=png"
              alt="instagram"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/margs-global-0239b01b1/"
            target="_blank"
            rel="noreferrer"
            className="icons"
          >
            <img
              src="https://img.icons8.com/color/75/000000/linkedin.png"
              alt="Linkedin"
            />
          </a>

          <a
            href="https://wa.me/919491951924?text="
            target="_blank"
            rel="noreferrer"
            className="icons"
          >
            <img src="https://img.icons8.com/?size=75&id=16713&format=png" />
          </a>

          <a
            href="https://stackoverflow.com/users/13620323/mohammed-abid-nafi"
            target="_blank"
            rel="noreferrer"
            className="icons"
          >
            <img src="https://img.icons8.com/color/75/000000/stackoverflow.png" />
          </a>

          <a
            href="https://www.reddit.com/user/AbidNafi"
            target="_blank"
            rel="noreferrer"
            className="icons"
          >
            <img src="https://img.icons8.com/color/75/000000/reddit.png" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Intro;
