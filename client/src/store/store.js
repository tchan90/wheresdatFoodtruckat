//Vuex store - user and token states mutated through here. Tokens are distributed to each user when logged in. When user is logged in, their state is saved to a persisted storage
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state:{
        token: null,
        user:null,
        isUserLoggedIn:false
    },
    mutations:{
        setToken(state,token){
            state.token = token
            if(state.token){
                state.isUserLoggedIn=true
            } else {
                state.isUserLoggedIn=false
            }
        },
        setUser(state,user){
            state.user=user
        }
    },
    actions:{
        setToken({commit}, token){
            commit('setToken', token)
        },
        setUser({commit}, user){
            commit('setUser', user)
        }
    },
})