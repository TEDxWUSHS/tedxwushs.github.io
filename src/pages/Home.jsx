import Hero from '../components/Hero';
import About from '../components/About';
import Speakers from '../components/Speakers';
import Schedule from '../components/Schedule';
import JoinUs from '../components/JoinUs';

const Home = () => {
    return (
        <main id="main-content" tabIndex={-1}>
            <Hero />
            <About />
            <Speakers />
            <Schedule />
            <JoinUs />
        </main>
    );
};

export default Home;
