import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>PRASUNA CHANDRIKA</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" FULL STACK DEVELOPER.", " PROGRAMMER"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards. I am not comfortable with settling, and I am always looking for an opportunity to do better and achieve greatness</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>STRENTHENS IN ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    {/* <i class='fab fa-facebook-f'></i> */}
                    <span>Flexbility</span>
                  </button>
                  <button className='btn_shadow'>
                    {/* <i class='fab fa-instagram'></i> */}
                    <span>Communication</span>
                  </button>
                  <button className='btn_shadow' style={{margin:"20px"}}>
                    {/* <i class='fab fa-linkedin-in'></i> */}
                    <span>Self Management</span>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt=''/>
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt=''/>
                </button>
                <button className='btn_shadow' style={{margin:"20px"}}>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' height={800} width={600} style={{paddingTop:"100px"}}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home