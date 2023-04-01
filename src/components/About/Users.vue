<template>
    <div class="container">
        <table  class="table table-danger">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <th>{{ user.id }}</th>
      <td>{{ user.first_name }}</td>
      <td>{{ user.last_name }}</td>
      <td>{{ user.gender }}</td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import JsObj from '../../json/users.json';

export default {
    name: 'Users',
    data: function (){
        return{
           users: JsObj,
        }
    }
}

</script>
