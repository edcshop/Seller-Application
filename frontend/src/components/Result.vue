<template>
  <form>
    <div class="ico">
          <img src="../assets/success.png" />
    </div>
    <div class="title">
        Thank you for applying to become <br />
          a seller with Creative Market!
    </div>
    <div class="description">
      Our curators are reviewing your application. We'll get back to you <br /> within <b>5-7 business days</b>. Meanwhile, you already have access to your <br /> Shop Studio, so let's start setting up your shop!
    </div>
  </form>
</template>

<script>
  export default {
    name: 'Result',
    data () {
      return {
        data: {
          firstName: '',
          lastName: '',
          category: '',
          link: '',
          linkAuthored: '',
          hasOnlineShop: '',
          sellUrls: ''
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  form .ico{
     text-align: center;
     margin-bottom: 20px;
  }

  form .title{
    /* H4 / 24px */
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    /* identical to box height, or 140% */
    margin-top: 8px;
    text-align: center;
    /* Cool Gray / 10 */
    color: #303538;
    margin-bottom: 30px;
  }

  form .description{
    font-size: 16px;
    line-height: 22px;
    /* or 140% */
    color: #303538;
    align-items: center;
    text-align: center;
    margin-bottom:114px ;
  }
</style>
