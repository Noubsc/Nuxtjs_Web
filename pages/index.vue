<template>
<div>
    <h1>Index page</h1>
    <button @click="getPosts">Show Posts</button>
    <br/>
    <br/>
    <div  class="grid-container">
        <div v-for="item in products" class="grid-item">
            <img :src="item.thumbnail" />
            <p>{{ item.title }}</p>
        </div>       
    </div>
    
    

  
   
</div>
</template>




<script>

export default {
  data() {
    return {
      products: {}
    }
  },
  methods: {
    getPosts() {        
      fetch('/api/student')
        .then(response => response.json())
        .then(data => this.products = data.products)
    }
  }
}

</script>


<style scoped>
img{
    border-radius: 10px;
    width: 300px;
    height: 200px;
    
}

div {
    padding: 100px;
 }

 div > #pr {
    padding: 10px;
 }

 .grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 5px;
}
.grid-item {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>