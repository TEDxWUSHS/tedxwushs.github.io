import Hero from '../components/Hero';
import Updates from '../components/Updates';
import About from '../components/About';
import HomeArchives from '../components/HomeArchives';
import JoinUs from '../components/JoinUs';

const Home = () => {
    return (
        <main id="main-content" tabIndex={-1}>
            <Hero />
            <HomeArchives />
            <Updates />
            <About />
            <JoinUs />
        </main>
    );
};

export default Home;
