<template>
  <article class="p-4 mb-4 rounded-lg bg-gray-500 sm:flex sm:items-center">
    <section class="text-center sm:flex-1 sm:text-left">
      <h2 class="text-xl sm:text-2xl sm:l">
        {{ idea.name }}
      </h2>
      <small class="text-center">{{ idea.userName }}</small>
    </section>

    <!-- navegacion -->
    <section
      class="
        p-3
        border-t-2
        mt-6
        border-black
        sm:pt-0
        sm:pl-3
        sm:border-t-0 sm:border-l-2
        sm:mt-0
        sm:flex
        sm:items-center
      "
    >
      <h3 class="text-3xl font-bold text-center">{{ idea.votes }}</h3>
      <nav class="flex justify-center sm:block">
        <img
          class="w-10 cursor-pointer transform rotate-180"
          src="@/assets/flecha.png"
          alt="up"
        />
        <img
          class="w-10 cursor-pointer transform"
          src="@/assets/flecha.png"
          alt="down"
        />
      </nav>
    </section>
  </article>
</template>

<script>
export default {
  name: "AppIdea",
  
  props: {
    idea: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>