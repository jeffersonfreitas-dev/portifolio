<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-jeff-green-1">
      <div class="flex h-full flex-nowrap px-8">
        <div class="ml-12 flex w-full">
          <a
            v-bind:href="url"
            class="text-bg-white text-1xl flex h-full items-center text-xl text-white"
            >{{ company }}</a
          >
        </div>
        <div class="mr-12 flex w-full justify-end">
          <nav class="h-full">
            <ul class="flex h-full list-none text-white">
              <li
                v-for="menuItem in menuItens"
                v-bind:key="menuItem"
                class="ml-9 h-full"
              >
                <a href="#" class="flex h-full items-center py-2.5">{{
                  menuItem
                }}</a>
              </li>
            </ul>
          </nav>
          <div class="ml-auto flex h-full items-center">
            <profile-image v-if="isLoggedIn" v-on:click="logoutUser" />
            <action-button v-else v-on:click="loginUser" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "Jefferson Freitas",
      url: "https://jeffersonfreitas-dev.github.io",
      menuItens: ["Sobre", "Projetos", "Contato", "Blog"],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
    logoutUser() {
      this.isLoggedIn = false;
    },
  },
};
</script>
