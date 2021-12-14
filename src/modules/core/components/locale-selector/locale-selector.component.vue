<template>
    <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
            {{ locale }}
        </option>
    </select>
</template>

<script src="./locale-selector.component.ts"></script>
<style lang="scss" src="./locale-selector.component.scss" scoped></style>
