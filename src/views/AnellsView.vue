<template>
    <div class="home">
      <img alt="Joieria logo" src="../assets/satya-jewelry-logo-hd-png-download.png" width="240" height="160">
    
      <ComponentsAnells msg="Accessuaris al teu gust."/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src

import ComponentsAnells from '@/components/ComponentsAnells.vue';

  

  
  
  export default {
    name: 'HomeView',
    components: {
    ComponentsAnells
}
  }
  </script>