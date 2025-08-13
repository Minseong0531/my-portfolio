import { useEffect, useLayoutEffect, useRef } from "react";
import { projectText } from "../utils/textdata";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import "./Project.css";

function Project({ isMobile }) {
  const horizontalRef = useRef(null);
  const sectionRef = useRef([]);

  const setSectionRef = (index) => (el) => {
    if (el) {
      sectionRef.current[index] = el;
    } else {
      sectionRef.current.splice(index, 1);
    }
  };

  // 새로고침 시 스크롤 최상단 고정
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    if (!horizontal) return;

    // 모바일 모드면 애니메이션 해제 후 리턴
    if (isMobile) {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.set(sectionRef.current.filter(Boolean), { clearProps: "all" });
      return;
    }

    // 모든 이미지가 로드될 때까지 대기
    const images = horizontal.querySelectorAll("img");
    const loadImages = Array.from(images).map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }
        })
    );

    Promise.all(loadImages).then(() => {
      const sections = sectionRef.current.filter(Boolean);
      gsap.set(sections, { clearProps: "all" });

      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontal,
          start: "top 56px",
          end: () => "+=" + horizontal.scrollWidth,
          pin: true,
          scrub: 1,
          markers: false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          refreshPriority: 1,
        },
      });

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);

      // 클린업 함수 반환
      return () => {
        scrollTween.kill();
        window.removeEventListener("resize", onResize);
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    });
  }, [isMobile]);

  return (
    <section id="project" className={isMobile ? "mobile" : "desktop"}>
      <div className="innerbox">
        <h2 className="title">
          Portfolio <em>project</em>
        </h2>
        <div className="project_wrap" ref={horizontalRef}>
          {projectText.map((project, index) => (
            <article
              className={`project_item p${index + 1}`}
              key={index}
              ref={setSectionRef(index)}
            >
              <span className="num">{project.num}</span>
              <a href={project.view} target="_blank" className="img" rel="noreferrer noopener">
                <img src={project.img} alt="" />
              </a>
              <h2 className="p-title">{project.title}</h2>
              <p className="desc">{project.desc}</p>
              <a href={project.code} target="_blank" className="pj" rel="noreferrer noopener">
                프로젝트 보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;