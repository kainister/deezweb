<template>
    <article>
        <div>
            <img :src="music.artist.picture" alt="image de la musique">
            <p>Titre :  {{music.title}}</p>
            <p>Artiste :{{music.artist.name}}</p>
        </div>
        <div>
            <audio :src="music.preview" controls></audio>
            <br>
            <div>
                <button class="fav" @click="addToFav(music.key)">Ajouter aux favoris</button>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'CardMusic',
    data() {
        return {
            favMusic: []
        }
    },
    props: {
        music: Object,
    },
    methods: {
        addToFav(key) {
            this.favMusic.push(this.music[key]);
            localStorage.setItem('favoriteSong', JSON.stringify(this.favMusic));
        }
    },
}
</script>

<style>
article {
    margin: 20px 0;
}
.fav {
   background-color: red;
   color: white;
   border: none;
   border-radius: 5%; 
}
</style>
