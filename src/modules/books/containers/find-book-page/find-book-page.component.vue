<template>
    <h1>Find a Book</h1>
    <input v-model="search" />
    <p>Message is: {{ search }}</p>
    <button @click="searchBook()">Search</button>
    <ul>
        <li v-for="book in books" :key="book.id">
            {{ book.volumeInfo.title }}
        </li>
    </ul>
</template>

<script src="./find-book-page.component.ts"></script>
<style lang="scss" src="./find-book-page.component.scss"></style>
