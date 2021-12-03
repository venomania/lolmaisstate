import { SocialSharing } from '@ionic-native/social-sharing';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { App, URLOpenListenerEvent } from '@capacitor/app';

const useSharing = () =>{

    const WhatsApp =(url: string ) =>{        
  
        url = "http://localhost:8100/page/Player"
        SocialSharing.share("Venez voir vos stats 😘 : "+ url );
    }
    return {
        WhatsApp,  
    }
}

export default useSharing;

