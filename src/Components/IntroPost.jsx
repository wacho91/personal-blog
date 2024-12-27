import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const IntroPost = ({post}) => {
    const navigate = useNavigate();
  return (
    <div>
        <img src={post.coverImage} alt="" />
        <div>
            <h4>{post.tag}</h4>
            <h2>{post.title}</h2>
            <h4>{post.desc}</h4>
            <div>
                <img src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png"
                className='w-[50px] rounded-full'/>
                <div>
                    <h3>Tubeguruji</h3>
                    <h3>24 Sept 2024</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroPost
