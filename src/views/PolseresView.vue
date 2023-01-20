<template>
  <div class="home">
    <img alt="Joieria logo" src="../assets/satya-jewelry-logo-hd-png-download.png" width="240" height="160">
  
    <ComponentsPolseres msg="Accessuaris al teu gust."/>
  </div>
</template>

<script>
// @ is an alias to /src

import ComponentsPolseres from '@/components/ComponentsPolseres.vue';


export default {
  name: 'HomeView',
  components: {
    ComponentsPolseres
}
}
</script>
