import axios from "axios";

const BASE_URL='https://tubeguruji-admin.herokuapp.com/api';

const getPost = axios.get(BASE_URL+'/blogs?populate=*');
const getPostId = (id) => axios.get(BASE_URL+"/blogs/'+id+'?populate=*")

export default {
    getPost,
    getPostId
}

