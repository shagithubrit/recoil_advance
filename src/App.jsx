import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useRecoilValue} from 'recoil';
import {networkAtom, jobsAtom, notificationAtom, messageingAtom , totalNotificationCountSelector} from './atoms.js';
import {RecoilRoot} from 'recoil';
import './App.css'

function App() {
  return (
    <>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
      
    </>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom); 
  const messageingAtomCount = useRecoilValue(messageingAtom);


  // const totalNotificationCount = networkNotificationCount + jobsAtomCount + notificationAtomCount + messageingAtomCount;  // problem with this approach is that every time when this component renders it will recalculate the sum of all the atoms even if any of them is not changed 
  //  so to optimise this we can use useMemo


  // const totalNotificationCount = useMemo(()=>{
  //   return networkNotificationCount + jobsAtomCount + notificationAtomCount + messageingAtomCount; 
  // }, [networkNotificationCount, jobsAtomCount, notificationAtomCount, messageingAtomCount]);         // but this is looking bit complicated ...so we use selector instead

  const totalNotificationCount = useRecoilValue(totalNotificationCountSelector);
 

  return (
    <>
    <button>My network({networkNotificationCount >=100 ? '100+' : networkNotificationCount})</button>
    <button>Jobs ({jobsAtomCount})</button>
    <button>Messaging({messageingAtomCount})</button>
    <button>Notification({notificationAtomCount})</button>
    <button >Me ({totalNotificationCount}) </button>
    </>
  )
}

export default App
