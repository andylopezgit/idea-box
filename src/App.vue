<template>
  <!-- Contenedor principal -->
  <div class="container mx-auto p-4">
    <!-- Caja -->
    <div class="w-full bg-gray-100 shadow-lg p-4">
      <h1 class="mb-5 text-3xl text-center">Idea Box</h1>

      <!-- coponente para agregar una idea -->
      <add-idea 
        :user="user" 
        @do-login="doLogin" 
        @do-logout="doLogout" 
        @add-idea="addIdea"
      />
      <!-- fin componente para agregar una idea -->

      <!-- componete cada idea -->
      <app-idea v-for="(idea, $index) in ideas" :key="$index" :idea="idea" />
      <!-- fin de componente idea -->
    </div>
  </div>
</template>

<script>
import AddIdea from "./components/AddIdea.vue";
import AppIdea from "./components/AppIdea.vue";
import seed from "@/seed.json";
import { ref } from "vue";
import { auth, db, firebase } from "@/firebase.js";
export default {
  name: "App",
  components: { AppIdea, AddIdea },
  setup() {
    let user = ref(null);

    auth.onAuthStateChanged(async (auth) => (user.value = auth ? auth : null));
    const ideas = ref(seed.ideas);

    const doLogin = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();

      try {
        await auth.signInWithPopup(provider);
      } catch (error) {
        console.log(error);
      }
    };

    const addIdea = async (data) => {
      try {

        await db.collection("ideas").add({
          name: data.value,
          user: user.value.uid,
          userName: user.value.displayName,
          votes: 0
        })

      } catch(error) {
        console.log(error)
      }
    };

    const doLogout = async () => {
      try {
        await auth.signOut();
      } catch (error) {
        console.log(error);
      }
    };

    return { ideas, user, doLogin, doLogout, addIdea };
  },
};
</script>

<style>
.user-actions {
  @apply mt-2 text-center;
}
</style>