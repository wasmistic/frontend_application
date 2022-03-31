<template>
  <div class="home">
    <form @submit.prevent="" >
       <label for="name">Title</label>
       <input v-model="form.a" type="text">
        <label for="name">Category</label>
       <input v-model="form.b" type="text">
        <label for="name">Description</label>
       <input v-model="form.c" type="text">
       <label for="image">Image</label>
      <label for="image" v-if="!form.image">
            <input type="file" name="image" @change="onChange">
        </label>
        <img  v-else :src="form.image" alt="">
      <div class="btn_wrap">
        <router-link tag="a" :to="{path:`/user/${index}`}">view details</router-link>
         <button @click="send_form">Submit</button>
      </div>
     </form>
   <!-- <table>
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
           
         </td>
       </tr>
     </tbody>
   </table> -->
  <!-- <button @click="">send</button> -->
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
.btn_wrap{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
form{
  min-width: 30%;
  max-width: 100%;
  border-radius:10px;
  display: flex;
  align-items:flex-start;
  justify-content:center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border:1px solid #ccc;
  overflow: hidden;
  padding: 2rem;
  padding-left:1rem;
}
input{
  width: 100%;
  padding:.6rem;
  outline: none;
  border-radius:4px;
  border:1px solid #ccc;
  margin:.5rem 0rem;
}
label{
  font-weight:500;
  font-size:.8rem;
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