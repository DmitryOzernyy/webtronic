import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Programming from './components/programming/Programming';
import Questions from './components/questions/Questions';
import Review from './components/review/Review';
import Steps from './components/steps/Steps';

import './styles/sass/main.sass';

const App: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <main>
                <Intro/>
                <About/>
                <Programming />
                <Steps />
                <Questions />
                <Review />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App;