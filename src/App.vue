<template>
	<div class="app">
		<div class="app-wrapper">
			<div class="app-content">
				<DropMenu />

				<main :style="{backgroundImage: `url(${require(`@/assets/images/${bg}`)})`}">
					<div class="page">
						<router-view />
					</div>
				</main>

				<AppFooter />
				<div
					class="overlay"
					@click="toggleDrop(false)"
					:style="{ display: isDrop ? 'block' : 'none' }"
				></div>
			</div>
			<AppSidebar />
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppFooter from '@/components/AppFooter.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import DropMenu from '@/components/Drop.menu.vue'

export default {
	name: 'App',
  computed: {
    ...mapState(['bg', 'isSidebarOpen', 'isDrop'])
  },
  methods: {
    ...mapMutations(['toggleDrop'])
  },
	components: {
		AppFooter,
		AppSidebar,
		DropMenu,
	},
}
</script>

<style>
@import url(@/assets/css/styles.css);
@import url(@/assets/css/media.css);
</style>
