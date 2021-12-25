<template>
    <h1>{{ $t('books.title-collection') }}</h1>
    <button @click="goToSearch()">{{ $t('books.search-button') }}</button>
</template>

<script lang="ts" src="./collection-page.component.ts"></script>
<style lang="scss" src="./collection-page.component.scss" scoped></style>
