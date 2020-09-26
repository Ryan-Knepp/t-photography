<template>
  <div class="w-screen grid grid-cols-3">
    <div>Family Gallery</div>
    <g-image :src="$static.data.heroCollageImage1.file.url" />
    <g-image :src="$static.data.heroCollageImage3.file.url" />
    <g-image :src="$static.data.heroCollageImage2.file.url" />
    <div>Newborn Gallery</div>
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