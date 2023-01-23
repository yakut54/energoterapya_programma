<template>
  <div :class="['drop-menu', isDrop ? 'drop' : '']" @click="toggleDrop(!isDrop)" :style="{
      backgroundImage: `linear-gradient(${bgColor}, ${bgColor}), url(${require(`@/assets/images/${bg}`)})`
    }">
    <a target="_blank" class="drop-menu-btn" href="/audio-katalog/" :style="{color: strelka, borderBottomColor: strelka}">
      <span class="drop-menu-icon"><IconSite :style="{fill: strelka, border: `1px ${strelka} solid`}"/></span>
      <span class="drop-menu-span-text">Официальный сайт</span>
    </a>
    <a target="_blank" class="drop-menu-btn" href="https://t.me/marta_ng/" :style="{color: strelka, borderBottomColor: strelka}">
      <span class="drop-menu-icon"><IconTelegram :style="{fill: strelka, border: `1px ${strelka} solid`}"/></span>
      <span class="drop-menu-span-text">ТЕЛЕГРАМ</span>
    </a>
    <a target="_blank" class="drop-menu-btn" href="https://zen.yandex.ru/marta_ng" :style="{color: strelka, borderBottomColor: strelka}">
      <span class="drop-menu-icon"><IconDzen :style="{fill: strelka, border: `1px ${strelka} solid`}"/></span>
      <span class="drop-menu-span-text">Яндекс-Дзен</span>
    </a>
    <a target="_blank" class="drop-menu-btn" href="http://marta-ng.com/zhenskii_journal/" :style="{color: strelka, borderBottomColor: strelka}">
      <span class="drop-menu-icon"><IconZhenskiZhurnal :style="{fill: strelka, border: `1px ${strelka} solid`}"/></span>
      <span class="drop-menu-span-text">Женский Журнал</span>
    </a>
    <a target="_blank" class="drop-menu-btn" href="https://marta-ng.ru/mini-site/" :style="{color: strelka, borderBottomColor: strelka}">
      <span class="drop-menu-icon"><IconSupport :style="{fill: strelka, border: `1px ${strelka} solid`}"/></span>
      <span class="drop-menu-span-text">Служба поддержки</span>
    </a>
  </div>
  <div class="drop-menu-wrapper" :style="{
      backgroundImage: `linear-gradient(${bgColor}, ${bgColor}), url(${require(`@/assets/images/${bg}`)})`
    }">
    <div class="drop-menu-img">
      <img src="@/assets/images/sidebar-img.png" alt="" />
    </div>
    <div class="drop-switch">
      <i 
        :style="{color: strelka}" 
        @click="toggleDrop(!isDrop)"
        :class="['fa', 'switch-btn', isDrop ? 'fa-times' : 'fa-bars']" 
        aria-hidden="true"
      ></i>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import IconSite from './icons/IconSite'
import IconTelegram from './icons/IconTelegram'
import IconDzen from './icons/IconDzen'
import IconZhenskiZhurnal from './icons/IconZhenskiZhurnal'
import IconSupport from './icons/IconSupport'

export default {
  computed: {
    ...mapState(['bg', 'bgColor', 'strelka', 'isDrop'])
  },
  methods: {
    ...mapMutations(['toggleDrop'])
  },
  components: {
    IconZhenskiZhurnal,
    IconSite, IconTelegram,
    IconSupport, IconDzen
  }
}
</script>

<style scoped>

</style>