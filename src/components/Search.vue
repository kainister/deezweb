<template>
    <div>
        <h1>Chercher une musique</h1>
        <form @submit.prevent="submit">
            <label for="title">Titre :</label>
            <input type="text" v-model="title" id="title">
            <br>
            <label for="searchBy">Trier par :</label>
            <select v-model="searchBy" id="searchBy">/
                <option value="ALBUM_ASC">Album</option>
                <option value="ARTIST_ASC">Artiste</option>
                <option value="TRACK_ASC">Musique</option>
                <option value="RANKING_ASC">Les plus populaires</option>
                <option value="RATING_ASC">Les mieux notés</option>
            </select>
            <br>
            <br>
            <button type="submit">Submit</button>
        </form>
        <div v-if="music" class="musics">
            <CardMusic v-for="(item, index) in music.data" :key="index" :music="item" />
        </div>
        <div v-else>
            No music found
        </div>
    </div>
</template>

<script>
import CardMusic from '@/components/CardMusic.vue'
import MusicService from '@/services/MusicService.js'

export default {
    name: "search",
    data() {
        return {
            title: '',
            music: null,
            searchBy: 'ARTIST_ASC'
        }
    },
    components: {
        CardMusic
    },
    methods: {
        submit(){
            MusicService.search(this.title, this.searchBy).then((music) => {
                this.music = music
            })
        }
    },

}
</script>

<style>
.musics {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
