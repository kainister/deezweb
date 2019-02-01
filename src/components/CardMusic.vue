<template>
    <article>
        <div>
            <img :src="music.artist.picture" alt="image de la musique">
            <p>Titre :  {{music.title}}</p>
            <p>Artiste :{{music.artist.name}}</p>
        </div>
        <div>
            <audio :src="music.preview" controls class="preview"></audio>
            <br>
            <div>
                <button class="fav" @click="addToFav()">Ajouter aux favoris</button>
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
        addToFav() {
            //if(localStorage.getItem('favoriteSong') === null) {
                this.favMusic = JSON.parse(localStorage.getItem('favoriteSong'));
            //}
            localStorage.removeItem('favoriteSong');
            this.favMusic.push(this.music);
            localStorage.setItem('favoriteSong', JSON.stringify(this.favMusic));
        }
    },
}
</script>

<style>
article {
    border: solid black 1px;
    margin: 20px 5px;
    height: 300px;
}
.preview {
    max-width: 250px;
}
.fav {
   background-color: red;
   color: white;
   border: none;
   border-radius: 5%; 
}
</style>
