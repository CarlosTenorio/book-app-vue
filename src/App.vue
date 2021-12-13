<template>
    <div id="app">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './modules/core/components/header/header.component.vue';

export default {
    name: 'App',
    components: {
        Header
    }
};
</script>

<style lang="scss" src="./assets/styles/styles.scss" scoped></style>
