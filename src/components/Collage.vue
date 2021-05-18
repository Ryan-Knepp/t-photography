<template>
  <div class="collage">
    <div
      class="familyGallery justify-self-center self-center border border-rose-300"
    >
      Family Gallery
    </div>
    <g-image
      class="topImage cell"
      :src="$static.data.heroCollageImage1.file.url"
    />
    <g-image
      class="verticalImage cell md:block"
      :src="$static.data.heroCollageImage3.file.url"
    />
    <g-image
      class="bottomImage cell"
      :src="$static.data.heroCollageImage2.file.url"
    />
    <div
      class="newbornGallery justify-self-center self-center border border-rose-300"
    >
      Newborn Gallery
    </div>
  </div>
</template>

<static-query>
query {
    data: contentfulHomePage (id: "31FUIVsozzfUPvNHZENeJP") {
        id
        heroCollageImage1 {
            title
            file {
                url
            }
        }
        heroCollageImage2 {
            title
            file {
                url
            }
        }
        heroCollageImage3 {
            title
            file {
                url
            }
        }
      }
  }
</static-query>

<style scoped>
@media screen and (max-width: 600px) {
  .collage {
    width: 100%;
  }
  .topImage,
  .bottomImage,
  .verticalImage {
    display: none;
  }
}

@media screen and (min-width: 600px) {
  .collage {
    display: grid;
    margin: 0 auto;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 30vh 30vh;
    grid-template-areas:
      "family top-image top-image"
      "bottom-image bottom-image newborn";
    justify-items: center;
    align-items: center;
  }
  .verticalImage {
    display: none;
  }
}

@media screen and (min-width: 900px) {
  .collage {
    display: grid;
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 30vh 30vh;
    grid-template-areas:
      "family top-image top-image vertical-image"
      "bottom-image bottom-image newborn vertical-image";
    justify-content: center;
    align-items: center;
  }
  .verticalImage {
    display: inherit;
  }
}

.cell {
  object-fit: cover;
  width: 100%;
  max-height: 100%;
  height: 100%;
}

.familyGallery {
  grid-area: family;
}

.topImage {
  grid-area: top-image;
}

.bottomImage {
  grid-area: bottom-image;
}

.verticalImage {
  grid-area: vertical-image;
}

.newbornGallery {
  grid-area: newborn;
}
</style>
