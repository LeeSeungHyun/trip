<template>
  <form id="container"> 
    <div id="image-preview">
      <label for="image-upload" id="image-label">Choose File</label>
      <input type="file" ref="file" name="image" id="image-upload" data-width="500" data-height="500" @change="onFileChanged($event)" accept="image/*" />
      <img alt="" v-if="imageSrc != null" :src=imageSrc id="image"/>
    </div>
    <div id="contents">
      <div>
        <input type="text" placeholder="Please put the content.." name="idea" v-model="idea">
      </div>
      <div>
        <input type="text" placeholder="where are you?" name="location" v-model="location">
      </div>
      <div>
        <button type="button" class="styled-button" id="submit-button" @click="onClickSubmit">
          <span>Upload</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { tripWrite } from '@/api/index.js';

export default {
  data(){
    return {
      imageSrc: '',
      file: '',
      idea: '',
      location: ''
    }
  },
  methods: {
     onFileChanged(event) {
      const file = event.target.files[0];
      let reader = new FileReader();

      this.file = file;
      reader.onload = (e) => {
        this.imageSrc= e.target['result'];
      };
      reader.readAsDataURL(file);
    },
    onClickSubmit() {
      const formData = new FormData();
      formData.append('googleid', this.$route.query.googleid);
      formData.append('username', this.$route.query.username);
      formData.append('idea', this.idea);
      formData.append('location', this.location);
      formData.append('userfile', this.file);

      tripWrite(formData)
      .then(res => {
        this.$router.push('list')
      })
      .catch(res => {

      })
    }
  }
}
</script>

<style scoped>
#container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 40px 40px;
  border-radius: 4px;
  background-color: #F0F0F0;
  border: 1px solid rgba(0,0,0,0.2);
}

#image {
  border: 0;
  width: 100%;
  height: 100%;
}

#image-preview {
  width: 360px;
  height: 360px;
  border: 1px solid #5882FA;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  color: #fff;
  float: left;
}
#image-preview input {
  line-height: 130px;
  font-size: 130px;
  position: absolute;
  opacity: 0;
  z-index: 10;
}
#image-preview label {
  position: absolute;
  z-index: 5;
  opacity: 0.8;
  cursor: pointer;
  background-color: #5882FA;
  width: 130px;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  text-transform: uppercase;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
}

#contents > div:nth-child(2){
  margin-top: 20px;
}

#contents > div:nth-child(3){
  margin-top: 114px;
}

#contents {
  float: right;
  /* width: 500px; */
}

#container::after {
  display: block;
  content: "";
  clear: both;
}

#back {
  position: absolute;
}

/* input box */
:-moz-placeholder {
  color: #5882FA !important;
  font-size: 13px;
}

::-webkit-input-placeholder {
  color: #5882FA;
  font-size: 13px;
}

input {
  font-family: 'MONTSERRAT', Tahoma, Verdana, sans-serif;
  font-size: 12px;
}

input[type=text] {
  margin: 4px;
  padding: 0 10px;
  width: 430px;
  height: 36px;
  color: #5882FA;
  background: white;
  border: 1px solid #5882FA;
  border-radius: 4px;  
}

input[type=text]:focus {
  border-color: #5882FA;
  outline-color: #5882FA;
  outline-offset: 2;
}

#submit-button {
  margin-right: 10px;
  padding: 2px;
  font-size: 17px;
  color: #000;
  background: linear-gradient(to right, #fdde5c, #f8ab5e, #f56a62, #a176c8, #759beb, #65beb3, #70db96);
  border-radius: 10px;
}

#submit-button > span {
  display: block;
  padding: 8px 12px;
  font-size: 14px;
  background: #fff;
  border-radius: 10px;
}

button {
  margin: 0;
  padding: 0;
  font-size: 1em;
  background: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  outline: 0;
  cursor: pointer;
  -webkit-appearance: none;
}

@media screen and (max-width: 1060px) {
  #image-preview {
    width: 360px;
    height: 360px;
    margin: 0 auto;
    float: none;
  }

  #contents {
    width: 360px;
    margin: 0 auto;
    float: none;
    padding: 0;
  }

  input[type=text] {
    margin: 4px;
    padding: 0 10px;
    width: 360px;
    height: 36px;
    color: #5882FA;
    background: white;
    border: 1px solid #5882FA;
    border-radius: 4px;  
  }
  
  #contents > div:nth-child(1){
    margin-top: 30px;
  }
}

@media screen and (max-width: 768px) {
  #image-preview {
    width: 280px;
    height: 280px;
    margin: 0 auto;
    border: 1px solid #5882FA;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
    color: #fff;
    float: none;
  }

  #contents {
    width: 280px;
    margin: 0 auto;
    float: none;
    padding: 0;
  }

  input[type=text] {
    margin: 4px;
    padding: 0 10px;
    width: 280px;
    height: 36px;
    color: #5882FA;
    background: white;
    border: 1px solid #5882FA;
    border-radius: 4px;  
  }
  
  #contents > div:nth-child(1){
    margin-top: 30px;
  }
}
</style>