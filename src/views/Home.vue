<template>
  <div class="home">
     <!-- {{$store.state.form}} -->
   <table>
     <thead>
       <tr>
         <th> Title</th>
          <th>Category</th>
           <th>Description</th>
           <th>Image Url</th>
           <th></th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>
           <input type="text" v-model="form.a">
         </td>
         <td>
           <input type="text" v-model="form.b">
         </td>
         <td>
           <input type="text" v-model="form.c">
         </td>
         <td>
          <label for="image" v-if="!form.image">
            <input type="file" name="image" @change="onChange">
        </label>
        <img  v-else :src="form.image" alt="">
         </td>
         <td>
           <router-link tag="a" :to="{path:`/user/${index}`}">view details</router-link>
         </td>
       </tr>
     </tbody>
   </table>
  <button @click=" send_form">send</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      image:'',
      form:  {
       a:'',
      b:'',
      c:'',
      image:'',
      }
    }
  },
  computed:{
    ...mapGetters(['fetch_user']),
  },
  methods:{
    ...mapActions(['get_user_form']),
    send_form(){
      this.get_user_form(this.form)
      // this.form=''
      alert('click view detail button for all list')
    },
      onChange(e) {
        var files = e.target.files;
        this.createFile(files[0]);
      },
      createFile(file) {
        if (!file.type.match('image.*')) {
          alert('Select an image');
          return;
        }
        var img = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = function(e) {
          vm.form.image = e.target.result;
        }
        reader.readAsDataURL(file);
      },
      removeFile() {
        this.image = '';
      },
  }
}
</script>
<style>
table{
  width: 100%;
  margin-inline: auto;
  border: 1px solid #ccc;
}
table.tr{
  width: calc(100%/4);
  border-bottom: 1px solid #ccc;
}
thead.tr{
  border-bottom: 1px solid #ccc;
}
img{
  width: 80px;
  height: 80px;
  border-radius:5px;
}
button{
  padding:.7rem  1.2rem;
  background: blue;
  color: #fff;
  border-radius: 4px;
  outline:none;
  border: none;
  margin-left: auto;
  margin-top:1rem;
}
.home{
  width: 90%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>