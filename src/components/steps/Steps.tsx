import line_img from '../../styles/img/svg/line_step.svg'
import border_img from '../../styles/img/svg/step_border.svg'

const Steps:React.FC = () => {
    return (
        <section className="steps">
            <div className="wrapper">
                <h2 className="steps__title">Steps</h2>
                <div className="steps__wrapper">
                    <div className="steps__left">
                        <div className="border_step_block under__block__gradient">
                            <div className="step__block">
                                <h4 className="step__block__number">Step 1</h4>
                                <h3 className="step__block__title">Introduction to Front-End </h3>
                                <p className="step__block__subtitle">Lorem ipsum dolor sit amet consectetur. Elit massa erat
                                    vitae non semper quis. </p>
                            </div>
                        </div>

                        <div className="border_step_block under__block__gradient">
                            <div className="step__block">
                                <h4 className="step__block__number">Step 2</h4>
                                <h3 className="step__block__title">Introduction to Front-End </h3>
                                <p className="step__block__subtitle">Lorem ipsum dolor sit amet consectetur. Elit massa erat
                                    vitae non semper quis. </p>
                            </div>
                        </div>
                        <div className="border_step_block under__block__gradient">
                            <div className="step__block">
                                <h4 className="step__block__number">Step 3</h4>
                                <h3 className="step__block__title">Introduction to Front-End </h3>
                                <p className="step__block__subtitle">Lorem ipsum dolor sit amet consectetur. Elit massa erat
                                    vitae non semper quis. </p>
                            </div>
                        </div>
                    </div>
                    <div className="steps__lines">
                        <div className="step__line__first">
                            <span className="step__elipse">
                                <img src={line_img} alt="" className="step__arrow__left" />
                                <img src={border_img} alt="" className="step__border__left" />
                            </span>
                            <span className="step__elipse">
                                <img src={line_img} alt="" className="step__arrow__right" />
                                <img src={border_img} alt="" className="step__border__right" />
                            </span>
                        </div>
                        <div className="step__line__second">
                            <span className="step__elipse">
                                <img src={line_img} alt="" className="step__arrow__left" />
                                <img src={border_img} alt="" className="step__border__left" />
                            </span>
                            <span className="step__elipse">
                                <img src={line_img} alt="" className="step__arrow__right" />
                                <img src={border_img} alt="" className="step__border__right" />
                            </span>
                        </div>
                        <div className="step__line__third">
                            <span className="step__elipse">
                                <img src={line_img} alt="" className="step__arrow__left" />
                                <img src={border_img} alt="" className="step__border__left" />
                            </span>
                            <span className="step__elipse">
                                <img src={line_img} alt="" className="step__arrow__right" />
                                <img src={border_img} alt="" className="step__border__right" />
                            </span>
                        </div>

                    </div>
                    <div className="steps__right">
                        <div className="border_step_block under__block__gradient">
                            <div className="step__block">
                                <h4 className="step__block__number">Step 4</h4>
                                <h3 className="step__block__title">Introduction to Front-End </h3>
                                <p className="step__block__subtitle">Lorem ipsum dolor sit amet consectetur. Elit massa erat
                                    vitae non semper quis. </p>
                            </div>
                        </div>
                        <div className="border_step_block under__block__gradient">
                            <div className="step__block">
                                <h4 className="step__block__number">Step 5</h4>
                                <h3 className="step__block__title">Introduction to Front-End </h3>
                                <p className="step__block__subtitle">Lorem ipsum dolor sit amet consectetur. Elit massa erat
                                    vitae non semper quis. </p>
                            </div>
                        </div>
                        <div className="border_step_block under__block__gradient">
                            <div className="step__block">
                                <h4 className="step__block__number">Step 6</h4>
                                <h3 className="step__block__title">Introduction to Front-End </h3>
                                <p className="step__block__subtitle">Lorem ipsum dolor sit amet consectetur. Elit massa erat
                                    vitae non semper quis. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps;