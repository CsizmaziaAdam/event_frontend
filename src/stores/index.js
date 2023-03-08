import {defineStore} from 'pinia';
import Axios from '../services/dataservice.js'

export const useEventstore = defineStore({
    id:'TutorialStore',
    state:()=>({
        events:[],
    }),
    getters:{

    },
    actions:{

        getAll(){
            return Axios.get('/')
                .then(resp =>{
                    this.events = resp.data;
                })
                .catch()
        }

    }
});