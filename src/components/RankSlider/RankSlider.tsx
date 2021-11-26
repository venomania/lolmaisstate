import React from 'react';
import { IonSlides, IonSlide, IonContent, IonImg } from '@ionic/react';
import './RankSlider.css';
import { image } from 'ionicons/icons';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
    initialSlide: 0,
    speed: 400
};


interface ContainerProps {
    name: string;
}



const RankComponent: React.FC<ContainerProps> = ({ name }) => {

    return (
        <IonContent>
            <IonSlides pager={true} options={slideOpts}>
                <IonSlide>
                    <img src="assets/rank/Emblem_Grandmaster.png" />
                </IonSlide>
                <IonSlide>
                    <h1>Slide 2</h1>
                </IonSlide>
                <IonSlide>
                    <h1>Slide 3</h1>
                </IonSlide>
            </IonSlides>
        </IonContent>
    )
};

export default RankComponent;
