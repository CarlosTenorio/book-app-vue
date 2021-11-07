<template>
    <h1>Find a Book</h1>
    <input v-model="search" />
    <p>Message is: {{ search }}</p>
    <button @click="search()">Search</button>
</template>

<script src="./find-book-page.component.ts"></script>
<style lang="scss" src="./find-book-page.component.scss"></style>
