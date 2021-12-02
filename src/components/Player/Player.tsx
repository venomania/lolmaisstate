import {
    IonButtons,
    IonItem,
    IonList,
    IonInput,
    IonLabel,
    IonIcon,
    IonButton,
    IonRedirect
} from '@ionic/react';
import { search } from 'ionicons/icons';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useApi from '../../hook/useApi';
import './Player.css';


interface ContainerProps {
    name: string;
}

const PlayerComponent: React.FC<ContainerProps> = ({ name }) => {

    const [text, setText] = useState<string>("");
    const { getUser, user } = useApi();


    if (user) {
        return <Redirect to={`/page/Rank`} />
    }

    return (
        <div className="container">
            <p>Search a player by his name to get his statistics !</p>
            <IonList>
                <IonItem className="customInput">
                    <IonInput placeholder="Player Name" value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    <IonButton shape="round" className="searchBtn" onClick={() => getUser(text)}>

                        <IonIcon icon={search} />
                    </IonButton>
                </IonItem>


            </IonList>

            {/*<IonItem className="btn" routerLink="/page/RankSlider" routerDirection="none" lines="none" detail={false} icon={search}><strong>Search</strong></IonItem>*/}
        </div>
    );
};

export default PlayerComponent;
