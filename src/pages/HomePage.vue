<template>
  <div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
  <h1>Choose A Date!</h1>
    <div class="mt-4">
      <label for="start"></label>
      <input type="date" id="start" name=""
       value=""
       min="" max="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup(){
    return {}
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
