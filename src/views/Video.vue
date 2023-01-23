<template>
	<div class="video inner-page">
		
		<div class="media-window" :style="{boxShadow: `4px 4px 15px 4px ${config.data[idx].playerColorGragient[0]}`}">
			<back-button />

			<div 
				class="video_title aeb" 
				:style="{color: config.data[idx].playerColorGragient[0]}"
				v-html="title"
			></div>
			<div 
				class="aeb title3_"
			>
				{{ titleBtn }}
			</div>

			<div class="rec-block">
				<div class="row dop-10">
					<div class="rec-img">
						<img src="@/assets/images/audio-mini.png" alt="">
					</div>
					<div class="rec-content">
						<div class="rec-text-block">Сеанс принимай в наушниках. 
							<span class="rec-text-span">Это важно.</span>
						</div>
					</div>
				</div>
			</div>
			
			<div class="video-wrapper" :style="{border: `1px solid ${config.data[idx].playerColorGragient[0]}`}">
				<div class="video-top teleport">
					<video 
						ref="video"
						:src="config.data[idx].source" 
						:poster="require(`../assets/images/${config.data[idx].img}`)">
					</video>
					<div 
						@click="fullscreenVideo" 
						class="fullscreen"
						:style="{backgroundImage: `radial-gradient(${config.data[idx].playerColorGragient[0]}, #fff)`}"
					>
						<i class="fa fa-arrows-alt" aria-hidden="true" :style="{color: config.data[idx].strelka}"></i>
					</div>
				<!-- teleport play button -->
				</div>
				<div class="video-bottom">
					<player :player="player" :src="config.data[idx].source"/>
				</div>
    	</div>

			<span 
				v-if="idx === 3 && $route.name !== 'procedure'"
				class="dop-btn-procedure asb" 
				:style="{
					color: '#fff',
					backgroundImage: `radial-gradient(${config
						.data[idx].playerColorGragient[0]}, ${config
							.data[idx].playerColorGragient[1]})`
				}"
				@click="$router.push(`/video/procedure`)"
			>
				ПРОЦЕДУРА КУРСОМ
			</span>

		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ref } from 'vue'

export default {
	name: 'Video',
	setup() {
		const video = ref(null)
		const player = () => video.value

		const fullscreenVideo = () => {
			if (video.value) {
				video.value.requestFullscreen()
			}
		}

		return { video, player, fullscreenVideo }
	},
	data() {
		return {
			idx: 0,
			title: '',
		}
	},
	computed: {
		...mapState(['config']),
	},
	methods: {
		...mapMutations(['changeColor', 'changeBg', 'changeStrelka', 'changeIsSidebarOpen']),
	},
	mounted() {
		this.idx = +localStorage.getItem('idx') || 0
		this.title = this.config.data[this.idx].title
		this.titleBtn = this.config.data[this.idx].titleBtn
		this.changeBg(this.config.data[this.idx].bg)
		this.changeColor(this.config.data[this.idx].bgColor)
		this.changeStrelka(this.config.data[this.idx].strelka)
		this.$title(this.config.data[this.idx].titleBtn)
		this.changeIsSidebarOpen(false)
		window.scrollTo(0, 0)
	},
}
</script>

<style></style>
