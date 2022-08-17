import { createApp } from 'vue';

import App from './App.vue';

import {createStore} from 'vuex';

const store = createStore({
    state() {
       return {
              count: 10,
           tit: 'Hello Vuex'

       }
    },
    mutations: {
        addMethod(state) {
            state.count = state.count + 20 ;
        },
        subMethod(state, payload) {
            state.count = state.count - payload.value ;
        }

    },
    actions: {
        addMethod(context) {
            setTimeout(() => {
                context.commit('addMethod');
            }, 4000);
        },
            subMethod(context, payload)
            {
                context.commit('subMethod', payload);
            },


        },
    getters: {
        finalCount(state) {
            return state.count  ;
        },
        reverbFinalCount(state) {
            console.log(state.count);
            const finalCount = state.count ;
            if(finalCount > 100) {
                return ' Higher than 100  less than wahtevers ' ;
            }if (finalCount < 100) {
                return "small count" ;
            }
            return "Overdose !!!!";
        },
        addTxt(state){

            console.log(state.tit);
            return  state.tit ;
        }
    }

});



const app = createApp(App);

app.use(store);

app.mount('#app');
