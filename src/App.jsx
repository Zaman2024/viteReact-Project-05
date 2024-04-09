import React, { useState, useEffect } from 'react'
import useTextToVoice from './customHook/useTextToVoice';

function App() {
  const [text, setText] = useState("Don't Forget to Subscribe");
  const [voice, setVoice] = useState(null);
  const { voices, speak, pause, resume, cancel } = useTextToVoice();

  useEffect(() => {
    setVoice(voices[0])
  },[voices]);

  const onClick = () =>speak({text}, voice);

  const onVoiceChange =(e) =>{
    setVoice(voices.find((v) => v.name === e.target.value));
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  }

  return (

    
    <main className='flex flex-wrap justify-center  w-full h-screen bg-slate-700 text-slate-200'>
      <div className='flex justify-content-center flex-col items-center w-1/2  bg-slate-900 rounded-lg my-20 p-2 text-center'>
      <h1 className='font-bold text-2xl pb-5'>Text To Audio</h1>
      <textarea className='bg-slate-400 text-black m-2 p-2  rounded-md'  cols="72" rows="8" value={text} onChange={onTextChange} />

      <select className='w-2/3 m-3 bg-transparent border-2 border-white p-1 rounded-md' value={voice?.name} onChange={onVoiceChange}>
        <option className="text-black bg-slate-400 border-none"value={null}> Select Voice</option>
        {voices.map((voice) => (
          <option className="text-black bg-slate-400 border-none" key={voice.name} value={voice.name}>{voice.name}</option>
        ))}
      </select>
      <section className='flex flex-wrap flex-row gap-3'>
        <button className='bg-blue-500 px-4 py-0.5 rounded-md font-bold bottom-1 border-black my-3' onClick={onClick}>Start</button>
        <button className='bg-blue-500 px-4 py-0.5 rounded-md font-bold bottom-1 border-black my-3' onClick={pause}>Pause</button>
        <button className='bg-blue-500 px-4 py-0.5 rounded-md font-bold bottom-1 border-black my-3' onClick={resume}>Resume</button>
        <button className='bg-blue-500 px-4 py-0.5 rounded-md font-bold bottom-1 border-black my-3' onClick={cancel}>Cancel</button>
      </section>

      </div>
    </main>
  
  );
}


export default App;
