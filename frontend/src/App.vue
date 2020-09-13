<template>
  <div id="app">
    <div class="logo-container">
      <img class="logo" src="./assets/logo.jpg">
    </div>
    <router-view/>
    <div style="clear: both" />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: Averta, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
  @media screen{
    #app .logo{
      margin-top: 20px;
      margin-left: 56px;
      /* Cool Gray / 10 */
      background: #303538;
    }
    body{
      background: url("./assets/bottom.png") bottom center no-repeat;
      background-size: 100%;
      width: 100%;
      height: 100%;
      display:inline-block;
      *display: inline;
    }

    form {
      position: relative;
      width: 565px;
      top: 50%;
      left: 50%;
      margin: 209px 0 137px -345px;
      background: #FFFFFF;
      padding: 46px;
      box-shadow: 0 2px 10px rgba(226, 233, 238, 0.6);
      border-radius: 8px;
    }

    form .submit {
      float: right;;
      background: #008980;
      border-radius: 4px;
      border: none;
      order: 0;
      color: #ffffff;
      margin: 0px 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      width: 152px;
      text-align: center;
      padding: 13px 56px;

    }

    form .width272 {
      width: 272px;
    }

    form .username-last-name {
      margin-left: 21px;
    }


    form .back{
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      display: flex;
      align-items: center;
      text-align: center;
      float: left;
      color: #088178;
      padding: 13px 56px 13px 0;
    }
  }

  @media screen and (max-width: 800px) {
    body{
      margin: 0;
      background: none;
      background-size: 100%;
      width: 100%;
      height: 100%;
      display:inline-block;
      *display: inline;
      overflow-x: hidden;
      vertical-align: top;
    }

    .logo-container{
      display: inline-block;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      height: 87px;
      text-align: center;
      line-height: 87px;
      width: 100%;
    }

    #app .logo{
      text-align: center;
      margin-left: 0;
      margin-top: 20px;
      background: #FFFFFF;
    }

    form {
      position: relative;
      top: 0;
      left: 0;
      width:auto;
      /*margin: 209px 0 0 0;*/
      background: #FFFFFF;
      padding: 0;
      margin: 21px;
      box-shadow: none;
      border-radius: 0;
    }

    form .submit {
      float: right;;
      background: #008980;
      border-radius: 4px;
      border: none;
      order: 0;
      color: #ffffff;
      margin: 0px 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      width: 96%;
      text-align: center;
      padding: 13px 56px;
    }

    form .width272 {
      width: 98%;
    }

    form .username-last-name {
      margin-left: 4%;
      width: 48%;
    }

    form .username-first-name {
      width: 48%;
    }


    form .back{
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      display: flex;
      align-items: center;
      text-align: center;
      float: left;
      color: #088178;
      padding: 13px 56px 13px 0;
      width: 96%;
      justify-content: center;
    }
  }

</style>
