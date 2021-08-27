import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import Navbar from './../../components/Navbar/index';

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card ">
          <div className="home-content-container">
            <div>
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na sua realização do
                seu sonho
              </p>
            </div>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <ButtonIcon />
      </div>
    </>
  );
};

export default Home;
