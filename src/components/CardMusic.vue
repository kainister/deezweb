<template>
    <article>
        <div>
            <img :src="music.artist.picture" alt="image de la musique">
            <p>Titre :  {{music.title}}</p><br>
            <p>Artiste :{{music.artist.name}}</p>
        </div>
        <div>
            <audio :src="music.preview" controls></audio>
            <br>
            <div class="fav">
                <p>Ajouter aux favoris</p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'CardMusic',
    props: {
        music: Object
    }
}
</script>

<style>
.fav {
   border: solid red 1px;
}
</style>
