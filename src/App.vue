<script setup>
import Header from './components/Header.vue';
import Quiz from './components/Quiz.vue';
import Reference from './components/Reference.vue';
</script>

<template>
  <div class="flex flex-col bg-white py-8 px-6 shadow rounded gap-x-10 gap-y-20">
    <!-- <HelloWorld msg="Vite + Vue" /> -->
     <div class="">
       <Header/>
     </div>

     <div class="flex">
       <Quiz/>
     </div>
     
     <div class="flex">
       <Reference/>
     </div>
  </div>
</template>
