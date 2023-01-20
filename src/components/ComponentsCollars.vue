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
    img-src="https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/711/7db/c51/4cef6b0184abb1e02986e1a.jpg_600_0_3_b0d1.jpg"
    img-alt="Image"
    img-top
    tag="article"
    
    class="mb-2"
  >
    <b-card-text>
      Collar 1
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
    img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR8tA8rl1sWMjgS7l92JiFTXkcurPBPvz0wrE-DYA-bjlr91A"
    img-alt="Image"
    img-top
    tag="article"
    
    class="mb-2"
  >
    <b-card-text>
      Collar 2
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
    img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8cIkjpCke02k6fJ00Iper-tpZzgXI2AxCzaURQdZZQesSonx"
    img-alt="Image"
    img-top
    tag="article"
    
    class="mb-2"
  >
    <b-card-text>
      Collar 3
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
    img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_MgMcso8l0iCNBCIWh85-XYXksR1fdPCx_J6Y1C--paLCy4UI"
    img-alt="Image"
    img-top
    tag="article"
    
    class="mb-2"
  >
    <b-card-text>
      Collar 4
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
    img-src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPt56oFCW_cdw_uUkWrAQHtis8gxgloLoEgpm159gzqS13_z_x"
    img-alt="Image"
    img-top
    tag="article"
    
    class="mb-2"
  >
    <b-card-text>
      Collar 5
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
    img-src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdwimE60XXYYHmJFcDKCQi7WnQj3FOgmBaIMvrhNLfCi5fohrj"
    img-alt="Image"
    img-top
    tag="article"
    
    class="mb-2"
  >
    <b-card-text>
      Collar 6
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
 border:1px solid rgb(0, 0, 0);
}

</style>
