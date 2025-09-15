import Carousel from "../carousel/Carousel";
import CategoryCard from "../categoryCard/CategoryCard";

const lista = [
    {
        title: "Acessórios",
        productCount: 64,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyUBXO8s9Chgc2Uan0tFIa4L-65Dk9c525A&s"
    },
    {
        title: "Comida",
        productCount: 30,
        image: "https://adimax.com.br/wp-content/uploads/2022/08/principais-tipos-de-racao-para-cachorro.jpg"
    },
    {
        title: "Comida",
        productCount: 30,
        image: "https://adimax.com.br/wp-content/uploads/2022/08/principais-tipos-de-racao-para-cachorro.jpg"
    },
    {
        title: "Comida",
        productCount: 30,
        image: "https://adimax.com.br/wp-content/uploads/2022/08/principais-tipos-de-racao-para-cachorro.jpg"
    },
    {
        title: "Comida",
        productCount: 30,
        image: "https://adimax.com.br/wp-content/uploads/2022/08/principais-tipos-de-racao-para-cachorro.jpg"
    },
]

const CategoryCarousel = () => {
    return (
        <Carousel title={"Pesquise por Categoria"} items={lista} RenderComponent={({item}) => <CategoryCard categoria={item}/>} />
    );
}

export default CategoryCarousel;