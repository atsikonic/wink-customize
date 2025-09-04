<script type="text/ecmascript">

    export default {
        computed: {
            hideLogoOnSmallScreens() {
                return this.$slots['left-side']
            }
        }
    }
</script>

<template>
    <div class="border-very-light mb-4">
        <div class="container">
            <div class="flex items-center" style="padding-top: 2.5rem; padding-bottom: 2.5rem;">
                <div class="flex items-center mr-auto h-8">

                    <slot name="left-side"></slot>
                </div>

                <div class="flex items-center">
                    <slot name="right-side"></slot>

                    <dropdown class="relative ml-6">
                        <button slot="trigger" type="button" class="focus:outline-none">
                            <img :src="Wink.author.avatar" class="rounded-full w-8 h-8" :title="Wink.author.name">
                        </button>

                        <div slot="content" class="dropdown-content pin-r min-w-dropdown mt-1 text-sm py-2">
                            <router-link :to="{name:'team-edit', params:{id: Wink.author.id}}" class="no-underline text-text-color font-sans hover:text-primary w-full block py-2 px-4 border-b border-very-light">
                                Profile
                            </router-link>
                            <router-link to="/posts" class="no-underline text-text-color hover:text-primary w-full block py-2 px-4">
                                Posts
                            </router-link>
                            <!-- <router-link to="/pages" class="no-underline text-text-color hover:text-primary w-full block py-2 px-4">
                                Pages
                            </router-link>

                            <router-link to="/tags" class="no-underline text-text-color hover:text-primary w-full block py-2 px-4">
                                Tags
                            </router-link> -->

                            <router-link to="/team" class="no-underline text-text-color hover:text-primary w-full block py-2 px-4">
                                Users
                            </router-link>
                            <a :href="'/'+Wink.path+'/logout'" class="no-underline text-text-color hover:text-primary w-full block py-2 px-4 border-t border-very-light">
                                Log out
                            </a>
                        </div>
                    </dropdown>
                </div>
            </div>
        </div>
    </div>
</template>
