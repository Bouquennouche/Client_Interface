<template>
    <div class="container">
      <h1>{{ pageTitle }}</h1>
      <p>{{ pageParagraphe }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Blog',
    data: function () {
      return {
        pageTitle: 'Blog',
        pageParagraphe: 'This is Blog page',
      };
    },
  };
  </script>
  