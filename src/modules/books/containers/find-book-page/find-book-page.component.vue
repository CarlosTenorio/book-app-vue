<template>
    <h1>{{ $t('books.title-collection') }}</h1>
    <Form @submit="onSubmit" v-slot="{ meta }">
        <Field name="search" type="text" v-model="search" :rules="validateForm" />
        <ErrorMessage name="search" />
        <div>
            <button :disabled="(meta && !meta.valid) || loadingBooks">
                {{ $t('books.search-button') }}
            </button>
        </div>
    </Form>
    <SpinnerComponent v-if="loadingBooks" />
    <BookPreviewComponent v-if="!loadingBooks" :books="books" />
</template>

<script src="./find-book-page.component.ts"></script>
<style lang="scss" src="./find-book-page.component.scss" scoped></style>
