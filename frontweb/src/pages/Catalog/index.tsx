import ButtonSearch from 'components/ButtonSearch';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <>
      <div>
        <ButtonSearch />
      </div>
      <div className="container my-4">
        <div className="row container-products-cards">
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
