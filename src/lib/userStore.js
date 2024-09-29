import { create } from 'zustand';
import { doc,getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const useUserStore = create((set) => ({
  currenUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) =>{
    if(!uid) return set({currenUser:null, isLoading: false})

    try{
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            set({currenUser:docSnap.data(), isLoading:false});
        }else{
            set({currenUser: null, isLoading: false});
        }
    }catch(err){
        console.log(err)
        return set({currenUser:null, isLoading:false});
    }
  }
}))
