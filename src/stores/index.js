import {defineStore} from 'pinia';
import Axios from '../services/dataservice.js'

export const useEventstore = defineStore({
    id:'TutorialStore',
    state:()=>({
        events:[],
        properties:[],
    }),
    getters:{

    },
    actions:{

        getAll(){
            return Axios.get('/event')
                .then(resp =>{
                    this.events = resp.data;
                })
                .catch()
        },
        getProperties(){
            return Axios.get('/properties')
                .then(resp =>{
                    this.properties = resp.data;
                })
                .catch()
        }

    }
});