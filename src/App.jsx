import React, { useState, useEffect } from 'react'
// import useTextToVoice from './customHook/useTextToVoice';

function App() {
  // const [text, setText] = useState("Don't Forget to Subscribe");
  // const [voice, setVoice] = useState(null);
  // const { voices, speak, pause, resume, cancel } = useTextToVoice();

  // useEffect(() => {
  //   setVoice(voice[0])
  // },[voices]);

  // const onClick = () =>speak({text}, voice);

  // const onVoiceChange =(e) =>{
  //   setVoice(voices.find((v) => v.name === e.target.value));
  // };

  // const onTextChange = (e) => {
  //   setText(e.target.value);
  // }

  return (
    // <main className='bg-slate-700'>
     
    //   <h1 className='text-red'>Text To Audio</h1>
    //   <textarea rows="8" cols="72" value={text} onChange={onTextChange} />
    //   <select value= {voice?.name} onChange={onVoiceChange}>
    //   <option value={null}>Select Voice</option>
    //   {voices.map((voice)=>(
    //       <option key={voice.name} value={voice.name}>{voice.name}</option>
    //     ))}
    //   </select>

    //   <Section>
    //     <button className='bg-red-500' onClick={onClick}>Start</button>
    //     <button onClick={pause}>Pause</button>
    //     <button onClick={resume}>Resum</button>
    //     <button onClick={cancel}>Cancel</button>
    //   </Section>
      
    // </main>
    <main className='flex justify-content-center items-center m-20 w-1/2  bg-slate-500'>
      <h1>Text To Audio</h1>

    </main>
  );
}

export default App;

//-----------------------------------------

// import React, { useState, useEffect } from 'react';
// import './style.css';
// import useTextToSpeech from './useTextToSpeech';
// import useTextToVoice from './customHook/useTextToVoice';

// export default function App() {
//   const [text, setText] = useState("Don't Forget to Subscribe");
//   const [voice, setVoice] = useState(null);
//   const { voices, speak, pause, resume, cancel } = useTextToVoice();

//   useEffect(() => {
//     setVoice(voices[0]);
//   }, [voices]);

//   const onClick = () => speak({ text }, voice);

//   const onVoiceChange = (e) => {
//     setVoice(voices.find((v) => v.name === e.target.value));
//   };

//   const onTextChange = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <main>
//       <h1>Text To Audio</h1>
//       <textarea rows="8" cols="72" value={text} onChange={onTextChange} />
//       <select value={voice?.name} onChange={onVoiceChange}>
//         <option value={null}>Select Voice</option>
//         {voices.map((voice) => (
//           <option key={voice.name} value={voice.name}>
//             {voice.name}
//           </option>
//         ))}
//       </select>
//       <section>
//         <button onClick={onClick}>Start</button>
//         <button onClick={pause}>Pause</button>
//         <button onClick={resume}>Resume</button>
//         <button onClick={cancel}>Cancel</button>
//       </section>
//     </main>
//   );
// }
