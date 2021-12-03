import React, { useEffect, useContext, useMemo } from 'react';
import { IonSlides, IonSlide, IonContent, IonImg, IonList, IonItem, IonButton, IonIcon } from '@ionic/react';
import './RankSlider.css';
import { shareSocial, } from 'ionicons/icons';
import useApi from '../../hook/useApi';
import axios from 'axios';
import { Stats, StatsContext } from '../Player/StatsContext';
import useSharing from '../../hook/useSharing';
import { sharing } from '../../hook';

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
    const username = useMemo(() => {
        if (context?.stats[0]?.summonerName) {
            return context.stats[0].summonerName
        }
        return "Player"

    }, [context]);

    const { WhatsApp } = sharing();

    function capitalizeFirstLetter(string: string | any[]) {
        return string[0].toUpperCase() + string.slice(1);
    }

    return (
        <IonContent>
            <IonItem className="bandeau">
                <strong className="ion-text-center">{username}'s statistics</strong>
            </IonItem>
            <IonSlides pager={true} options={slideOpts}>

                {context.stats.map((stats, index) => {

                    var rank = stats.tier ? stats.tier : null;
                    if (rank !== null) {
                        rank = rank.toLowerCase();
                        rank = capitalizeFirstLetter(rank);
                    }
                    const icon = `assets/rank/Emblem_${rank}.png`;
                    return (<IonSlide key={index}>
                        <IonList>
                            <IonItem className="leagueCont">
                                <strong className="ion-text-center">League {stats.queueType}</strong>
                            </IonItem>
                            <IonItem className="ion-text-center">
                                <img src={icon} width={150} />
                            </IonItem>
                            <IonItem>
                                <strong className="ion-text-center">{stats.tier} {stats.rank}</strong>
                            </IonItem>
                            <IonItem>
                                <div className="countsCont">
                                    <div className="counts">
                                        <p className="ion-text-center counts">Losses : {stats.losses}</p>
                                    </div>
                                    <div>
                                        <p className="ion-text-center counts">Wins : {stats.wins}</p>
                                    </div>
                                </div>
                                <p className="ion-text-center">League points : {stats.leaguePoints}</p>


                            </IonItem>
                            <IonItem>
                                <IonButton onClick={() => WhatsApp("r")}> <IonIcon slot="end" icon={shareSocial} /></IonButton>

                            </IonItem>
                        </IonList>
                    </IonSlide>)
                })}


            </IonSlides>
        </IonContent>
    )
};

export default RankComponent;
