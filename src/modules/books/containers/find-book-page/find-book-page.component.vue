<template>
    <h1>Find a Book</h1>
    <input v-model="search" v-on:keyup.enter="searchBook()" />
    <button @click="searchBook()">Search</button>
    <SpinnerComponent v-if="loadingBooks" />
    <BookPreviewComponent v-if="!loadingBooks" :books="books" />
</template>

<script src="./find-book-page.component.ts"></script>
<style lang="scss" src="./find-book-page.component.scss" scoped></style>
