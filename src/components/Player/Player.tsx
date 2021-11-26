import {
    IonButtons,
    IonItem,
    IonList,
    IonInput,
    IonLabel
} from '@ionic/react';
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

                <IonInput placeholder="Player Name" value={text}></IonInput>

            </IonList>
        </form>
    );
};

export default PlayerComponent;
