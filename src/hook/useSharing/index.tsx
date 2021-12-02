import { SocialSharing } from '@ionic-native/social-sharing';

const useSharing = () =>{

    const WhatsApp =(url: string) =>{
        url = "https://developer.riotgames.com/apis#summoner-v4"
        SocialSharing.shareViaWhatsApp("", "", url).then(() => {
        })
    }
    return {
        WhatsApp,
    }
}

export default useSharing;