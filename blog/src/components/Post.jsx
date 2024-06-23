import React from 'react';
import { format } from 'date-fns';

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
  return (
    <div className="p-4 mt-5 mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-5xl">
      <div className="lg:flex">
        <div className="lg:shrink-0">
          <a href={`/post/${_id}`}>
            <img 
              className="h-48 w-full object-cover lg:h-full lg:w-64" 
              src={'http://localhost:4000/' + cover} 
              alt="cover image" 
            />
          </a>
        </div>
        <div className="p-8">
          <a href={`/post/${_id}`}>
            <h2 className="block mt-1 text-2xl leading-tight font-bold text-black hover:underline">{title}</h2>
          </a>
          <div className="mt-2 text-gray-500">
            <p className="text-indigo-800">{author.username}</p>
            <time className="block text-sm text-gray-500">{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
          </div>
          <p className="mt-4 text-gray-600">{summary}</p>
        </div>
      </div> 
    </div>
  );
};

export default Post;
