<script type="text/ecmascript">

    export default {
        /**
         * The component's data.
         */
        data() {
            return {};
        },


        /**
         * Prepare the component.
         */
        mounted() {
            document.title = "404 — Wink.";
        },


        methods: {}
    }
</script>

<template>
    <div class="w-screen min-h-screen flex flex-col">
        <div class="flex flex-1 w-screen">
            <sidebar></sidebar>
            <main class="container-fluid flex-1 w-full">
                <page-header></page-header>
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="card">
                            <h2 class="mb-5 text-center">404 — Not found</h2>

                            <p class="text-center">The page you're looking for couldn't be found!</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
