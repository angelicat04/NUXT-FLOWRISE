<script setup>

  import { ref, onMounted } from 'vue';

  import { getData } from '../../composables/useApi';


  const articles = ref([]);
  const loading = ref(true);
  const query = ref("technology"); 

  const fetchArticles = async () => {
    console.log("fetchArticles called"); 
    try {
      console.log("fetchArticles called with query:", query.value); 
      const response = await getData("everything", { q: query.value, pageSize: 10 });

      if (response && response.articles) {
        articles.value = response.articles;
      } else {
        articles.value = [];
      }

      console.log("Response from API:", response); 
    } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
    } finally {
        loading.value = false;
    }
  };

  onMounted(() => {
    fetchArticles();
  });

  useHead({
    title: 'Blog'
  })

</script>

<template>
  <div>
    <h1 class="font-bold text-4xl px-8">BLOG</h1>
    
    <!-- <h1>Articles sur {{ query }}</h1> -->
    <p v-if="loading" class="h-screen flex justify-center items-center text-2xl">Chargement des articles...</p>
    <div v-else-if="articles.length">
      <section class="md:grid grid-cols-2 gap-4 px-8 py-4">
        <div v-for="article in articles" :key="article.url" class="w-full flex flex-col justify-center items-start p-6 border mb-12 ">
          <img :src="article.urlToImage" alt="Image de l'article" v-if="article.urlToImage" class="w-full"/>
          <h2 class="font-bold text-2xl w-4/5 mb-4">{{ article.title }}</h2>
          <p class="w-4/5 mb-4">{{ article.description }}</p>
          <NuxtLink :to="`/blog/${encodeURIComponent(article.url)}`"><ReadMoreButton/></NuxtLink>
        </div>

      </section>

    </div>
    <p v-else>Aucun article trouvé...</p>
  </div>
</template>

