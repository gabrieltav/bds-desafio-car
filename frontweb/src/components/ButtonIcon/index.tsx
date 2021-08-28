import { Link } from 'react-router-dom';
import './styles.css';

const ButtonIcon = () => {
  return (
    <div className="btn-home-container">
      <div className="btn-container">
        <div>
          <Link to="/products">
  
          <button className="btn btn-secundary btn-icon">
            <h6>VER CATÁLOGO</h6>
          </button>
          </Link>
        </div>
        <div className="btn-text">
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default ButtonIcon;
