import './About.css'
function About() {

    return (
          <section id="about">
            <div className="innerbox">
              <h2 className="about-title title">
                ABOUT ME <em>MY STORY</em>
              </h2>
              <div className="contents-wrap">
                  <img src="./image/profile.jpg" alt="프로필 이미지" />
                  <strong>MINSEONG <span>YEON!</span></strong>
                  <p className='address'>
                    <span>Tel : 010-6307-0531</span> | <span>Email : rtc453@naver.com</span> | <span>Address : 인천광역시 계양구</span>
                  </p>
                  <p className='info-text'>안녕하세요! :&#41; 꿈을 꾸는 프론트엔드 개발자 연민성입니다.</p>
              </div>
            </div>
          </section>
    )
  }
  
  export default About;