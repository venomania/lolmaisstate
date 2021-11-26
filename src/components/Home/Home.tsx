
import bgHome from '../../assets/img/logobg.png';
import './Home.css';
import {
    IonButtons,
    IonItem
} from '@ionic/react';

interface ContainerProps {
    name: string;
}

const HomeComponent: React.FC<ContainerProps> = ({ name }) => {



    return (
        <div className="container">
            <strong>PERFORMANCE TOOLS</strong>
            <img src={bgHome} />
            <IonItem className="btnStart" routerLink="/page/Player" routerDirection="none" lines="none" detail={false}><strong>Start</strong></IonItem>
        </div>
    );
};

export default HomeComponent;
