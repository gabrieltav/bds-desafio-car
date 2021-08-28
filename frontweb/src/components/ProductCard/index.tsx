import './styles.css';

import ProductImg from 'assets/images/product.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>

      <div className="btn-card-purchase">
        <div className="btn-content-container-product">
          <div>
            <button className="btn base-button-product">
              <h6>COMPRAR</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
