import { Card } from '../styles/styled';
import Cam from '../assets/icons/Vector.svg';

const Home = () => {

    return (<Card>
        <h1>Escolha o código da câmera e o horário</h1>
        <img width='150px' src={Cam} alt=''/>
    </Card>)
}

export default Home;