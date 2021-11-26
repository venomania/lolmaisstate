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
import useApi from '../../hook/useApi';
import './Player.css';
import { Storage } from '@ionic/storage';

const store = new Storage();
await store.create();

interface ContainerProps {
    name: string;
}

const PlayerComponent: React.FC<ContainerProps> = ({ name }) => {



    const getUser = (text) => {

    }

    getUser.then((users) => {
        users.forEach(user => {
            Object.entries(user).forEach(([key, value]) => {
                store.set(key, value);
            })
        })
    })



    return (
        <div className="container">
            <p>Search a player by his name to get his statistics !</p>
            <IonList>
                <IonItem className="customInput">
                    <IonInput placeholder="Player Name" value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    <IonButton shape="round" className="searchBtn" routerLink="/page/Rank" routerDirection="none" onClick={() => getUser(text)}>
                        <IonIcon icon={search} />
                    </IonButton>
                </IonItem>


            </IonList>

            {/*<IonItem className="btn" routerLink="/page/RankSlider" routerDirection="none" lines="none" detail={false} icon={search}><strong>Search</strong></IonItem>*/}
        </div>
    );
};

export default PlayerComponent;
