<template>
   <table class="table container">
  <thead>
    <tr>
      <th scope="col">CIN</th>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Genre</th>
      <th scope="col">Date de naissence</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="patient in patients" :key="patient.CIN">
      <td scope="row">{{ patient.CIN }}</td>
      <td>{{ patient.NOM }}</td>
      <td>{{ patient.PRENOM }}</td>
      <td>{{ patient.GENRE }}</td>
      <td>{{ patient.DATE_NAISSANCE }}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import axios from 'axios'

export default {
   data(){
    return{
        patients:[],
        
    } 
   },
   created(){
        this.getPatients();
        
   },
   methods:{
    async getPatients(){
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/patient');
            this.patients = response.data;
            
        }
        catch(error){

        }
    }
   },
}


</script>

<style scoped>
table{
    color: black;
}
</style>