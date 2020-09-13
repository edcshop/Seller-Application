<template>
  <form>
    <div class="top-tips">
      <span class="top-tips-left">SELLER APPLICATION</span>
      <span class="top-tips-right">STEP 2 OF 2</span>
    </div>
    <div class="title">
      Tell us a little about yourself
    </div>
    <div class="description">
      Your answers will help us provide you with a more personalized experience as a seller!
    </div>

    <div class="form-item">
      <div class="username-last-name-label input-lable">
        When creating products to sell, which best describes your perspective on quality?
      </div>
      <select name="quality" class="category-select input fullwidth" v-model="form.quality">
        <option v-for="(item, index) of qualityList" :value="index" :key="index">{{item}}</option>
      </select>
    </div>

    <div class="form-item">
      <div class="username-last-name-label input-lable">
         How would you describe your experience level as an online seller?
      </div>
      <select name="experience" class="category-select input fullwidth" v-model="form.experience">
        <option v-for="(item, index) of experienceList" :value="index" :key="index">{{item}}</option>
      </select>
    </div>

    <div class="form-item">
      <div class="username-last-name-label input-lable">
        How would you describe your understanding of business and marketing?
      </div>
      <select name="category" class="category-select input fullwidth" v-model="form.understanding">
        <option v-for="(item, index) of understandingList" :value="index" :key="index">{{item}}</option>
      </select>
    </div>

    <div class="form-item" style="margin-bottom: 0; padding: 4px 0">
      <input type="button" class="submit" value="Next" @click="submitData"/>
      <div class="back" @click="goBack"> <&nbsp;Back</div>
      <div style="clear: both"></div>
    </div>
  </form>
</template>

<script>
  import {
    collectionCreate
  }
  from '../api/apis'

  export default {
    name: 'StepOne',
    data () {
      return {
        form: {
          firstName: '',
          lastName: '',
          category: '0',
          link: '',
          linkAuthored: '',
          hasOnlineShop: '',
          sellUrls: '',
          quality: 0,
          experience: 0,
          understanding: 0
        },
        qualityList: [
          'Select Answer',
          'I don\'t care what is takes, my products are the highest quality possible',
          'I put in enough effort to make my product pretty high quality, but at some point my time is better spent elsewhere',
          'I try to get quality products out quickly, event if ineed to take a sortcut now and then',
          'I spend the minimum amount of time & effort it takes to create products that are acceptable quality.',
          'Quantify is more important to me than qulity.'
        ],
        experienceList: [
          'Select Answer',
          'I sell on multiple marketplaces and through my own website',
          'I have experience selling through multiple marketplaces',
          'I have experience selling through one online marketplace',
          'I\'m new to selling creative products online'
        ],
        understandingList: [
          'Select Answer',
          'I have an extensive background in business and/or marketing',
          'I\'m familiar with some skills & techniques, but I\'m not sure how to apply them where selling my creative work',
          'I\'m vaguely aware of basic business & marketing concepts',
          'I\'m not interested in understanding business & marketing'
        ]
      }
    },
    mounted () {
      let params = this.$route.params;
      this.form.firstName = params.firstName;
      this.form.lastName = params.lastName;
      this.form.category = params.category;
      this.form.link = params.link;
      this.form.linkAuthored = params.linkAuthored;
      this.form.hasOnlineShop = params.hasOnlineShop;
      this.form.sellUrls = params.sellUrls;
    },
    methods: {
      submitData: function () {
        console.log(this.form);
        collectionCreate(this.form).then(data => {
          if (data.data.errno === 0) {
            this.$router.push('Result');
          }
        }).catch(error => {
          console.log(error)
        })
      },
      goBack: function () {
        this.$router.go(-1);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .top-tips{
    height: 12px;
  }

  .top-tips .top-tips-left{
    /* Label / 12px */
    float: left;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    align-items: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #303538;
  }

  .top-tips .top-tips-right{
    text-align: left;
    /* Step 1 of 2 */
    float: right;
    /* Label / 12px */
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    /* identical to box height, or 100% */
    align-items: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    /* Cool Gray / 10 */
    color: #303538;
  }

  form .title{
    /* H4 / 24px */
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    /* identical to box height, or 140% */

    margin-top: 8px;
    text-align: left;
    /* Cool Gray / 10 */
    color: #303538;
    margin-bottom: 24px;
  }

  form .description{
    /* Body / 16px Regular */
    font-size: 16px;
    line-height: 22px;
    /* or 140% */
    text-align: left;
    display: flex;
    align-items: center;

    /* Cool Gray / 10 */

    color: #303538;

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    align-self: center;
    margin-bottom: 24px;

    font-family: Averta;
    font-style: normal;
    font-weight: 600;
    /* or 140% */
  }

  form .input, form select option{

    /* Neutral Gray / 1 */

    background: #FBFBFD;
    /* Cool Gray / 7 */

    border: 1px solid #899298;
    box-sizing: border-box;
    border-radius: 4px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    height: 40px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #6E777D;
    padding-left: 8px;
  }

  form .input-lable{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    /* Cool Gray / 10 */
    color: #303538;
    /* Inside Auto Layout */
    flex: none;
    order: 0;
    align-self: center;
    margin: 0 0 4px 0;
  }

  form .form-item{
    margin-bottom: 24px;
  }

  form .fullwidth{
    width: 100%;
  }

  /*form .submit{*/
    /*float: right;*/
    /*background: #008980;*/
    /*border-radius: 4px;*/
    /*border: none;*/
    /*order: 0;*/
    /*color: #ffffff;*/
    /*margin: 0;*/
    /*font-style: normal;*/
    /*font-weight: 600;*/
    /*font-size: 18px;*/
    /*line-height: 22px;*/
    /*width: 152px;*/
    /*text-align: center;*/
    /*padding: 13px 56px;*/
  /*}*/

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
</style>
