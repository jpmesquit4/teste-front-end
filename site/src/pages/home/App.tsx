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
                        <img src="/images/ShieldCheck.svg" alt="Ícone de compra 100% segura" />
                        <p>Compra <span>100% Segura</span></p>
                    </div>

                    <div className='Topics'>
                        <img src="/images/Truck.svg" alt="Ícone de frete grátis cima de 200 reais" />
                        <p> <span>Frete grátis</span> acima de R$ 200</p>
                    </div>

                    <div className='Topics'>
                        <img src="/images/CreditCard.svg" alt="Ícone de parcelamento de compra" />
                        <p> <span>Parcele</span> suas compras</p>
                    </div>

                </div>

                <div className='Main-Header'>

                    <div>
                        <img src="/images/Logo.png" alt="Econverse - Loja online de tecnologia e varejo" />
                    </div>

                    <div className='Input-Search'>
                        <input type="text" placeholder='O que você está buscando?' />
                        <img src="/images/MagnifyingGlass.svg" alt="Ícone de busca" />
                    </div>

                    <div className='Icons'>
                        <img src="/images/Box.svg" alt="Ícone de envio" />
                        <img src="/images/Heart.svg" alt="Ícone de favoritos" />
                        <img src="/images/UserCircle.svg" alt="Ícone do perfil do usuário" />
                        <img src="/images/ShoppingCart.svg" alt="Ícone de carrinho de compras" />
                    </div>

                </div>

                <div className='Category-Header'>
                    <a href='/produtos'>Todas Categorias</a>
                    <a href='/produtos/supermercado'>Supermercado</a>
                    <a href='/produtos/livros'>Livros</a>
                    <a href='/produtos/moda'>Moda</a>
                    <a href='/produtos/lancamentos'>Lançamentos</a>
                    <a href='/produtos/ofertasDoDia'>Ofertas do dia</a>

                    <div className='menu-item'>

                        <svg className='icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_1295)">
                            <path d="M3.52571 15.3137C3.54519 15.3959 3.58109 15.4732 3.63126 15.5412C3.68142 15.6091 3.7448 15.6662 3.8176 15.7089C3.89039 15.7517 3.97108 15.7793 4.05483 15.7901C4.13857 15.8009 4.22363 15.7947 4.30489 15.7717C8.03061 14.743 11.9654 14.7426 15.6913 15.7706C15.7725 15.7935 15.8576 15.7998 15.9413 15.789C16.025 15.7782 16.1056 15.7506 16.1784 15.7079C16.2512 15.6651 16.3146 15.6081 16.3647 15.5402C16.4149 15.4723 16.4508 15.395 16.4703 15.3129L18.4616 6.8506C18.4883 6.73732 18.4828 6.61884 18.4457 6.50851C18.4087 6.39818 18.3416 6.30039 18.252 6.22615C18.1623 6.1519 18.0538 6.10415 17.9385 6.08828C17.8232 6.07241 17.7057 6.08904 17.5994 6.13631L13.6475 7.89269C13.5048 7.95611 13.3436 7.96382 13.1955 7.91429C13.0474 7.86476 12.9232 7.76159 12.8474 7.62508L10.5464 3.48334C10.4923 3.38591 10.4131 3.30472 10.317 3.2482C10.2209 3.19167 10.1115 3.16187 10 3.16187C9.88857 3.16187 9.77914 3.19167 9.68308 3.2482C9.58701 3.30472 9.50781 3.38591 9.45368 3.48334L7.15272 7.62508C7.07688 7.76159 6.95269 7.86476 6.8046 7.91429C6.6565 7.96381 6.49523 7.95611 6.35253 7.89269L2.40008 6.13604C2.29375 6.08878 2.17634 6.07215 2.06107 6.08801C1.94579 6.10386 1.83724 6.15158 1.74762 6.2258C1.658 6.30001 1.59088 6.39777 1.55381 6.50806C1.51674 6.61836 1.51119 6.73681 1.5378 6.85008L3.52571 15.3137Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_1295">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>

                        <a href='/produtos/assinatura'>Assinatura</a>
                    </div>
                </div>
            </header>

            <main>
                <section className="ImageOffer-50Off">
                    <img
                        src="/images/RectangleOffer50.png"
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
                            <img src="/images/Technology.svg" alt="Ícone do link para produtos relacionados a tecnologia" />
                        </div>
                        <a href='/produtos/tecnologia'>Tecnologia</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="/images/SuperMarket.svg" alt="Ícone do link para produtos relacionados a supermercado" />
                        </div>
                        <a href='/produtos/supermercado'>Supermercado</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="/images/Drinks.svg" alt="Ícone do link para produtos relacionados a bebidas" />
                        </div>
                        <a href='/produtos/bebidas'>Bebidas</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="/images/Tools.svg" alt="Ícone do link para produtos relacionados a ferramentas" />
                        </div>
                        <a href='/produtos/ferramentas'>Ferramentas</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="/images/Health.svg" alt="Ícone do link para produtos relacionados a saúde" />
                        </div>
                        <a href='/produtos/saude'>Saúde</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="/images/SportAndFitness.svg" alt="Ícone do link para produtos relacionados a esporte e fitness" />
                        </div>
                        <a href='/produtos/esportesFitness'>Esportes e Fitness</a>
                    </div>

                    <div className='Cards-Topics'>
                        <div className='Cards-Quad'>
                            <img src="/images/Fashion.svg" alt="Ícone do link para produtos relacionados a moda" />
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
                        <a href='/produtos/celular'>celular</a>
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
                            <img src="/images/Arrow.svg" alt="Produto anterior" />
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
                            <img className="Flip-Horizontal" src="/images/Arrow.svg" alt="Próximo produto" />
                        </button>

                    </div>
                </section>

                <section className="Section-Partnership">

                    <Partnership
                        image="/images/Partnership.png"
                        alt="Parceiros estratégicos da Econverse"
                    />

                    <Partnership
                        image="/images/Partnership.png"
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
                            <img src="/images/Arrow.svg" alt="Produto anterior" />
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
                            <img className="Flip-Horizontal" src="/images/Arrow.svg" alt="Próximo produto" />
                        </button>

                    </div>
                </section>

                <section className="Section-Partnership">
                    <Partnership
                        image="/images/Partnership.png"
                        alt="Parceiros estratégicos da Econverse"
                    />

                    <Partnership
                        image="/images/Partnership.png"
                        alt="Marcas parceiras da Econverse"
                    />

                </section>

                <section className='BrowseForBrands'>
                    <h2>Navegue por marcas</h2>

                    <div className='Brands'>
                        <nav>
                            <img src="/images/Brand-Econverse.png" alt="Logo-Econverse" />
                        </nav>

                        <nav>
                            <img src="/images/Brand-Econverse.png" alt="Logo-Econverse" />
                        </nav>

                        <nav>
                            <img src="/images/Brand-Econverse.png" alt="Logo-Econverse" />
                        </nav>

                        <nav>
                            <img src="/images/Brand-Econverse.png" alt="Logo-Econverse" />
                        </nav>

                        <nav>
                            <img src="/images/Brand-Econverse.png" alt="Logo-Econverse" />
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
                            <img src="/images/Arrow.svg" alt="Produto anterior" />
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
                            <img className="Flip-Horizontal" src="/images/Arrow.svg" alt="Próximo produto" />
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
                    <img src="/images/LogoFooter.png" alt="Logo-Econverse" />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className='Social-Media'>
                        <img src="/images/Instagram.png" alt="Ícone-Instagram" />
                        <img src="/images/Facebook.png" alt="Ícone-Facebook" />
                        <img src="/images/Linkedin.png" alt="Ícone-Linkedin" />
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

