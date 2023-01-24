import angular_img from '../../styles/img/tech/angular.png';
import react_img from '../../styles/img/tech/react.png';
import vue_img from '../../styles/img/tech/vue.png';
import js_img from '../../styles/img/tech/js.png';

const Programming: React.FC = () => {
    return (
        <section className="programmer">
            <div className="wrapper">
                <div className="programmer__wrapper">
                    <h2 className="programmer__title">
                        Programming technologies
                    </h2>
                    <p className="programmer__subtitle">
                        By the end, you’ll have the portfolio and interview skills you need to start your new career.
                    </p>
                    <div className="technologies__list">
                        <div className="subtrack__tech">
                            <img src={angular_img} className="tech__icon__angular tech__icon"></img>
                            <h4 className="tech__title">Angular</h4>
                        </div>
                        <div className="subtrack__tech">
                            <img src={react_img} className="tech__icon__react tech__icon"></img>
                            <h4 className="tech__title">React</h4>
                        </div>
                        <div className="subtrack__tech">
                            <img src={vue_img} className="tech__icon__vue tech__icon"></img>
                            <h4 className="tech__title">Vue</h4>
                        </div>
                        <div className="subtrack__tech">
                            <img src={js_img} className="tech__icon__javascript tech__icon"></img>
                            <h4 className="tech__title">JavaScript</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Programming;