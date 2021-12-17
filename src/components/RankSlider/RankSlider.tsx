import React, { useEffect, useContext, useMemo } from 'react';
import { IonSlides, IonSlide, IonContent, IonImg, IonList, IonItem, IonButton, IonIcon } from '@ionic/react';
import './RankSlider.css';
import { rose, shareSocial, } from 'ionicons/icons';
import useApi from '../../hook/useApi';
import axios from 'axios';
import { Stats, StatsContext } from '../Player/StatsContext';
import useSharing from '../../hook/useSharing';
import { Pdf, sharing } from '../../hook';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

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
    const { WhatsApp } = sharing();
    const { goPdf } = Pdf();
    const { user } = useApi();
    const context = useContext(StatsContext);
    const username = useMemo(() => {
        if (context?.stats[0]?.summonerName) {
            return context.stats[0].summonerName
        }
        return "Player"

    }, [context]);





    function capitalizeFirstLetter(string: string | any[]) {
        return string[0].toUpperCase() + string.slice(1);
    }

    return (
        <IonContent>
            <IonItem className="bandeau ion-no-padding">
                <strong className="ion-text-center">{username}'s statistics</strong>
            </IonItem>
            <IonSlides pager={true} options={slideOpts}  >

                {context.stats.map((stats, index) => {

                    const chartData = {
                        labels: [
                        'Wins',
                        'Losses'
                        ],
                        datasets: [{
                        data: [stats.wins, stats.losses],
                        backgroundColor: [
                            '#36A2EB',
                            '#761227'
                        ],
                        hoverBackgroundColor: [                            
                            '#36A2EB',
                            '#761227'
                        ],
                        borderColor: '#181818'
                        }]
                    };

                    const options: ChartOptions = {
                        /*
                        responsive: true,  
                        maintainAspectRatio: true, 
                        aspectRatio: 2, */
                         plugins: {
                            legend: {                                    
                             display: false,
                                 position:'top', 
                                 labels:{
                                    padding: 40
                                 },                                  
                              },
                            },                           
                         }

                    var rank = stats.tier ? stats.tier : null;
                    if (rank !== null) {
                        rank = rank.toLowerCase();
                        rank = capitalizeFirstLetter(rank);
                    }
                    const icon = `assets/rank/Emblem_${rank}.png`;
                    return (<IonSlide key={index} id={stats.queueType}>
                        <IonList>
                            <IonItem className="leagueCont ion-no-padding">
                                <strong className="ion-text-center">League {stats.queueType}</strong>
                            </IonItem>
                            <IonItem className="ion-text-center ion-no-padding">
                                <img src={icon} width={150} />
                            </IonItem>
                            <IonItem className="ion-text-center ion-no-padding">
                                <div className="rankCont">
                                    <strong className="ion-text-center">{stats.tier} {stats.rank}</strong>
                                    <p className="ion-text-center">{stats.leaguePoints} league points</p>
                                </div>
                            </IonItem>
                            <IonItem className="statsItem ion-no-padding">

                                <div className="countsCont">
                                     {/*
                                    <div className="counts">
                                        <p className="ion-text-center winsCont">Wins</p>
                                        <div>
                                            <p className="ion-text-center winsCont">{stats.wins}</p>
                                        </div>
                                    </div>
                                    <div className="counts">
                                        <p className="ion-text-center lossesCont">Losses</p>
                                        <div>
                                            <p className="ion-text-center lossesCont">{stats.losses}</p>
                                        </div>
                                    </div>
                                   <Doughnut data={chartData}/>*/}
                                    <Chart type="doughnut" data={chartData} options={options}/>
                                    <div id="absoluteBtns">
                                        <img src="assets/img/logo.png" />
                                    </div>
                                </div>
                            </IonItem>
                                <IonButton onClick={() => WhatsApp()}><IonIcon slot="end" icon={shareSocial} /></IonButton>
                                <IonButton onClick={() => goPdf(stats.queueType)}><IonIcon slot="end" icon={rose} /></IonButton>
                            <IonItem>

                            </IonItem>
                        </IonList>
                    </IonSlide >)
                })}


            </IonSlides >
        </IonContent >
    )
};

export default RankComponent;
