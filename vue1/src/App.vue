<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <autocomplete 
      :search="search"
      placeholder="Search states and territories"
      :get-result-value="getResultValue"
      autoSelect="true">
    </autocomplete>
  </div>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'
import axios from 'axios'
/*var states = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  " North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Puerto Rico",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"]
*/
export default {
  name: 'App',
  components: {
    Autocomplete
  },
  methods: {
    search(input) {
      //var answer = ["America","British","Canada","Australia"]
      console.log("request sent")
      return new Promise((resolve)=>{
        if (input.length < 1) { return resolve([]) }
        axios({
          method: 'POST',
          url:'http://localhost:4000/graphql',
          headers:{
            'Content-Type':'application/json',
            
          },
          data:{
            "query":`{state(ahead:"${input}")}`
          }
        }).then(res =>{
          console.log(res.data.data.state)
          //this.search=res.data.data.state
          //this.result=res.data.data.state
          resolve(res.data.data.state)
        })
      })
      
    },

    getResultValue(result) {
      console.log("in resolve")
      console.log(result)
      return result
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
