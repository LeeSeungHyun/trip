<template>
  <div id="container">
    <form> 
      <div id="image-preview">
        <label for="image-upload" id="image-label">Choose File</label>
        <input type="file" name="image" id="image-upload" accept="image/*" />
        <img alt="" id="image"/>
      </div>
      <div id="contents">
        <div>
          <input type="text" placeholder="한 줄 생각" name="idea">
        </div>
        <div>
          <input type="text" placeholder="너의 위치는?" name="location">
        </div>
        <div>
          <button type="button">뒤로가기</button>
          <button type="submit" id="submit-button">작성하기</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 40px 80px;
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
  width: 420px;
  height: 420px;
  border: 1px solid #5882FA;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  color: #fff;
  display: inline-block;
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
  display: inline-block;
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
  width: 460px;
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
  margin-right: 20px;
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
    float: none;
    margin: 0 auto;
  }
  
  #contents > div:nth-child(1){
    margin-top: 30px;
  }
}
</style>