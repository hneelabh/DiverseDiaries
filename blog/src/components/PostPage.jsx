import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:4000/post/${id}`)
        .then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);
            });
        });
    }, [id]);

    if(!postInfo) return '';

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6 mb-6">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-4">{postInfo.title}</h1>
        <time className="block text-sm text-gray-500">{format(new Date(postInfo.createdAt), 'MMM d, yyyy HH:mm')}</time>
        <p className="mt-2 text-gray-500">
          <span className="text-indigo-800">by @{postInfo.author.username}</span>
        </p>
      </div>
      <div className="mb-6">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="cover image" className="w-full h-auto rounded-md shadow-md" />
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{__html:postInfo.content}} ></div>
      <div className='text-center mt-10'>
        <p>End of the blog</p>
        <a className='underline' href="/">Back to Home</a>
      </div>
    </div>
  );
}

export default PostPage;
