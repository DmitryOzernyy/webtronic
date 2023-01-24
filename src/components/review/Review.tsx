import arrow_img from "../../styles/img/svg/arrow.svg"

const Review: React.FC = () => {
    return (
        <section className="review">
            <div className="wrapper">
                <h2 className="review__title">Review</h2>
                <div className="wrapper__review">
                    <div>
                        <h4 className="review__subtitle">
                            Best courses ever
                        </h4>
                        <p className="review__subtitle__2">
                            Good course, up to this point, still ongoing. The only downside,
                            why I gave 4,5 stars, because the "teacher" sometimes feel like,
                            he is lost, and takes up quite a time, to correct himself, and check
                            back etc.
                        </p>
                    </div>
                    <div>
                        <div className="review__block__counter__control">
                            <div className="review__block__counter">
                                <div>
                                    <h4 className="review__block__counter__first">1/</h4>
                                    <p className="review__block__counter__second">3</p>
                                </div>
                                <div>
                                    <div className="review__underblock__counter__control__left under__block__gradient">
                                        <div className="review__block__counter__control__left">
                                            <img src={arrow_img} alt="" className="review__arrow__left" />
                                        </div>
                                    </div>
                                    <div className="review__underblock__counter__control__right under__block__gradient">
                                        <div className="review__block__counter__control__right">
                                            <img src={arrow_img} alt="" className="review__arrow__right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review__block__photos">
                                <div className="review__underblock__photo__active under__block__gradient">
                                    <div className="review__block__photo__active review__photo__0"></div>
                                </div>
                                <div className="review__underblock__photo under__block__gradient">
                                    <div className="review__block__photo review__photo__1"></div>
                                </div>
                                <div className="review__underblock__photo under__block__gradient">
                                    <div className="review__block__photo review__photo__2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review;