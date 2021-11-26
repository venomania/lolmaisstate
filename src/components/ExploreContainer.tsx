import { IonButton, IonIcon, IonInput } from '@ionic/react';
import { pizza } from 'ionicons/icons';
import { useState } from 'react';
import {APi} from '../hook';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const {getUser , user} = APi();
  
  const [username , setUsername] = useState<string>("");



  return (
    <div className="container">   
      <strong>{name}</strong>
     
    
      <p>  <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <IonInput value={username} placeholder="Enter Input" onIonChange={e => setUsername(e.detail.value!)}></IonInput>
      <IonButton color="light" onClick={() => getUser( username) }>
        Connexion
        <IonIcon slot="end" icon={pizza} />
    </IonButton>
    </div>
  );
};

export default ExploreContainer;
