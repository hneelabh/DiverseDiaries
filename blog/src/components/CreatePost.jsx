import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState(''); 
  const [files, setFiles] = useState('');
  const [redirect,setRedirect] = useState(false);
  const createNewPost = async (ev) => {
    const data = new FormData()
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0])
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
        method:'POST',
        body: data,
        credentials: 'include',
    })
    if (response.ok) {
        setRedirect(true);
    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <form onSubmit={createNewPost} className="space-y-6">
        <input type='title' 
               placeholder='Title'
               value={title}
               onChange={ev => setTitle(ev.target.value)}  
               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <input type='summary' 
               placeholder='Summary'
               value={summary}
               onChange={ev => setSummary(ev.target.value)}               
               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <input type='file'
               onChange={ev => setFiles(ev.target.files)}
               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <ReactQuill value={content} 
                    onChange={newValue => setContent(newValue)}
                    modules={modules} 
                    formats={formats} 
                    className="bg-white rounded-md shadow-sm"
        />
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-black text-white font-semibold rounded-md shadow-md hover:bg-slate-900 focus:outline-none focus:ring focus:ring-blue-200">
            Create Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost;