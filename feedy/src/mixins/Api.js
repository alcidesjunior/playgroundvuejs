//importing Axios
import Axios from 'axios'

export default {
  data: function(){
    return{
      results: [],
      isLoaded: false,
      url: "https://jsonplaceholder.typicode.com"
    }
  },
  methods:{
    getPhotos: function(){
      console.log("getPhotos();");
           Axios.get(this.url+"/photos").then(
             (result)=>(
               this.results = result.data
             )
           );
    }
  }
}
