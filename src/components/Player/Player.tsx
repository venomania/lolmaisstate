import {
    IonButtons,
    IonItem,
    IonList,
    IonInput,
    IonLabel,
    IonIcon,
    IonButton
} from '@ionic/react';
import { search } from 'ionicons/icons';
import React, { useState } from 'react';
import './Player.css';

interface ContainerProps {
    name: string;
}

const PlayerComponent: React.FC<ContainerProps> = ({ name }) => {

    const [text, setText] = useState<string>();

    return (
        <form className="container">
            <p>Search a player by his name to get his statistics !</p>
            <IonList>
                <IonItem className="customInput">
                    <IonInput placeholder="Player Name" value={text}></IonInput>
                    <IonButton shape="round" className="searchBtn" routerLink="/page/RankSlider" routerDirection="none">
                        <IonIcon icon={search} />
                    </IonButton>
                </IonItem>


            </IonList>

            {/*<IonItem className="btn" routerLink="/page/RankSlider" routerDirection="none" lines="none" detail={false} icon={search}><strong>Search</strong></IonItem>*/}
        </form>
    );
};

export default PlayerComponent;
