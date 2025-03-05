import React,{useState} from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ?"qualification__button qualification__active button--flex":"qualification__button button--flex "}
          onClick={() => toggleTab(1)}
          
          >
            <i className="uili uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={toggleState === 2?"qualification__button qualification__active button--flex":"qualification__button button--flex "}
           onClick={() => toggleTab(2)}
          >
            <i className="uili uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState=== 1 ? "qualification__content qualification__content-active":"qualification__content "}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Information security</h3>
                <span className="qualification__subtitle">
                  India - Vellore Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i class="bx bxs-calendar"></i>
                  2025 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Computer Engineering</h3>
                <span className="qualification__subtitle">
                  India - Vellore Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i class="bx bxs-calendar"></i>
                  2021 - 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  Nepal - Tillotama
                </span>
                <div className="qualification__calender">
                  <i class="bx bxs-calendar"></i>
                  2019 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">apc</h3>
                <span className="qualification__subtitle">
                  India - Vellore Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i class="bx bxs-calendar"></i>
                  2021 - 2025
                </div>
              </div>
            </div> */}
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active":"qualification__content "}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">xxxx</h3>
                <span className="qualification__subtitle">
                  India - Vellore Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i class="bx bxs-calendar"></i>
                  2025 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">xxxx</h3>
                <span className="qualification__subtitle">
                  India - Vellore Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i class="bx bxs-calendar"></i>
                  2021 - 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">xxxx</h3>
                <span className="qualification__subtitle">
                  India - Vellore Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i class="bx bxs-calendar"></i>
                  2025 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Qualification;
