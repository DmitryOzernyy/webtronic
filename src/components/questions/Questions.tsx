import qusetion_img from "../../styles/img/question_symbol.png"
import icon_plus from "../../styles/img/svg/icon_+.svg"
import icon_minus from "../../styles/img/svg/icon_-.svg"

const Questions: React.FC = () => {
    return (
        <section className="questions">
            <div className="wrapper">
                <h2 className="questions__title">Frequently Asked Questions</h2>
                <div className="wrapper__questions">
                    <div>
                        <p className="subtitle__questions">
                            Do you have any kind of questions?<br/>We are here to help.
                        </p>
                        <img src={qusetion_img} className="qeustion__symbol" alt="" />
                    </div>

                    <div className="wrapper__question__block">
                        <div className="qeustion__underblock under__block__gradient question__underblock1 question__underblock__open">
                            <div className="question__block question__block1 question__block__open">
                                <h4 className="question__block__title">What is the price?</h4>
                                <img src={icon_plus} alt="" />
                                <p className="question__block__subtitle">Front-end engineers work
                                    closely with designers to make websites beautiful,
                                    functional, and fast. This Career Path will teach you not
                                    only the necessary languages and technologies, but how to
                                    think like a front-end engineer, too.
                                </p>
                            </div>
                        </div>
                        <div className="qeustion__underblock under__block__gradient question__underblock1 question__underblock__close">
                            <div className="question__block question__block1 question__block__close">
                                <h4 className="question__block__title">What is the price?</h4>
                                <img src={icon_minus} alt="" />
                                <p className="question__block__subtitle">Front-end engineers work
                                    closely with designers to make websites beautiful,
                                    functional, and fast. This Career Path will teach you not
                                    only the necessary languages and technologies, but how to
                                    think like a front-end engineer, too.
                                </p>
                            </div>
                        </div>
                        <div className="qeustion__underblock under__block__gradient question__underblock1 question__underblock__close">
                            <div className="question__block question__block1 question__block__close">
                                <h4 className="question__block__title">What is the price?</h4>
                                <img src={icon_minus} alt="" />
                                <p className="question__block__subtitle">Front-end engineers work
                                    closely with designers to make websites beautiful,
                                    functional, and fast. This Career Path will teach you not
                                    only the necessary languages and technologies, but how to
                                    think like a front-end engineer, too.
                                </p>
                            </div>
                        </div>
                        <div className="qeustion__underblock under__block__gradient question__underblock1 question__underblock__close">
                            <div className="question__block question__block1 question__block__close">
                                <h4 className="question__block__title">What is the price?</h4>
                                <img src={icon_minus} alt="" />
                                <p className="question__block__subtitle">Front-end engineers work
                                    closely with designers to make websites beautiful,
                                    functional, and fast. This Career Path will teach you not
                                    only the necessary languages and technologies, but how to
                                    think like a front-end engineer, too.
                                </p>
                            </div>
                        </div>
                        <div className="qeustion__underblock under__block__gradient question__underblock1 question__underblock__close">
                            <div className="question__block question__block1 question__block__close">
                                <h4 className="question__block__title">What is the price?</h4>
                                <img src={icon_minus} alt="" /> 
                                <p className="question__block__subtitle">Front-end engineers work
                                    closely with designers to make websites beautiful,
                                    functional, and fast. This Career Path will teach you not
                                    only the necessary languages and technologies, but how to
                                    think like a front-end engineer, too.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions;