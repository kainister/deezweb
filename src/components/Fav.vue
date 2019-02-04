<template>
    <div>
        <h1>Mes favoris</h1>
        <div v-if="favedMusic" class="musics">
            <CardMusic v-for="(item, index) in favedMusic" :key="index" :music="item" />
        </div>
        <div v-else>
            No music found
        </div>
    </div>
</template>

<script>
import CardMusic from '@/components/CardMusic.vue'

export default {
name: "fav",
    data() {
        return {
            favedMusic: {},
        }
    },
    components: {
        CardMusic
    },
    created() {
        const savedMusic = localStorage.getItem('favoriteSong');
        this.favedMusic = JSON.parse(savedMusic)
    }
}
</script>

<style>
.musics {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
