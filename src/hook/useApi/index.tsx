import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';


const useApi = () => {
    const [user,setUser] = useState<any>(null);
    const getUser = async (username : string) =>{
        
    await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=RGAPI-fee20852-2141-4e25-837a-b9010141cef0`)
        .then(res => {
          const user = res.data;
          getRank(user.id);
        })

    }
    const getRank = async (id : string) =>{
        
       await axios.get(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=RGAPI-fee20852-2141-4e25-837a-b9010141cef0`)
        .then(res => {
           
           const rank = res.data;
           console.log(rank)
           localStorage.setItem("player", JSON.stringify(res.data));
           setUser(rank);
        })

    }
    console.log(user);
    return{
        user,
        getUser,
        getRank
    }

}

export default useApi;