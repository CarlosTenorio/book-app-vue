<template>
    <h1>Find a Book</h1>
    <input v-model="search" v-on:keyup.enter="searchBook()" />
    <button @click="searchBook()">Search</button>
    <SpinnerComponent v-if="loadingBooks" />
    <ul v-if="!loadingBooks">
        <li v-for="book in books" :key="book.id">
            {{ book.volumeInfo.title }}
        </li>
    </ul>
</template>

<script src="./find-book-page.component.ts"></script>
<style lang="scss" src="./find-book-page.component.scss" scoped></style>
