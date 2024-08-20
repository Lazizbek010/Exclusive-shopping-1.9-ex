<template>
        <div>
                <Nav />
                <RouterView /> 
                <Footer />
        </div>
</template>

<script setup>
import Nav from '../components/NavComponent.vue'
import Footer from '../components/FooterComponent.vue'

</script>

<style lang="scss" scoped>

</style>