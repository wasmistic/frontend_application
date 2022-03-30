 
 
 
 const state={
    form:[
      {
      },
    ],
  }
  const getters={
    fetch_user:(state)=>state.form,
  }
  const mutations={
    SET_USER:(state,payload)=>state.form.push(payload),
    DELETE:(state,payload)=>state.form.splice(payload,1),
    EDIT:(state,payload)=>state.form.splice(payload,1),
  }
  const actions={
    get_user_form(context,payload){
      context.commit('SET_USER',payload)
      console.log('am click', payload)
    },
    delete_btn(context,payload){
        context.commit('DELETE',payload)
    },
    edit_btn(context,payload){
      context.commit('EDIT',payload)
  },
  }
  export default{
    state,
    getters,
    mutations,
    actions
};