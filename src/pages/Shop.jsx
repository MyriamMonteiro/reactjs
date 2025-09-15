import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import AnimalCarousel from '../components/animalCarousel/AnimalCarousel'
import Footer from '../components/footer/Footer'
import ProductGrid from '../components/productGrid/ProductGrid'

const Home = () => {
    return(
        <>
            <Navbar />
            <Hero />
            <AnimalCarousel />
            <ProductGrid />
            <Footer />
        </>
    );
}

export default Home;