// import axios from 'axios'

import qs from 'qs';
var mergeJSON = require("merge-json") ;
const axios = require('axios')

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const request_head = {
  apikey: "33938ba5341192c19f417e7ab7731b1de7e3d67485b7563eb5dc83c2162347182a2357991c1294f6c99d932be8b290b92bc44cc87fddb7e6c71430f1b1278495",
  actors_id: "1",
  actors_name:  "Kelvin",
  actors_organisation:  "Metro Bus"
}



const url = "http://41c9c49b.ngrok.io/api_metrobus/index.php";



class API_calls {
    postdata(data) {

      var requestBody = mergeJSON.merge(request_head, data);
      console.log("Form Data Dis ",qs.stringify(requestBody));

       axios.post(url, qs.stringify(requestBody), config)
        .then((result) => {
          // Do somthing
          console.log("Request Successful ",result);

          return result;

        })
        .catch((err) => {
          // Do somthing
          console.log("Request Error ",err);
          return err;
        })

    }


    async getdata(data) {
       
      var requestBody = mergeJSON.merge(request_head, data) ;
      console.log("Form Data Dis ",requestBody);

      await axios.post(url, qs.stringify(requestBody), config)
        .then((result) => {
          this.response = result.data.response;
          console.log("Request Successful ",result.data.response);
          
        })
        .catch((err) => {
          // Do somthing
          console.log("Request Error ",err);
          
        })

        return this.response;
    }
  }


const apicalls = new API_calls();

export default apicalls;