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
                  <div className="education">
                    <div className='edu-wrap'>
                      <div>
                        <p>SBS아카데미학원<span> -웹 퍼블리셔 과정</span></p><p className='term'>2024.12 ~ 2025.08</p>  
                      </div>
                      <p>인천</p>
                    </div>
                    <div className='edu-wrap'>
                      <div>
                        <p>대림대학교<span> -스마트소프트웨어학과</span></p><p className='term'>2018.03 ~ 2023.03</p>  
                      </div>
                      <p>경기</p>
                    </div>
                    <div className='edu-wrap'>
                      <div>
                        <p>공항고등학교<span> -인문계</span></p><p className='term'>2015.03 ~ 2017.12</p>  
                      </div>
                      <p>인천</p>
                    </div>
                </div>
              </div>
            </div>
          </section>
    )
  }
  
  export default About;