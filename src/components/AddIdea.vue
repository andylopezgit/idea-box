<template>
  <section class="mb-6">
    <form @submit.prevent="addIdea" class="sm:flex">
      <input
        v-model="idea"
        type="text"
        required
        placeholder="Ingresar idea"
        class="w-full p-3 sm:flex-auto border-4 border-grey"
      />
      <input
        v-if="user"
        type="submit"
        value="Agregar Idea"
        class="w-full p-2 bg-gray-400 sm:flex-1"
      />
    </form>
    <p class="user-actions" v-if="!user">
      Por favor 👉<a class="font-bold underline" href="#" @click="doLogin"
        >click</a
      >
      Logearse
    </p>
    <p class="user-actions" v-else>
      Hola 👽 {{ user.displayName }} <a href="#" @click="doLogout">Logout</a>
    </p>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "AddIdea",
  emits: ["do-login", "do-logout", "add-idea"],
  props: {
    user: {
      type: [Object, null],
    },
  },
  setup(props, { emit }) {
    const idea = ref("");

    const doLogin = () => emit("do-login");
    const doLogout = () => emit("do-logout");

    const addIdea = () => {
      emit("add-idea", idea);
      idea.value = "";
    };

    return { doLogin, doLogout, props, idea, addIdea };
  },
};
</script>

<style>
</style>