<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits<{
    'update:checked': [val: boolean | boolean[]]
}>();

const { checked = false, value = null } = defineProps<{
    checked: boolean | boolean[];
    value: string | null;
}>();

const proxyChecked = computed({
    get() {
        return checked;
    },

    set(val) {
        emit('update:checked', val);
    },
});
</script>


<template>
    <input v-model="proxyChecked" type="checkbox" :value="value"
        class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800">
</template>
