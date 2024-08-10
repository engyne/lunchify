<script setup lang="ts">
import axios from 'axios';
import NxWelcome from './NxWelcome.vue';

function callApi() {
  console.log('hello');
  axios
        .get('http://localhost:3333/api') // Making the GET request to the API
        .then((response) => {
          console.log(response.data.message); // Set the message from the API response
        })

}

callApi();
</script>

<template>
  <NxWelcome title="Lunchify" />
</template>
