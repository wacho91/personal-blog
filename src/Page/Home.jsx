import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";
import IntroPost from "../Components/IntroPost";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
import GlobalApi from "../Services/GlobalApi";

const Home = () => {
  
  const [posts, setPosts] = useState([]);
  const [orgPost, setOrgPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    GlobalApi.getPost.then(res => {
      const result = res.data.data.map(item => ({
        id:item.id,
        title:item.attributes.title,
        desc:item.attributes.description,
        tag:item.attributes.tag,
        coverImage:item.attributes.coverImage.data.attributes.url,
      }));
      setPosts(result);
      setOrgPost(result);
    })
  }

  const filterPost = (tag) => {
    if(tag === 'All') {
      setPosts(orgPost);
      return;
    }
    const result = orgPost.filter(item=>item.tag==tag);
    setPosts(result);
  }

  return (
    <div>
        Home Component
    </div>
  )
}

export default Home
