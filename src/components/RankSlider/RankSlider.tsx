import React, { useEffect, useContext } from 'react';
import { IonSlides, IonSlide, IonContent, IonImg, IonList, IonItem } from '@ionic/react';
import './RankSlider.css';
import { image } from 'ionicons/icons';
import useApi from '../../hook/useApi';
import axios from 'axios';
import { Stats, StatsContext } from '../Player/StatsContext';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
    initialSlide: 0,
    speed: 400
};

interface ContainerProps {
    name: string;
}

interface Url {
    url: string
}

const RankComponent: React.FC<ContainerProps> = ({ name }) => {
    const { user } = useApi();
    const context = useContext(StatsContext);

    useEffect(() => {
        console.log("user: ", user);
    });

    function capitalizeFirstLetter(string: string | any[]) {
        return string[0].toUpperCase() + string.slice(1);
    }

    return (
        <IonContent>
            <IonSlides pager={true} options={slideOpts}>
                {context.stats.map((stats) => {
                    var rank = stats.tier;
                    rank.toLowerCase();
                    rank = capitalizeFirstLetter(rank);
                    const icon = `assets/rank/Emblem_${rank}.png`;
                    return (<IonSlide>
                        <IonList>

                            <IonItem>
                                <strong>{stats.summonerName}</strong>
                            </IonItem>
                            <IonItem>
                                <img src={icon} width={100} />
                            </IonItem>
                            <IonItem>
                                <p>{stats.tier}</p>
                            </IonItem>
                            <IonItem>
                                <p>{stats.inactive}</p>
                            </IonItem>
                            <IonItem>
                                <p>{stats.leaguePoints}</p>
                            </IonItem>
                            <IonItem>
                                <p>{stats.losses}</p>
                            </IonItem>
                            <IonItem>
                                <p>{stats.queueType}</p>
                            </IonItem>
                            <IonItem>
                                <p>{stats.rank}</p>
                            </IonItem>
                            <IonItem>
                                <p>{stats.wins}</p>
                            </IonItem>
                        </IonList>
                    </IonSlide>)
                })}
            </IonSlides>
        </IonContent>
    )
};

export default RankComponent;
