import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state:{ 
    user:{},
    allUsers:[],
    todos:[],
    chats:[],
    allEvents:[],
  },

    mutations:{
        addLoginUserToState (state, user){
            state.user = user
        },
        addAllUsersToState(state, allUsers) {
            state.allUsers = allUsers
          },
        addAllUserTodosToState(state, allUserTodos) {
            state.todos = allUserTodos
          },
        newTodoToState(state, newTodos) {
            state.todos = newTodos
        },
        deleteTodoFromState(state, tid) {
            var deleteTodo = state.todos.map(function(item){return item.id;}).indexOf(tid); //select todo that just deleted by search tid
            state.todos.splice(deleteTodo,1) // remove that deleted todo
        },
        newChatToState(state, chats) {
            state.chats = chats
        },
        addAllChatsTodosToState(state, chats) {
            state.chats = chats
        },
        newEventToState(state, allEvents) {
            state.allEvents = allEvents
        },
        updatedUserToState(state, user) {
            state.user = user[0]
        },
        addUserToState(state, user) {
            state.user = user[0]
        },
        addAllEventsToState(state, allEvents) {
            state.allEvents = allEvents
        },
    },

    getters:{
        getAllUserTodos: state => {
            return state.todos
        }
    },

    actions:{
       registNewUser({commit}, payload){    //post new user
           axios.post('http://localhost:8000/user/register', payload)
                .then(res=> commit('newUserToState', res.data))
                .catch(error => {
                    console.log(error)
                })
       },
       login({commit}, payload){        //login a user
        console.log("payload",payload)
            let{rtr, ...userCreds} = payload
            axios.post('http://localhost:8000/user/login', userCreds)
                 .then(res=> {
                    commit('addLoginUserToState', res.data)
                    console.log('res.data',res.data)
                    rtr.push(`/user/${res.data.id}/dashboard`)
                 })
                 .catch(error => {
                    console.log(error)
        })
       },
       getAllUser({ commit }) {     //get all users for dashboard
        axios.get('http://localhost:8000/users')
          .then(response => {
            commit('addAllUsersToState', response.data)
          })
          .catch(error => {
            console.log(error)
        })
      },
      getUser({ commit },id) {     
        axios.get(`http://localhost:8000/user/${id}`, id)
          .then(response => {
            commit('addUserToState', response.data)
          })
          .catch(error => {
            console.log(error)
        })
      },
       postTodo({commit}, payload){    //post new user
        axios.post('http://localhost:8000/todo', payload)
             .then((res)=> 
             commit('newTodoToState', res.data)         //commited entire todos by each post
             )
             .catch(error => {
                 console.log(error)
             })
        },
        getUserTodos({ commit },id) {     //get all users for dashboard
            axios.get(`http://localhost:8000/usertodos/${id}`)
            .then(response => {
                commit('addAllUserTodosToState', response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        deleteTodo({commit}, tid) {
            commit('deleteTodoFromState', tid)
            axios.delete(`http://localhost:8000/todo/${tid}`, tid)
                 .catch(error => {
                    console.log(error)
                })
        },
        postChat({commit}, payload){    //post new chat
            axios.post('http://localhost:8000/chat', payload)
                 .then((res)=> 
                 commit('newChatToState', res.data)         //commited entire todos by each post
                 )
                 .catch(error => {
                     console.log(error)
                 })
            },
        getChats({ commit },id) {     //get all users for dashboard
            axios.get('http://localhost:8000/chats')
                .then(response => {
                    commit('addAllChatsTodosToState', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
            },
        postEvent({commit}, payload){    //post new event
            console.log('event payload', payload)
            axios.post('http://localhost:8000/event', payload)
                 .then((res)=> 
                 commit('newEventToState', res.data)         //commited entire events by each post
                 )
                 .catch(error => {
                     console.log(error)
                 })
            },
        profileUpdate({commit}, payload){    
            axios.patch(`http://localhost:8000/user/${payload.id}`, payload)
                 .then((res)=> 
                 commit('updatedUserToState', res.data)         //commited only one updated user
                 )
                 .catch(error => {
                     console.log(error)
                 })
            },
        getEvents({ commit }) {     //get all users for dashboard
            axios.get('http://localhost:8000/events')
                .then(response => {
                    commit('addAllEventsToState', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
            },
}
}) 


