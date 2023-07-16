<template>
  <div class="bg-[#fff] w-full h-full md:bg-[#FFFBEB] overflow-auto relative">
    <div class="flex flex-col justify-start items-stretch">
      <Menu/>
      <ShowRoom/>
      <TheBestOf/>
      <JoinUs/>
      <LoveUs/>
      <GrowCollection/>
      <ShoesCollected/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/css-work-components/Menu.vue'
import ShowRoom from '@/components/css-work-components/ShowRoom.vue'
import TheBestOf from '@/components/css-work-components/TheBestOf.vue'
import JoinUs from '@/components/css-work-components/JoinUs.vue'
import LoveUs from '@/components/css-work-components/LoveUs.vue'
import GrowCollection from '@/components/css-work-components/GrowCollection.vue'
import ShoesCollected from '@/components/css-work-components/ShoesCollected.vue'
import Footer from '@/components/css-work-components/Footer.vue'
export default {
  data(){
    return{
      
    }
  },
  components:{
    Menu,
    ShowRoom,
    TheBestOf,
    JoinUs,
    LoveUs,
    GrowCollection,
    ShoesCollected,
    Footer
  }
}
</script>

<style lang="scss" scoped>
</style>