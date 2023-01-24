

const Gallery: React.FC = () => {
    return (
        <section className="gallery">
            <div className="wrapper">
                <h2 className="gallery__title">Gallery</h2>
                <div className="gallery__wrapper">
                    <div className="gallery__block__left">
                        <p className="gallery__subtitle">
                            By the end of this course, you will be able to develop and publish
                            your very own Google Chrome extension! In this course we will focus
                            on coding exercises and projects.
                        </p>
                        <div className="gallery__photo__0"></div>
                    </div>
                    <div className="gallery__block__right">
                        <div className="gallery__photos__block">
                            <div className="gallery__photo__1"></div>
                            <div className="gallery__photos__small">
                                <div className="gallery__photo__2"></div>
                                <div className="gallery__photo__3"></div>
                            </div>
                        </div>
                        <p className="gallery__subtitle_2">
                            If you would like to learn web development and get a job in the
                            tech industry, you are going to LOVE this course! Learn HTML,
                            CSS, JavaScript, Bootstrap and more with over 15 hours of HD video
                            tutorials! This course was designed to be extremely beginner
                            friendly. We will begin with the very basics of HTML and build
                            a simple web page.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;