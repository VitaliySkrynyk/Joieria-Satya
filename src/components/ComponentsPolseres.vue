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
      img-src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSv16O5g3-rVKYpFiwfV8LoDGvQ3IWs6d5EamUhh91HroulJO9P"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Polsera 1
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
      img-src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT43ipvgzDkAAlJ7PxWTQonBcAexzX1GXBY5NPD99_H22oubCoG"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Polsera 2
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
      img-src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRr1MCxVgL6LKNkbDtHRgPACftr5sQSiijX9o_5SUE0Ne9I4F4O"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Polsera 3
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
      img-src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFQEnb9pd-O_DjuUafE0ZJz2Gd3uHcD2YXfsJpPvhzni_gIWHG"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Polsera 4
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
      img-src="https://t1.gstatic.com/images?q=tbn:ANd9GcRp4pktMtNoDPRvU74tJ0_uithdVTU6o0Lr5kc_ngXDB7WaVRuG"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Polsera 5
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
      img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpt7AtGE-6YLG29z7NlWPiHe8Bbgc_vyC1eaHjT8aGrb14pR8s"
      img-alt="Image"
      img-top
      tag="article"
      
      class="mb-2"
    >
      <b-card-text>
        Polsera 6
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
  