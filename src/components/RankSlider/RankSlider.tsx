import React, { useEffect, useContext } from 'react';
import { IonSlides, IonSlide, IonContent, IonImg, IonList, IonItem, IonButton, IonIcon } from '@ionic/react';
import './RankSlider.css';
import { image, logoWhatsapp, } from 'ionicons/icons';
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
    const  { WhatsApp } = sharing();
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
                    
                    var rank = stats.tier?stats.tier:null;
                    if(rank !==  null){
                    rank.toLowerCase();
                    rank = capitalizeFirstLetter(rank);
                    }
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
                            <IonItem>
                            <IonButton onClick={() => WhatsApp("r")}> <IonIcon slot="end" icon={logoWhatsapp} /></IonButton>   

                            </IonItem>
                        </IonList>
                    </IonSlide>)
                })}

            
            </IonSlides>
        </IonContent>
    )
};

export default RankComponent;
