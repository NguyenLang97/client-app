import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyCUjbR0_kk-OLMn-Ufm6euPjQOdSrBIDsw',
    authDomain: 'adminshop-a495d.firebaseapp.com',
    projectId: 'adminshop-a495d',
    storageBucket: 'adminshop-a495d.appspot.com',
    messagingSenderId: '878826870522',
    appId: '1:878826870522:web:c70a48308d68521d221b43',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)
