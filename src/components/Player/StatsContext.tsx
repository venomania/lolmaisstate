import { createContext, useContext } from 'react';

export type Stats = {
    freshBlood: boolean,
    hotStreak: boolean,
    inactive: boolean,
    leagueId: string,
    leaguePoints: number,
    losses: number,
    queueType: string,
    rank: string,
    summonerId: string,
    summonerName: string,
    tier: string,
    veteran: boolean,
    wins: number,
}

export interface StatsContext {
    stats: Stats[];
    setStats: Function;
}

export const StatsContext = createContext<StatsContext>({
    stats: [],
    setStats: () => null
});