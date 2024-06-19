<template>
    <h1>Add resteaurant </h1>
    <input type="text" v-model="name" placeholder=" ENTRER VOTRE NOM  " />
    <input type="number" v-model="contact" placeholder=" ENTRER VOTRE CONTACT  " />
    <input
      type="text"
      v-model="adresse"
      placeholder=" ENTRER VOTRE ADRESSE  "
    />
    <button v-on:click="Add">Add restaurant </button>
</template>
<script>
import axios from 'axios';
export default {
    name:'Add-page',
    data(){
        return{
            name:'',
            adresse:'',
            contact:'',
        }

    },
    methods:{
         async Add(){
            let resultat=await axios.post("http://localhost:3000/restaurant",{
                name:this.name,
                adresse:this.adresse,
                contact:this.contact


            });
            console.warn(resultat);
         }
    }

}
</script>
