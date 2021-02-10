<template>
    <router-link
            v-if="projectOpened"
            title="Routes"
            :to="{ name: 'routes' }"
            active-class="bg-invoker-purple bg-opacity-25 text-invoker-purple"
            class="mt-2 group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md text-gray-500 hover:text-invoker-purple hover:bg-invoker-purple hover:bg-opacity-25 focus:outline-none transition ease-in-out duration-150"
    >
        <svg 
            class="h-5 w-5 transition ease-in-out duration-150"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
    </router-link>
</template>
<script>
export default {
    computed: {
        // You can use this property to only show the plugin, when a project is opened
        projectOpened() {
            return !!this.$store.state.project.id;
        }
    }
};
</script>