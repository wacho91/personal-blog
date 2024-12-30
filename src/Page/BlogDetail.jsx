import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalApi from "../Services/GlobalApi"
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const BlogDetail = () => {

    const {id} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        getBlogById();
    })

    const getBlogById=()=>{
        GlobalApi.getPostById(id).then(resp=>{
           
            const item=resp.data.data;
            const result={
                id:item.id,
                title:item.attributes.title,
                desc:item.attributes.description,
                tag:item.attributes.tag,
                coverImage:item.attributes.coverImage.data.attributes.url,
            };
            setPost(result);
            console.log("Result",result);
        })
    }

  return (
    <div>
      <h3>{post.tag}</h3>
      <h3>{post.title}</h3>
      <div>
        <img 
            src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png"
            className='w-[35px] rounded-full'
        />
        <div>
            <h3>Tubeguruji</h3>
            <h3>24 Sept 2024</h3>
        </div>
      </div>
      <img src={post.coverImage} className='rounded-2xl mt-5 mb-5 w-full'/>
      <ReactMarkdown />
    </div>
  )
}

export default BlogDetail
