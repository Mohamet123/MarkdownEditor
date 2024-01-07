import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { saveAs } from 'file-saver';



const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState('');

  const handleTextChange = (event) => {
    setMarkdownText(event.target.value);
  };

  const handleDownload = () => {
    const blob = new Blob([markdownText], { type: 'text/plain' });
    saveAs(blob, 'document.txt');
  };
  const textareaStyle = {
    backgroundColor: 'lightblue',
    border: '1px solid #ccc', 
  }

  return (
    <div className='container'>
    <div className='d-flex flex-row row'>
      <div className='col-md-6'>
        <textarea
            value={markdownText}
            onChange={handleTextChange}
            style={textareaStyle}
            placeholder="Saisissez votre texte ..."
            rows={20}
            cols={50}
            
        />
      </div>
      <div className='col-md-4 bg-white w-50 h-100'>
        <ReactMarkdown className="bg-white w-50 h-100" >{markdownText}</ReactMarkdown>
        </div>  
      
      <div>
        
      </div>
      
    </div>
    <button className='btn btn-info ' onClick={handleDownload}>Télécharger</button>
    </div>
  );
};

export default MarkdownEditor;