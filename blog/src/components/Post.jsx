import React from 'react';
import { format } from 'date-fns';

const Post = ({ title, summary, cover, content, createdAt, author }) => {
  return (
    <div className="p-4 mt-5 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img 
            className="h-48 w-full object-cover md:h-full md:w-48" 
            src={'http://localhost:4000/'+cover} 
            alt="cover image" 
          />
        </div>
        <div className="p-8">
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</h2>
          <p className="mt-2 text-gray-500">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">{author.username}</a>
            <time className="block text-sm text-gray-500">{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
          </p>
          <p className="mt-4 text-gray-600">{summary}</p>
        </div>
      </div> 
    </div>
  );
};

export default Post;
