<template>
  <aside
    :class="{'active-sidebar': isSidebarOpen}"
    :style="{
      backgroundImage: `linear-gradient(${bgColor}, ${bgColor}), url(${require(`@/assets/images/${bg}`)})`
    }"
  >
    <IconStrelka @click="open" :style="{fill: strelka}"/>
    <div class="inner-sidebaer">
      <a href="https://marta-ng.com/audio-katalog/" class='aside-logo'>
        <img src="@/assets/images/sidebar-img.png" alt="logo" class="brand-logo"/>
      </a>
      <div class="aside-menu-wrapper">
        <a target="_blank" class="aside-menu-btn" href="/audio-katalog/">Официальный сайт</a>
        <a target="_blank" class="aside-menu-btn" href="https://t.me/marta_ng/">ТЕЛЕГРАМ</a>
        <a target="_blank" class="aside-menu-btn" href="https://zen.yandex.ru/marta_ng">Яндекс-Дзен</a>
        <a target="_blank" class="aside-menu-btn" href="https://marta-ng.com/zhenskii_zhurnal_d/">Женский Журнал</a>
        <a target="_blank" class="aside-menu-btn" style="border-top: 1px dashed #c09d52" href="https://marta-ng.ru/mini-site/">техподдержка</a>
      </div>
    </div>

    <div class="icon-inner-sidebar">
      <a href="/audio-katalog/"><IconSite :style="{fill: strelka, border: `2px ${strelka} solid`}"/></a>
      <a href="https://t.me/marta_ng/"><IconTelegram :style="{fill: strelka, border: `2px ${strelka} solid`}"/></a>
      <a href="https://zen.yandex.ru/marta_ng"><IconDzen :style="{fill: strelka, border: `2px ${strelka} solid`}"/></a>
      <a href="https://marta-ng.com/zhenskii_zhurnal_d/"><IconZhenskiZhurnal :style="{fill: strelka, border: `2px ${strelka} solid`}"/></a>
      <a href="https://marta-ng.ru/mini-site/"><IconSupport :style="{fill: strelka, border: `2px ${strelka} solid`}"/></a>
    </div>

  </aside>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['changeIsSidebarOpen']),
    open(){
      this.changeIsSidebarOpen(!this.isSidebarOpen)
    }
  },
  computed: {
    ...mapState(['bg', 'bgColor', 'isSidebarOpen', 'strelka'])
  },
}
</script>

<style scoped>
aside{
  position: relative;
}

</style>