import type { Product } from "../../types/Product";
import './index.scss'

interface ProductCardProps {
    product: Product;
    onBuy: (product: Product) => void;
}

export function ProductCard({ product, onBuy }: ProductCardProps) {
    return (
      
        <div className="Card-Showcase">
      <img src={product.photo} alt={product.productName} />

      <h3>{product.productName}</h3>

      <h4>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h4>

      <h4 id="H4-Strong">
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h4>

      <h5>
        ou 2x de{" "}
        {(product.price / 2).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}{" "}
        sem juros
      </h5>

      <h6>Frete grátis</h6>

      <button onClick={() => onBuy(product)}>
        Comprar
      </button>
    </div>
      
  );
}
