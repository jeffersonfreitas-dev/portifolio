<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-jeff-green-1">
      <div
        class="flex h-full flex-nowrap border-b border-solid bg-jeff-green-1 px-8"
      >
        <a
          href="#"
          class="text-bg-white text-1xl flex h-full items-center text-xl text-white"
          >{{ company }}</a
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Jefferson Freitas",
    };
  },
};
</script>
