import ShopSidebar from '../shopSidebar/ShopSidebar';
import ProductCard from '../productCard/ProductCard';
import './ProductGrid.css';
import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import axios from 'axios';

const listaDeCategorias = [
  { nome: "Brinquedos", qtd: 32 }, // índice 0
  { nome: "Roupas", qtd: 30 }, // índice 1
  { nome: "Comidas", qtd: 100 },
];
 
const listaDeMarcas = [
  { nome: "Royal Canin", qtd: 30 },
  { nome: "K9 Spirit", qtd: 20 },
  { nome: "Premier", qtd: 10 },
];

const ProductGrid = () => {
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [loading, setLoading] = useState(false);
    const [pets, setPets] = useState([]);
    const [totalDePaginas, setTotalDePaginas] = useState(1);
    const maximoDeAnimais = 100;
    const produtosPorPagina = 6;

    const API_KEY = "Axm8E8sDRGhlB5Cs8oIP1kAXHloES3rXeu9LSBJmb98S9Fl3zC";
    const API_SECRET = "s5WnxXNllYXzByJti1QH6VgbNDdX5DEyRcJT9R11";

    const obterToken = async () => {
        const response = await axios.post(
            "https://api.petfinder.com/v2/oauth2/token",
            `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
            {
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            }
        );
        return response.data.access_token;
    }

    const buscarPets = async (token, pagina, limite) => {
        const response = await axios.get(
            `/pf-api/animals?page=${pagina}&limit=${limite}&type=Dog`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );

        return response.data;
    }

    useEffect(() => {
        const fetchTokenEPets = async () => {
            if (loading) return;
            setLoading(true);

            try {
                // variável que pega o nosso token de acesso de api
                const meuToken = await obterToken();

                // variável que busca todos os pets da api
                const data = await buscarPets(meuToken, paginaAtual, produtosPorPagina);
                
                // filtro para pegarmos somente os pets que têm imagem
                const petsComImagem = data.animals.filter(
                    (pet) => pet.primary_photo_cropped || (pet.photos && pet.photos.length > 0)
                );

                // formatação de pets para serem mostrados na tela
                const petsFormatados = petsComImagem.map((cachorro) => ({
                    id: cachorro.id,
                    name: cachorro.name,
                    price: cachorro.breeds.primary,
                    image: cachorro.primary_photo_cropped?.medium || (cachorro.photos && photos[0]?.medium)
                }));

                // atualizamos o estado com os pets formatados e filtrados
                setPets(petsFormatados);

                // pega o menor número de itens:
                // se data.pagination.total_count vier com mais de 100 itens, consideramos somente maximoDeAnimais
                // se vier com menos de maximoDeAnimais, consideramos somente data.pagination.total_count
                const totalConsiderado = Math.min(
                    maximoDeAnimais,
                    data.pagination.total_count
                );

                setTotalDePaginas(Math.ceil(totalConsiderado / produtosPorPagina));

            } catch (error) {
                console.error("Erro ao buscar os dados da PetFinder API: ", error)
            } finally {
                setLoading(false);
            }
        };

        fetchTokenEPets();
    }, [paginaAtual]);

    const mudarPaginaAtual = (numeroDaPagina) => {
        setPaginaAtual(numeroDaPagina)
    }

    return(
        <div className='product-grid-container'>
            <ShopSidebar listaDeCategorias={listaDeCategorias} listaDeMarcas={listaDeMarcas}/>
            <main className='product-list-section'>
                <header className='product-list-header'>
                    <p>Mostrando {pets.length} resultados</p>

                    <div className='sort-by'>
                        <label htmlFor="sort">Ordenar por: </label>
                        <select name="sort" id="sort">
                            <option value="default">Mais recente</option>
                            <option value="price-asc">Preço: menor ao maior</option>
                            <option value="price-desc">Preço: maior ao menor</option>
                            <option value="name-asc">Name: A-Z</option>
                        </select>
                    </div>
                </header>

                <div className='products-grid'>
                    {pets.map(pet => (
                        <ProductCard key={pet.id} product={pet}/>
                    ))}
                </div>

                <Pagination 
                totalDePaginas={totalDePaginas} 
                paginaAtual={paginaAtual} 
                mudarPaginaAtual={mudarPaginaAtual}/>
            </main>
        </div>
    );
}

export default ProductGrid;