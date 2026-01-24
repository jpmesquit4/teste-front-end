import { useState } from "react";
import type { Product } from "../../types/Product";
import "./index.scss";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(prev => prev + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
    };
    
    const formatQuantity = (value: number) =>
  value.toString().padStart(2, "0");


  return (
    <div className="Modal-Overlay" onClick={onClose}>
      <div className="Modal-Content" onClick={e => e.stopPropagation()}>
        <button className="Close" onClick={onClose}>×</button>

        <div className="Modal-Image-And-Info">
          <div className="Modal-Part-Image">
            <img src={product.photo} alt={product.productName} />     
          </div>

          <div className="Modal-Part-Info">
            <h5>{product.productName}</h5>      

            <h6>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h6>
                    
            <p>{product.descriptionShort}</p>
            <a href="">Veja mais detalhes do produto &gt;</a>

            <div className="Modal-Info">
              <div className="Modal-Counter">
                <button onClick={decrease}>
                  <img src="src/assets/images/Minus.svg" alt="Diminuir" />
                </button>

                <p>{formatQuantity(quantity)}</p>

                <button onClick={increase}>
                  <img src="src/assets/images/Plus.svg" alt="Aumentar" />
                </button>
              </div>
                        
              <button className="Buy">
                Comprar
              </button>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
}
