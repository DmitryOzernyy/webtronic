import left_line_img from "../../styles/img/svg/about_lines/left_line.svg"
import center_line_img from "../../styles/img/svg/about_lines/center_line.svg"
import right_line_img from "../../styles/img/svg/about_lines/right_line.svg"
import mentor_1_img from "../../styles/img/mentors/mentor_1.png"
import mentor_2_img from "../../styles/img/mentors/mentor_2.png"
import mentor_3_img from "../../styles/img/mentors/mentor_3.png"
import front_img from "../../styles/img/svg/front_end.svg"

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="wrapper">
                <h2 className="about__title">About Us</h2>
                <div className="about__wrapper">

                    <div className="mentors__wrapper">
                        <h3 className="about__subtitle">
                            Mentors
                        </h3>

                        <div className="lines__wrapper">
                            <img src={left_line_img} alt="" className="about__line__left" />
                            <img src={center_line_img} alt="" className="about__line__center" />
                            <img src={right_line_img} alt="" className="about__line__right" />
                        </div>
                        <div className="about__mentors__portfolio">
                            <div className="mentor__gradient under__block__gradient">
                                <div className="mentor__1">
                                    <img src={mentor_1_img} alt="" className="mentor__photo" />
                                    <h4 className="mentor__name">Wade Warren</h4>
                                    <span className="mentor__title">Front-end engineers work closely with designers</span>
                                </div>
                            </div>
                            <div className="mentor__gradient under__block__gradient mentor__gradient__center">
                                <div className="mentor__2">
                                    <img src={mentor_2_img} alt="" className="mentor__photo" />
                                    <h4 className="mentor__name">Kristin Watson</h4>
                                    <span className="mentor__title">Front-end engineers work closely with designers</span>
                                </div>
                            </div>
                            <div className="mentor__gradient under__block__gradient">
                                <div className="mentor__3">
                                    <img src={mentor_3_img} alt="" className="mentor__photo" />
                                    <h4 className="mentor__name">Robert Fox</h4>
                                    <span className="mentor__title">Front-end engineers work closely with designers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__subtitle__wrapper">
                        <p className="about__subtitle__2">
                            Front-end engineers work closely with designers to make websites beautiful, functional, and
                            fast. This Career Path will teach you not only the necessary languages and technologies, but
                            how
                            to think like a front-end engineer, too.
                        </p>
                        <img src={front_img} alt="" className="about__front" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;