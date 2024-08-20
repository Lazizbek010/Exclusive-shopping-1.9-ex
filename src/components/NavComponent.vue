<template>
        <div class="nav bg-white border-b-2 py-5">
                <div class="container flex justify-between items-center">
                        <router-link to="/" class="logo">
                                <img width="130" height="16" src="../assets/images/logo.svg" alt="logo">
                        </router-link>
                        <div class="nav__menu flex items-center gap-11 ml-20">
                                <router-link to="/" class="text-secondary">{{ $t('woman') }}</router-link>
                                <router-link to="/about" class="text-secondary">{{ $t('men') }}</router-link>
                                <div class="nav__search flex items-center gap-5">
                                        <label class="text-secondary" for="">{{ $t('search') }}</label>
                                        <input type="text">
                                </div>
                        </div>
                        <div class="nav__right flex items-center gap-[57px]">
                                <ul class="nav__langs flex items-center gap-4">
                                        <li  @click="$i18n.locale = 'ru', lang='ru'" :class="{active: lang === 'ru'}">RU</li>
                                        <li @click="$i18n.locale = 'uz', lang='uz'" :class="{active: lang === 'uz'}">UZ</li>
                                        <li @click="$i18n.locale = 'en', lang='en'" :class="{active: lang === 'en'}">EN</li>
                                </ul>
                                <div class="nav__icons flex items-center gap-5">
                                        <router-link to="/personal-accaunt">
                                                <UserIcon></UserIcon>
                                        </router-link>
                                        <router-link to="/wishlist">
                                                <WishlistIcon></WishlistIcon>
                                        </router-link>
                                        <router-link to="/cart">
                                                <CartIcon></CartIcon>
                                        </router-link>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';
import UserIcon from '../components/icons/UserIcon.vue';
import CartIcon from '../components/icons/CartIcon.vue';
import WishlistIcon from '../components/icons/WishlistIcon.vue';
    
let lang = ref('ru');

</script>

<style lang="scss" scoped>

</style>