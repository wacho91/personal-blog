import { useNavigate } from "react-router-dom"

const Blogs = ({post}) => {

    const navigate = useNavigate();

  return (
    <div>
      {post.map((item) => (
        <div key={item.id}>
            <img src={item.coverImage} alt="" />
            <h3>{item.tag}</h3>
            <h3>{item.title}</h3>
            <h3>{item.desc}</h3>
            <div>
                <img src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png"
                className='w-[35px] rounded-full'/>
                <div>
                    <h3>Tubeguruji</h3>
                    <h3>24 Sept 2024</h3>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Blogs
