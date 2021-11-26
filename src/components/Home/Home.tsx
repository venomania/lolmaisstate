
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
            <img src="assets/img/logobg.png" />
            <IonItem className="btnStart" routerLink="/page/Player" routerDirection="none" lines="none" detail={false}><strong>Start</strong></IonItem>
        </div>
    );
};

export default HomeComponent;
