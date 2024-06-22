import React from 'react';

const Post = () => {
  return (
    <div className="p-4 mt-5 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img 
            className="h-48 w-full object-cover md:h-full md:w-48" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTym5NTrdZ-bhYdjcjPBwyG5o1ave8Q1IGDmA&s" 
            alt="image" 
          />
        </div>
        <div className="p-8">
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Lorem ipsum dolor sit amet.</h2>
          <p className="mt-2 text-gray-500">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">Harsh Neelabh</a>
            <time className="block text-sm text-gray-500">2024-06-20 18:05</time>
          </p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus, necessitatibus temporibus id eos perferendis. Corporis tenetur id repudiandae possimus illo rerum saepe reprehenderit, molestiae, tempora.
          </p>
        </div>
      </div> 
    </div>
  );
}

export default Post;