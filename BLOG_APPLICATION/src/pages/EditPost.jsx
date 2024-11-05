import React, {useState, useEffect} from 'react'
import {Container,Post} from "../components/index"
import appwriteService from "../auth/configuration"
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [posts, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getOnePost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug,navigate])

  return posts ? (
    <div className='py-8'>
        <Container>
            <Post post={posts}/>
        </Container>
    </div>
  ) : null
}

export default EditPost