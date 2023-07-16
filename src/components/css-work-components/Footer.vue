<template>
  <div class="footer-main w-full bg-[#0F172A] max-[639px]:pb-[100px]">
    <div class="footer container mx-auto px-[16px] gap-[32px] relative flex flex-col justify-start items-start">
      <div class="button-area w-full flex justify-between items-stretch border-b border-b-solid border-b-[#334155] py-[48px] max-[639px]:flex-col max-[639px]:gap-[48px]">
        <div v-for="(item,i) in footerItems" :key="'buttonsGroup'+i" class="buttons-wrapper flex flex-col justify-start items-stretch flex-[1_0_0%] max-[639px]:items-center">
          <div class="main text-[1.6rem] font-bold text-[#fff] text-left py-[12px] cursor-pointer select-none">
            {{item.main}}
          </div>
          <div v-for="(lowItem,k) in item.items" :key="'lowItem'+k" class="items text-[1.6rem] font-normal text-[#E2E8F0] text-left py-[12px] cursor-pointer select-none">
            {{lowItem}}
          </div>
        </div>
        <div class="get-app flex flex-col justify-between items-stretch flex-[1_0_0%] max-[639px]:items-center max-[639px]:gap-[56px]">
          <div class="app-buttons flex flex-col justify-start items-stretch gap-[8px] max-[639px]:items-center">
            <div class="main text-[1.6rem] font-bold text-[#fff] text-left py-[12px] cursor-pointer select-none">
              Get the App
            </div>
            <div class="ios-app-store text-[#fff] rounded-[8px] flex justify-start items-center gap-[8px] cursor-pointer select-none">
              <img class="select-none pointer-events-none" src="@/assets/icons/app_store.svg" alt="">
            </div>
            <div class="google-play text-[#fff] rounded-[8px] flex justify-start items-center gap-[8px] cursor-pointer select-none">
              <img class="select-none pointer-events-none" src="@/assets/icons/google_play.svg" alt="">
            </div>
          </div>
          <div class="social-media flex flex-col justify-start items-stretch max-[639px]:items-center">
            <div class="main text-[1.6rem] font-bold text-[#E2E8F0] text-left py-[12px] cursor-pointer select-none">
              Follow Us
            </div>
            <div class="social-media-icons flex justify-start items-center gap-[18px]">
              <a v-for="(item,i) in socialMedias" :key="'social'+i" target="_blank" :href="item.link">
                <img :src="require('../../assets/icons/'+item.icon)" :alt="item.title">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="terms flex justify-between items-center w-full max-[639px]:flex-col max-[639px]:gap-[24px]">
        <div class="copyright text-[#E2E8F0] text-[1.6rem] font-normal">
          Collers @ 2023. All rights reserved.
        </div>
        <div class="footer-menus-wrapper flex justify-start items-center gap-[32px]">
          <div v-for="(item,i) in footerMenuItems" :key="'fotterMenu'+i" class="footer-menu-items flex justify-center items-center gap-[8px]">
            <img v-if="item.icon" :src="require('../../assets/icons/'+item.icon)" alt="">
            <div class="menu-text text-[1.6rem] text-[#E2E8F0] font-normal select-none cursor-pointer">
              {{item.title}}
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      footerItems:[
        {main:'Product',items:[
          'Pricing',
          'Overview',
          'Browse',
          'Accessibility',
          'Five'
        ]},
        {main:'Solutions',items:[
          'Brainstorming',
          'Ideation',
          'Wireframing',
          'Research',
          'Design'
        ]},
        {main:'Support',items:[
          'Contact Us',
          'Developers',
          'Documentation',
          'Integrations',
          'Reports'
        ]},
      ],
      socialMedias:[
        {title:'Youtube',icon:'youtube.svg',link:'https://www.youtube.com/@BaykarTechnologies'},
        {title:'Facebook',icon:'facebook.svg',link:'https://www.facebook.com/BaykarTech/'},
        {title:'Twitter',icon:'twitter.svg',link:'https://twitter.com/BaykarTech'},
        {title:'Instagram',icon:'instagram.svg',link:'https://www.instagram.com/baykartech/'},
        {title:'Linkedin',icon:'linkedin.svg',link:'https://www.linkedin.com/company/baykar/'},
      ],
      footerMenuItems:[
        {title:'Terms'},
        {title:'Privacy'},
        {title:'Contact'},
        {title:'En',icon:'world.svg'},
      ]
    }
  }
}
</script>

<style>

</style>