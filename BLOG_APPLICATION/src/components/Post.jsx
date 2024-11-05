import React from 'react'
import appwriteService from "../auth/configuration"
import { Link } from 'react-router-dom'

const Post = ({$id, title, image, }) => {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-cl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(image)} alt="title" className='rounded-xl ' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default Post