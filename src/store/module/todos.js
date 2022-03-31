 
 
 
 const state={
    form:[
      {
      },
    ],
    update_form:{},
  }
  const getters={
    fetch_user:(state)=>state.form,
    update_data:(state)=>state.update_form,
  }
  const mutations={
    SET_USER:(state,payload)=>state.form.push(payload),
    DELETE:(state,payload)=>state.form.splice(payload,1),
    EDIT:(state,payload)=>state.update_form=payload,
    UPDATE:(state,payload)=>state.form.splice(payload,1,payload)
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