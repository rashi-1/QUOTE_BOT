let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["hii , What i can do for you?", "hello", "hi,i am a bot."];
let motivate = ["“Failure is the condiment that gives success its flavor.”","Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.","Do what is right, not what is easy nor what is popular.","Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.","“Pursue what catches your heart, not what catches your eyes.”"];
let inspires = ["“Be the change that you wish to see in the world.”","“No one can make you feel inferior without your consent.”","“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”","“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”"];
let success = ["“Action is the foundational key to all success.” —Pablo Picasso", "“I’ve failed over and over and over again in my life—and that is why I succeed.” —Michael Jordan", "“Try not to become a man of success. Rather become a man of value.”― Albert Einstein"];
let spiritual = ["“Be the person you are. Never try to be another, and you will become mature. Maturity is accepting the cost of being oneself, whatsoever the cost.” – Osho", "“Just as a candle cannot burn without fire, men cannot live without a spiritual life.” – Buddha ", "“Don’t try to understand life. Live it! Don’t try to understand love. Move into love. Then you will know and that knowing will come out of your experiencing.” ", "The mind cannot penetrate meditation; where mind ends, meditation begins. This has to be remembered, because in our life, whatsoever we do, we do through the mind"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Can you repeat it ??";
    if(message.includes('hello'||'hi')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('motivational quotes'||'motivational'||'quotes on motivation')){
        let finalresult = motivate[Math.floor(Math.random() * motivate.length)];
        speech.text = finalresult;
    }
    if(message.includes('inspirational quotes' || 'inspirational'||'quotes on inspiration')){
        let finalresult = inspires[Math.floor(Math.random() * inspires.length)];
        speech.text = finalresult;
    }
    if(message.includes('success quotes' || 'success'||'quotes on success')){
        let finalresult = success[Math.floor(Math.random() * success.length)];
        speech.text = finalresult;
    }
    if(message.includes('spiritual quotes' || 'spiritual'||'quotes on spiritual')){
        let finalresult = spiritual[Math.floor(Math.random() * spiritual.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you later' || 'i will talk afterwards')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();