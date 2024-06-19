<template>
  <div class="home">
    <Header></Header>
    <h1>hello {{name}} ,welcome to home page </h1>
    <table border="1px" >
      <tr v-for="item in restaurant" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.adresse }}</td>
          <td>{{ item.contact }}</td>
      </tr>
    </table>
  </div>
    </template>
<script>
import Header from './header.vue'
import axios from "axios";
export default {
    name:'Home-page',
    data(){
      return {
        name:'',
        restaurant:[],
      }
    },
    components:{
      Header
    },
    
    async mounted() {
      let user = localStorage.getItem("user-info");
      this.name=JSON.parse(user).name;
      if (!user) {
        this.$router.push({
          name: "SignUp",
        });
      }
      let result=await axios.get("http://localhost:3000/restaurant");
      console.warn(result);
      this.restaurant=result.data;
    },
}

</script>
<style>
*{
  margin:0%;
  padding: 0%;
}
</style>