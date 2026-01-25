import './App.scss'

import { useEffect, useState } from "react";
import type { Product } from '../../types/Product';
import { getProducts } from '../../services/ProductsService';
import { ProductList } from '../../components/ProductList';
import ProductModal from '../../components/ProductModal';
import { Partnership } from '../../components/Partnership';

const ITEMS_PER_PAGE = 4;

export default function App() {

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const paginatedProducts = products.slice(startIndex, endIndex);

    useEffect(() => {
        async function loadProducts() {
            const response = await getProducts();
            setProducts(response.products);
        }

        loadProducts();
    }, []);

    function handleOpenModal(product: Product) {
        setSelectedProduct(product);
    }

    function handleCloseModal() {
        setSelectedProduct(null);
    }



    return (
        <>
            <header>

                <div className='Top-Header'>
                    <div className='Topics'>
                        <img src="src/assets/images/ShieldCheck.svg" alt="Ícone de compra 100% segura" />
                        <p>Compra <span>100% Segura</span></p>
                    </div>

                    <div className='Topics'>
                        <img src="src/assets/images/Truck.svg" alt="Ícone de frete grátis cima de 200 reais" />
                        <p> <span>Frete grátis</span> acima de R$ 200</p>
                    </div>

                    <div className='Topics'>
                        <img src="src/assets/images/CreditCard.svg" alt="Ícone de parcelamento de compra" />
                        <p> <span>Parcele</span> suas compras</p>
                    </div>

                </div>

                <div className='Main-Header'>

                    <div>
                        <img src="src/assets/images/Logo.png" alt="Econverse - Loja online de tecnologia e varejo" />
                    </div>

                    <div className='Input-Search'>
                        <input type="text" placeholder='O que você está buscando?' />
                        <img src="/src/assets/images/MagnifyingGlass.svg" alt="Ícone de busca" />
                    </div>

                    <div className='Icons'>
                        <img src="src/assets/images/Box.svg" alt="Ícone de envio" />
                        <img src="src/assets/images/Heart.svg" alt="Ícone de favoritos" />
                        <img src="src/assets/images/UserCircle.svg" alt="Ícone do perfil do usuário" />
                        <img src="src/assets/images/ShoppingCart.svg" alt="Ícone de carrinho de compras" />
                    </div>

                </div>

                <div className='Category-Header'>
                    <a href='/produtos'>Todas Categorias</a>
                    <a href='/produtos/supermercado'>Supermercado</a>
                    <a href='/produtos/livros'>Livros</a>
                    <a href='/produtos/moda'>Moda</a>
                    <a href='/produtos/lancamentos'>Lançamentos</a>
                    <a href='/produtos/ofertasDoDia' className='Link-Purple'>Ofertas do dia</a>

                    <div>
                        <img src="/src/assets/images/CrownSimple.svg" alt="Ícone para compras com assinatura" />
                        <a href='/produtos/assinatura'>Assinatura</a>
                    </div>
                </div>
            </header>

            <main>
                <section className="ImageOffer-50Off">
                    <img
                        src="src/assets/images/RectangleOffer50.png"
                        alt="Promoção de 50% de desconto em produtos selecionados"
                        className="ImageOffer-50Off__image"
                    />

                    <div className="Shadow-ImageOffer-50Off" />

                    <div className="Texts-ImageOffer-50Off">
                        <h1>Venha conhecer nossas promoções</h1>
                        <p>50% Off <span>nos produtos</span></p>
                        <button>Ver produto</button>
                    </div>
                </section>

                <section className='Section-Topics'>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="src/assets/images/Technology.svg" alt="Ícone do link para produtos relacionados a tecnologia" />
                        </div>
                        <a href='/produtos/tecnologia' id='Link-Purple-Card-Topics'>Tecnologia</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="src/assets/images/SuperMarket.svg" alt="Ícone do link para produtos relacionados a supermercado" />
                        </div>
                        <a href='/produtos/supermercado'>Supermercado</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="src/assets/images/Drinks.svg" alt="Ícone do link para produtos relacionados a bebidas" />
                        </div>
                        <a href='/produtos/bebidas'>Bebidas</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="src/assets/images/Tools.svg" alt="Ícone do link para produtos relacionados a ferramentas" />
                        </div>
                        <a href='/produtos/ferramentas'>Ferramentas</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="src/assets/images/Health.svg" alt="Ícone do link para produtos relacionados a saúde" />
                        </div>
                        <a href='/produtos/saude'>Saúde</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="src/assets/images/SportAndFitness.svg" alt="Ícone do link para produtos relacionados a esporte e fitness" />
                        </div>
                        <a href='/produtos/esportesFitness'>Esportes e Fitness</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="src/assets/images/Fashion.svg" alt="Ícone do link para produtos relacionados a moda" />
                        </div>
                        <a href='/produtos/moda'>Moda</a>
                    </div>

                </section>

                <section className='Section-Showcase'>
                    <div className='Title-Showcase'>
                        <span className="Line"></span>
                        <h2>Produtos relacionados</h2>
                        <span className="Line"></span>
                    </div>

                    <div className='Topics-Showcase'>
                        <a href='/produtos/celular' className='Link-Purple'><strong>celular</strong></a>
                        <a href='/produtos/acessorios'>acessórios</a>
                        <a href='/produtos/tablets'>tablets</a>
                        <a href='/produtos/notebooks'>NOTEBOOKS</a>
                        <a href='/produtos/tv'>TVs</a>
                        <a href='/produtos'>Ver todos</a>
                    </div>

                    <div className='Showcase'>

                        <button
                            className="Ball"
                            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            aria-label="Página anterior"
                        >
                            <img src="src/assets/images/Arrow.svg" alt="Produto anterior" />
                        </button>

                        <ProductList
                            products={paginatedProducts}
                            onBuy={handleOpenModal}
                        />


                        <button
                            className="Ball"
                            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={page === totalPages}
                            aria-label="Próxima página"
                        >
                            <img className="Flip-Horizontal" src="src/assets/images/Arrow.svg" alt="Próximo produto" />
                        </button>


                    </div>
                </section>

                <section className="Section-Partnership">

                    <Partnership
                        image="src/assets/images/Partnership.png"
                        alt="Parceiros estratégicos da Econverse"
                    />

                    <Partnership
                        image="src/assets/images/Partnership.png"
                        alt="Marcas parceiras da Econverse"
                    />



                </section>

                <section className='Section-Showcase'>
                    <div className='Title-Showcase'>
                        <span className="Line"></span>
                        <h2>Produtos relacionados</h2>
                        <span className="Line"></span>
                    </div>

                    <p id='P-SeeAll'>Ver todos</p>

                    <div className='Showcase'>

                        <button
                            className="Ball"
                            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            aria-label="Página anterior"
                        >
                            <img src="src/assets/images/Arrow.svg" alt="Produto anterior" />
                        </button>

                        <ProductList
                            products={paginatedProducts}
                            onBuy={handleOpenModal}
                        />


                        <button
                            className="Ball"
                            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={page === totalPages}
                            aria-label="Próxima página"
                        >
                            <img className="Flip-Horizontal" src="src/assets/images/Arrow.svg" alt="Próximo produto" />
                        </button>


                    </div>
                </section>

                <section className="Section-Partnership">
                    <Partnership
                        image="src/assets/images/Partnership.png"
                        alt="Parceiros estratégicos da Econverse"
                    />

                    <Partnership
                        image="src/assets/images/Partnership.png"
                        alt="Marcas parceiras da Econverse"
                    />

                </section>

                <section className='BrowseForBrands'>
                    <h2>Navegue por marcas</h2>

                    <div className='Brands'>
                        <nav>
                            <img src="src/assets/images/Brand-Econverse.png" alt="Logo-Econverse" />
                        </nav>

                        <nav>
                            <img src="src/assets/images/Brand-Econverse.png" alt="Logo-Econverse" />
                        </nav>

                        <nav>
                            <img src="src/assets/images/Brand-Econverse.png" alt="Logo-Econverse" />
                        </nav>

                        <nav>
                            <img src="src/assets/images/Brand-Econverse.png" alt="Logo-Econverse" />
                        </nav>

                        <nav>
                            <img src="src/assets/images/Brand-Econverse.png" alt="Logo-Econverse" />
                        </nav>

                    </div>

                </section>

                <section className='Section-Showcase'>
                    <div className='Title-Showcase'>
                        <span className="Line"></span>
                        <h2>Produtos relacionados</h2>
                        <span className="Line"></span>
                    </div>

                    <p id='P-SeeAll'>Ver todos</p>

                    <div className='Showcase'>

                        <button
                            className="Ball"
                            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            aria-label="Página anterior"
                        >
                            <img src="src/assets/images/Arrow.svg" alt="Produto anterior" />
                        </button>

                        <ProductList
                            products={paginatedProducts}
                            onBuy={handleOpenModal}
                        />


                        <button
                            className="Ball"
                            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={page === totalPages}
                            aria-label="Próxima página"
                        >
                            <img className="Flip-Horizontal" src="src/assets/images/Arrow.svg" alt="Próximo produto" />
                        </button>


                    </div>
                </section>

                <section className='NewsLetter'>

                    <div className='Text-NewsLetter'>
                        <h4>Inscreva-se na nossa newsletter</h4>
                        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                    </div>

                    <div className='Info-NewsLetter'>
                        <div className='Input-and-Button-NewsLetter'>
                            <input type="text" placeholder='Digite seu nome' />
                            <input type="text" placeholder='Digite seu e-mail' />
                            <button aria-label="Inscreva-se para receber nossas newsletter">INSCREVER</button>
                        </div>

                        <div className='Checkbox-Terms'>
                            <input type="checkbox" />
                            <p>Aceito os termos e condições</p>
                        </div>
                    </div>

                </section>
            </main>

            <footer>
                <div className='Social-Media-Part'>
                    <img src="src/assets/images/LogoFooter.png" alt="Logo-Econverse" />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className='Social-Media'>
                        <img src="src/assets/images/Instagram.png" alt="Ícone-Instagram" />
                        <img src="src/assets/images/Facebook.png" alt="Ícone-Facebook" />
                        <img src="src/assets/images/Linkedin.png" alt="Ícone-Linkedin" />
                    </div>
                </div>

                <div className='Line-Divisor-Footer'></div>

                <div className='Useful-Links'>
                    <div>
                        <h5>Institucional</h5>
                        <a href='/sobrenos'>Sobre Nós</a>
                        <a href='/movimento' >Movimento</a>
                        <a href='/trabalheConosco'>Trabalhe conosco</a>
                    </div>
                    <div>
                        <h5>Ajuda</h5>
                        <a href='/suporte'>Suporte</a>
                        <a href='/faleConosco'>Fale Conosco</a>
                        <a href='/perguntasFrequentes'>Perguntas Frequentes</a>
                    </div>
                    <div>
                        <h5>Termos</h5>
                        <a href='/termosECondicoes'>Termos e Condições</a>
                        <a href='/politicaDeProvicidade'>Política de Privacidade</a>
                        <a href='/trocaEDevolucao'>Troca e Devolução</a>
                    </div>
                </div>
            </footer>

            <div className='Bottom-Footer'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}


        </>
    )
}

