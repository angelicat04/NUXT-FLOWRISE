<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useApi } from  '../../composables/useApi';

const route = useRoute();
const article = ref(null);
const loading = ref(true);

const {getData} = useApi();

const fetchArticle = async () => {
  try {
    const articleUrl = decodeURIComponent(route.params.id);
    console.log("Fetching article with URL:", articleUrl);

    const response = await getData("everything", { q: "technology", pageSize: 50 });

    if (response.articles) {
      article.value = response.articles.find((a) => a.url === articleUrl);
    }
    console.log("Article trouvé :", article.value);

  } catch (error) {
    console.error("Erreur lors de la récupération de l'article :", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchArticle();
});
</script>

<template>
  <div v-if="loading" class="h-screen flex justify-center items-center text-2xl">Chargement...</div>
  <div v-else-if="article" class="w-4/5 flex flex-col m-auto">
    <h1 class="font-bold text-3xl mb-4">{{ article.title }}</h1>
    <img :src="article.urlToImage" alt="Image de l'article" v-if="article.urlToImage" class="max-h[400px] mb-4 " />
    <p class="mb-12">{{ article.content || article.description }}</p>
    <hr>
    <p><strong>Auteur :</strong> {{ article.author || "Inconnu" }}</p>
    <p><strong>Date :</strong> {{ new Date(article.publishedAt).toLocaleDateString() }}</p>
    <a :href="article.url" target="_blank">Lire l'article complet</a>
  </div>
  <p v-else>Aucun article trouvé.</p>
</template>


