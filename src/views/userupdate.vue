<template>
    <div>
      <!-- <h2>{{ get_store}}</h2> -->
      <!-- <h3>{{fetch_user}}</h3> -->
       <table>
     <thead>
       <tr>
         <th> Title</th>
          <th>Category</th>
           <th>Description</th>
           <th>Image Url</th>
       </tr>
     </thead>
     <tbody>
       <tr v-for="(item,index) in fetch_user" :key="index">
         <td>
           {{item.a}}
         </td>
         <td>
           {{item.b}}
         </td>
         <td>
           {{item.c}}
         </td>
         <td>
         <img :src="item.image" alt="">
         </td>
         <td> <router-link style="margin-right:2px" tag="button" @click="btn_click(item)" :to="{path:`/updateuser/${index}`}">Edit</router-link> <button  @click="delete_btn($route.params.id)">delete</button>  </td>
       </tr>
     </tbody>
   </table>
    <router-link style="float:right" tag="button" to="/">Back</router-link>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

    export default {
        props:['id'],
        name:'userupdate',
        data()
        {
            return{
             form:[]
            }
        },
        computed:{
          ...mapGetters(['fetch_user']),
            get_store(){
                return this.fetch_user
            }
        },
        methods:{
          ...mapActions(['delete_btn']),
           btn_click(item){
             console.log('item', item)
           }
        }
    }
</script>

<style lang="scss" scoped>

</style>