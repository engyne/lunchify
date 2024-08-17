<script setup lang="ts">
import axios from 'axios';
import NxWelcome from './NxWelcome.vue';

function callApi() {
  console.log('hello');
  axios
    .get('http://localhost:3333/api')
    .then((response) => {
      console.log(response.data.message);
    })
  axios
    .get('http://localhost:3333/api/places')
    .then((response) => {
      console.log(response.data);
    })
}

callApi();
</script>

<template>
  <NxWelcome title="Lunchify" />
</template>
