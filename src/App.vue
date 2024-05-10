<script>
import { mapGetters } from 'vuex'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Loader from './components/Loader/Loader.vue'

export default {
  components: {
    HeaderComponent: Header,
    FooterComponent: Footer,
    Loader
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<template>
  <Loader v-if="isLoading" />
  <HeaderComponent />
  <main>
    <RouterView />
  </main>
  <FooterComponent />
</template>
