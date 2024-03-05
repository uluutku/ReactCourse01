import axios from "axios"

const searchImages = async (term) =>{
    const response= await axios.get("https://api.unsplash.com/search/photos", {headers: {Authorization:"Client-ID wA4SQOtj0qfj-CxqVxpT94NBHheCKklkpKinY8K9OdU"}, params: {query:term}})
    return response.data.results;
 }
 
 export default searchImages;