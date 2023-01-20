<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <p>
        <b-button v-b-toggle.sidebar-footer>Més</b-button>
      <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer"  :backdrop-variant="variant"
        backdrop
        shadow>
        <template #footer="{ hide }">
         <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Contacte</strong>
          <b-button size="sm" @click="hide">@</b-button>
         </div>
        </template>
        <div class="px-3 py-2">
          <p>
            Cerca
          </p> ---
          <p>
            Carrito
          </p>
      
        </div>
      </b-sidebar>
      </p>
      <h3>Catàleg</h3>
      <p>
  
        <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
          <b-card
      title="50 €"
      img-src="https://purepng.com/public/uploads/large/purepng.com-ringclothingringfashion-jewelry-ring-stone-love-wedding-object-gold-accessory-diamond-jewel-marriage-relationship-wed-marry-jewellery-6315223297631aybx.png"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Anell 1
      </b-card-text>
  
      <b-button href="#" variant="dark">Comprar</b-button>
    </b-card>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <b-card
      title="50 €"
      img-src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6FzRzkBmCj8NqsWcf2Nv2nxKM-CPZQLnbRZShfE0NdtQCXBbn"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Anell 2
      </b-card-text>
  
      <b-button href="#" variant="dark">Comprar</b-button>
    </b-card>
        </div>
      </div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
          <b-card
      title="50 €"
      img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXGV5gdVEF1Wyn_Cwk-GQC4eEwlv6YWGVBZKzNNpCvM4_qWjU"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Anell 3
      </b-card-text>
  
      <b-button href="#" variant="dark">Comprar</b-button>
    </b-card>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <b-card
      title="50 €"
      img-src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcROve-SRP8PsxpU0cD2Ln9tmlGIiosIe3DotfAg_N6YJMdgZ_x7"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Anell 4v
      </b-card-text>
  
      <b-button href="#" variant="dark">Comprar</b-button>
    </b-card>
        </div>
      </div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
          <b-card
      title="50 €"
      img-src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAb9l4maSvmxtoZ2JaCNTJLxu_38xR5NnXLyUFhF7E2R_NpM4C"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Anell 5
      </b-card-text>
  
      <b-button href="#" variant="dark">Comprar</b-button>
    </b-card>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <b-card
      title="50 €"
      img-src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2cb8_ZlhV7u3L0TtsujAkl2siJ4bkECahgYgJX2161w4odFi8"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Anell 6
      </b-card-text>
  
      <b-button href="#" variant="dark">Comprar</b-button>
    </b-card>
        </div>
      </div>
    </div>
  </div>
  
      </p>
    
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #ffffff;
  }
  .container {
      display: flex;
      justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
    }
     .card{
   border:1px solid black;
  }
  
  </style>
  