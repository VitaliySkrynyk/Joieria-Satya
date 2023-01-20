<template>
  <div class="home">
    <img alt="Joieria logo" src="../assets/satya-jewelry-logo-hd-png-download.png" width="240" height="160">
  
    <ComponentsCollars msg="Accessuaris al teu gust."/>
  </div>
</template>

<script>
// @ is an alias to /src

import ComponentsCollars from '@/components/ComponentsCollars.vue';


export default {
  name: 'CollarsView',
  components: {
    ComponentsCollars
}
}
</script>
