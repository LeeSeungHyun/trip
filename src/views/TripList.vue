<template>
  <main>
    <div class="container">
      <div class="gallery">
        <div class="gallery-item" tabindex="0">
          <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" class="gallery-image" alt="">
          <div class="gallery-item-info">
            <ul>
              <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
              <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
            </ul>
          </div>
        </div>
  
        <div class="gallery-item" tabindex="0">
          <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" class="gallery-image" alt="">
          <div class="gallery-item-info">
            <ul>
              <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 89</li>
              <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 5</li>
            </ul>
          </div>
        </div>

        <div class="gallery-item" tabindex="0">
          <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" class="gallery-image" alt="">
          <div class="gallery-item-info">
            <ul>
              <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
              <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
  :root {
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  body {
    font-family: "Open Sans", Arial, sans-serif;
    min-height: 100vh;
    background-color: #fafafa;
    color: #262626;
    padding-bottom: 3rem;
  }

  img {
      display: block;
  }

  .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
  }

  /* Gallery Section */

  .gallery {
      display: flex;
      flex-wrap: wrap;
      margin: -1rem -1rem;
      padding-bottom: 3rem;
  }

  .gallery-item {
      position: relative;
      flex: 1 0 22rem;
      margin: 1rem;
      color: #fff;
      cursor: pointer;
  }

  /* .gallery-item:hover .gallery-item-info,
  .gallery-item:focus .gallery-item-info {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
  } */

  .gallery-item-info {
      display: none;
  }

  .gallery-item-info li {
      display: inline-block;
      font-size: 1.7rem;
      font-weight: 600;
  }

  .gallery-item-likes {
      margin-right: 2.2rem;
  }

  .gallery-item-type {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2.5rem;
      text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  }

  .fa-clone,
  .fa-comment {
      transform: rotateY(180deg);
  }

  .gallery-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
</style>