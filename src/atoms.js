// create 4 new atoms for networkAtom , jobsatom , notificationAtom , and messageingAtom just like a linkedin 

import {atom,selector} from 'recoil';

export const networkAtom = atom({
    key : 'networkAtom',
    default : 104,
});

export const jobsAtom = atom({
    key : 'jobsAtom',
    default : 0,
});

export const notificationAtom = atom({
    key : 'notificationAtom',
    default : 12,
});

export const messageingAtom = atom({
    key : 'messageingAtom',
    default : 0,
});

// use derived state to calculate the total notification count by using selector 

export const totalNotificationCountSelector = selector({
    key : 'totalNotificationCount',
    get: ({get})=>{
        const networkNotificationCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messageingAtomCount = get(messageingAtom);
        return networkNotificationCount + jobsAtomCount + notificationAtomCount + messageingAtomCount;
    }
})