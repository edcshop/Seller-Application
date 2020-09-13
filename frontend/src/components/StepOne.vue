<template>
  <form>
    <div class="top-tips">
      <span class="top-tips-left">SELLER APPLICATION</span>
      <span class="top-tips-right">STEP 1 OF 2</span>
    </div>
    <div class="title">
      Share your work with us
    </div>
    <div class="description">
      To ensure the the quality of our marketplace, we limit our seller community to the most qualified creators. Let
      our curators know why you’d be a great seller:
    </div>
    <div class="username form-item">
      <div class="username-first-name left">
        <div class="username-first-name-label input-lable">
          First Name
        </div>
        <input class="username-first-name-input width272 input" type="text" name="firstName" v-model="form.firstName" required/>
      </div>
      <div class="username-last-name left">
        <div class="username-last-name-label input-lable">
          Last Name
        </div>
        <input class="username-last-name-input width272 input" type="text" name="lastName"  v-model="form.lastName" required/>
      </div>
      <div style="clear: both"></div>
    </div>
    <div class="form-item">
      <div class="input-lable">
        Your Shop Category
      </div>
      <select name="category" class="category-select input fullwidth" v-model="form.category">
        <option value="0"> Select Category</option>
        <option value="1"> Category One</option>
        <option value="2"> Category Two</option>
        <option value="3"> Category Three</option>
        <option value="4"> Category Four</option>
        <option value="5"> Category Five</option>
        <option value="6"> Category Six</option>
        <option value="7"> Category Seven</option>
      </select>
    </div>

    <div class="form-item">
      <div class="username-last-name-label input-lable">
        Portfolio Link
      </div>
      <input name="link" class="link-input input fullwidth" placeholder="mysite.com"  v-model="form.link" />
      <div  class="select_item" style="margin-top: 9px" @click="confirmAuth">
        <div :class="style.checkboxSelect"></div>
        <label>Yes, I confirm that the content I submit is authored by me.</label>
      </div>
      <div style="clear: both"></div>
    </div>

    <div class="form-item">
      <div class="input-lable" style="margin-bottom: 9px">
        Do you already have an online store?
      </div>
      <div class="select_item" @click="selectHasOnlineStore(1)">
        <span  :class="style.radioUnChecked"></span>
        <label>Yes</label>
      </div>
      <div class="select_item" @click="selectHasOnlineStore(0)">
        <span  :class="style.radioChecked"></span>
        <label>No</label>
      </div>
    </div>


    <div class="form-item" v-show="items_visible">
      <div class="username-last-name-label input-lable">
        Online stores I sell on today
      </div>
      <div>
        <textarea name="items" class="shop-items fullwidth" placeholder="Enter Urls" v-model="form.sellUrls"></textarea>
      </div>
    </div>

    <div class="form-item" style="margin-bottom: 0">
      <input type="button" class="submit" value="Next" @click="submitForm"/>
      <div style="clear: both"></div>
    </div>
  </form>
</template>

<script>
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
          sellUrls: ''
        },
        items_visible: false,
        style: {
          radioUnChecked: 'icon_unSelect',
          radioChecked: 'icon_unSelect',
          checkboxUnSelect: 'checkbox_unSelect',
          checkboxSelect: 'checkbox_unSelect'
        }
      }
    },
    methods: {
      confirmAuth: function () {
        if (this.form.linkAuthored === '0' || this.form.linkAuthored === '') {
          this.style.checkboxSelect = 'checkbox_select'
          this.form.linkAuthored = '1'
        } else {
          this.style.checkboxSelect = 'checkbox_unSelect'
          this.form.linkAuthored = '0'
        }
      },

      selectHasOnlineStore: function (tag) {
        if (tag === 1) {
          this.style.radioUnChecked = 'icon_select'
          this.form.hasOnlineShop = '1'
          this.style.radioChecked = 'icon_unSelect'
          this.items_visible = true
        } else {
          this.style.radioUnChecked = 'icon_unSelect'
          this.form.hasOnlineShop = '0'
          this.style.radioChecked = 'icon_select'
          this.items_visible = false
        }
      },

      submitForm: function () {
        console.log(this.form)
        if (this.form.firstName === '') {
          alert('First Name Required!')
          return
        }
        if (this.form.lastName === '') {
          alert('Last Name Required!')
          return
        }
        if (this.form.category === '0') {
          alert('Your Shop Category Required!')
          return
        }
        if (this.form.link !== '' && this.form.linkAuthored !== '1') {
          alert('please confirm that Portfolio Link you submit is authored!')
          return
        }
        this.$router.push({name: 'StepTwo', params: this.form})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .top-tips {
    height: 12px;
  }

  .top-tips .top-tips-left {
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

  .top-tips .top-tips-right {
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

  form .title {
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

  form .description {
    /* Body / 16px Regular */
    font-style: normal;
    font-weight: normal;
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
  }

  form .left {
    float: left;
  }

  form .input, form select option {

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

    font-size: 16px;
    line-height: 22px;
    color: #6E777D;
    padding-left: 8px;
  }

  form .input-lable {
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

  form .form-item {
    margin-bottom: 24px;
  }

  form .fullwidth {
    width: 100%;
  }

  form .link-input {
    /* Body / 16px Regular */
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    padding-left: 12px;
    color: #303538;
  }

  form .shop-items {
    height: 87px;
    background: #FBFBFD;
    border: 1px solid #899298;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 16px;
    padding-left: 12px;
    flex: none;
    order: 0;
  }


  .icon_select {
    width: 18px;
    height: 18px;
    margin: 4px;
    float: left;
    background: url("../assets/radio-select.jpg") 100% 100%;
    background-size: cover;
  }

  .icon_unSelect{
    width: 18px;
    height: 18px;
    margin: 4px;
    float: left;
    background: url("../assets/radio_unselect.jpg") 100% 100%;
    background-size: cover;
  }

  .select_item{
     line-height: 28px;
  }

  .checkbox_select{
    float: left;
    width: 18px;
    height: 18px;
    margin: 4px;
    background: url("../assets/checkbox-select.jpg") 100% 100%;
    background-size: cover;
  }

  .checkbox_unSelect{
    float: left;
    border: 2px solid #899298;
    border-radius: 4px;
    width: 14px;
    height: 14px;
    margin: 4px;
  }

</style>
