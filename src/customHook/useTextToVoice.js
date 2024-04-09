import {useState, useEffect} from 'react';

const synth = window.speechSynthesis;

const speak = (state, voice) => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.voice = voice;
    utterance.text = state.text;
    synth.speak(utterance);

    // utterance.rate = state.rate
    // utterance.onend = resolve
}


const useTextToVoice = () => {
    const [voices, setVoices] = useState([]);


    useEffect(() =>{
        const list = synth.getVoices();
        setVoices(list)
    },[])

  return {
    voices,
    speak:speak,
    pause : () => synth.pause(),
    resume : () => synth.pause(),
    cancel : () => synth.pause(),
  };
};

export default useTextToVoice;

