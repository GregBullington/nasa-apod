<template>
<div class="container-fluid">
  <div class="row justify-content-center m-4">
<div class="col-md-4 card elevation-2 text-center">
  <img :src="loadAPOD.url" alt="image">
  <b>{{loadAPOD.date}}</b>
  <p>{{loadAPOD.title}}</p>
</div>
</div>
</div>
</template>


<script>
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { apodsService } from "../services/APODsService"
import { computed, onMounted } from "@vue/runtime-core"
import { AppState } from "../AppState"

export default {
  name: 'TAPOD',
  setup(){
    onMounted(async () => { 
    try {
        await apodsService.getAPOD()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
        
      }
    })
    return {
      loadAPOD : computed(() => AppState.apod)
    }
    }
  }
</script>


<style lang="scss" scoped>

</style>