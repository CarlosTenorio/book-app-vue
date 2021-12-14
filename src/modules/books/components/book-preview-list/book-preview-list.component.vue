<template>
    <ul>
        <li v-for="book in books" :key="book.id">
            {{ book.volumeInfo.title }}
        </li>
    </ul>
</template>

<script src="./book-preview-list.component.ts"></script>
<style lang="scss" src="./book-preview-list.component.scss" scoped></style>
