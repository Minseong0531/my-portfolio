import { skillStacks } from '../utils/textdata';
import './Skill.css';

function Skill() {

    return (
      <section id="skill">
            <div className="innerbox">
                  <h2 className="skill-title title">
                        Skill <em>MY STORY</em>
                  </h2>
                  <div className="stacks">
                        {skillStacks.map((stackGroup) => (
                              <div key={stackGroup.category} className='stacks-wrap'>
                                    <h3>{stackGroup.category.toUpperCase()}</h3>
                                    <div className='skill-items'>
                                          {stackGroup.skills.map((skill)=>(
                                                <div key={skill.title} className='skill-item'>
                                                      <img src={skill.src} alt={skill.title} />
                                                      <p>{skill.title}</p>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        ))

                        }
                  </div>
            </div>
      </section>
    )
  }
  
  export default Skill;