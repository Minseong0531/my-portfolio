import { useEffect, useRef } from "react";
import { projectText } from "../utils/textdata";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import './Project.css';


function Project(){
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);
  
    useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const horizontal = horizontalRef.current;  /* <section ref={horizontalRef}>*/
    const sections = sectionRef.current;      /* ref={(e)=>{ sectionRef.current[index]=e }} */
    let scrollTween = gsap.to( sections, {
      xPercent:-100*(sections.length-1), // 섹션 개수만큼 x축 이동 비율 설정
      ease:"none",
      scrollTrigger:{
        trigger:horizontal, //트리거 기준 설정
        start:"top 56px",
        end:()=>"+=" + horizontal.scrollWidth, // 스크롤 종료 위치
        pin:true, // 스크롤시 해당요소 고정
        scrub:1,  // 스크롤, 애니메이션 동기화
        markers:false,
        invalidateOnRefresh:true, // 새로고침 애니메이션 무효화
        anticipatePin:1,
      }
    })
        return()=>{
            scrollTween.kill();
        }
    },[])
    return(
        <section id="project">
            <div className="innerbox">
                <h2 className="title">
                        Portfolio <em>project</em>
                </h2>
                <div className="project_wrap" ref={horizontalRef}>
                    { projectText.map((project,index)=>(
                        <article className={`project_item p${index+1}`} key={index}
                            ref={(el)=>{sectionRef.current[index] = el }}
                        >
                            <span className="num">{project.num}</span>
                            <a href={project.view} target="_blank" className="img"
                                rel="noreferrer noopener"
                            >
                                <img src={project.img} alt="" />
                            </a>
                            <h2 className="p-title">{project.title}</h2>
                            <p className="desc">{project.desc}</p>
                            <a href={project.code} target="_blank" className="pj">
                                프로젝트 보기
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Project;