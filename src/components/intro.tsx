import React, { useEffect, useRef } from "react";
import "./intro.css";

function Intro() {
    
const dynamicTextRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const dynamicText = dynamicTextRef.current;
        const words = ["Swift Developer", "Frontend Engineer", "Android Developer", "Student", "CEO of MargsGlobal"];
        // Variables to track the position and deletion status of the word
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typeEffect = () => {
      
          if(dynamicText){
              const currentWord = words[wordIndex];
              const currentChar = currentWord.substring(0, charIndex);
              dynamicText.textContent = currentChar;
              dynamicText.classList.add("stop-blinking");
              if (!isDeleting && charIndex < currentWord.length) {
                // If condition is true, type the next character
                charIndex++;
                setTimeout(typeEffect, 200);
              } else if (isDeleting && charIndex > 0) {
                // If condition is true, remove the previous character
                charIndex--;
                setTimeout(typeEffect, 100);
              } else {
                // If word is deleted then switch to the next word
                isDeleting = !isDeleting;
                dynamicText!.classList.remove("stop-blinking");
                wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
                setTimeout(typeEffect, 1200);
              }
          }
          
        };

        typeEffect();
    },[]);
  


  

 
  return (
    <>
      <h1 className="greet">Hola! This is Mohammed Abid Nafi aka Slime!</h1>

        
      <h1 className="typing">
        I'm a <span ref={dynamicTextRef}></span>
      </h1>
      <div className="connect">
        <p>Contact me!</p>
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
