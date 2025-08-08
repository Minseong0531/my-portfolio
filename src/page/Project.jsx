import { siteText } from "../utils/textdata";
import './Project.css'

function Project(){
    return(
        <section id="project">
            <div className="innerbox">
                <h2 className="project_title title">
                    Project <em>my work's</em>
                </h2>
                <div className="project_wrap">
                    {
                        siteText.map((site,index)=>(
                            <article className={`project_item s${index+1}`} key={index}>
                                <span className="num">{index+1}</span>
                                <div className="text">
                                    <div>{ site.text[0] }</div>
                                    <div>{ site.text[1] }</div>
                                    <div>{ site.text[2] }</div>
                                </div>
                                <h3 className="project-title">{ site.title }</h3>
                                <div className="btn">
                                    <a href={site.code}> Code View </a>
                                    <a href={site.view}> Site View </a>
                                </div>
                                <div className="info">
                                    <span> { site.info[0] } </span>
                                    <span> { site.info[1] } </span>
                                    <span> { site.info[2] } </span>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Project;