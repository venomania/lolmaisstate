import React, { useEffect, useState, useContext } from 'react';

import axios from 'axios';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Stats, StatsContext } from '../../components/Player/StatsContext';
import { Storage } from '@ionic/storage';

const store = new Storage();
store.create();

const useApi = () => {
    const context = useContext(StatsContext);
    const [user, setUser] = useState<any>(null);
    const getUser = async (username: string) => {

        await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=RGAPI-fee20852-2141-4e25-837a-b9010141cef0`)
            .then(res => {
                const user = res.data;
                getRank(user.id);
            })

    }
    const getRank = async (id: string) => {

        await axios.get(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=RGAPI-fee20852-2141-4e25-837a-b9010141cef0`)
            .then(res => {

                const stats = res.data;
                console.log(stats);
                for (var league of stats) {
                    var keyname = stats.queueType;
                    store.set(keyname, league);
                    /*
                    Object.entries(league).forEach(([key, value]) => {
                        var keyname = key + suffix;
                        store.set(keyname, value);
                    });*/
                }
                /*
                rank.map((item) => {
                    var suffix = item.queueType;
                    Object.entries(item).forEach(([key, value]) => {
                        store.set(key, value);
                    });
                })*/

                setUser(stats);

                context.setStats(stats);

            })

    }
    //const league = store.get('RANKED_FLEX_SR').then((r) => console.log(r));
    console.log(user);

    return {
        user,
        getUser,
        getRank
    }

}

export default useApi;