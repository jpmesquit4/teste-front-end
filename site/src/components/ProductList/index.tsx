import type { Product } from "../../types/Product";
import { ProductCard } from "../ProductCard";
import "./index.scss";

interface ProductListProps {
    products: Product[];
    onBuy: (product: Product) => void;
}

export function ProductList({ products, onBuy }: ProductListProps) {
  return (
    <div className="Showcase">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} onBuy={onBuy} />
      ))}
    </div>
  );
}
