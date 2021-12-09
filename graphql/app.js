const {graphql,buildSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
var express = require('express');

var states = ["Alaska",
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


var app = express();
app.use(cors());
// view engine setup



// catch 404 and forward to error handler


var schema = buildSchema(`
  type Query {
    hello: String
    allstates: [String]
    state(ahead:String): [String]
  }
`);
 
var root = { 
  hello: () => 'Hello world!',
  allstates () {
    console.log("allstates requested")
    return states 
  },
  state({ahead}){
    console.log("state ahead requested")
    return states.filter(state =>state.startsWith(ahead))
    //return states.find(state =>state.startsWith(ahead))
  }
};
 

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// error handler
app.listen(4000,() => {
  console.log('Graphql server is running at http://localhost:4000');
})
