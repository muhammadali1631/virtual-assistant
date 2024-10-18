let btn = document.querySelector('#btn')
let content =  document.querySelector('#content')
let voice = document.querySelector('#voice')

function speak(text) {
    let textSpeak = new SpeechSynthesisUtterance(text)
    textSpeak.rate = 0.8;
    textSpeak.pitch = 1;
    textSpeak.volume = 1;
    textSpeak.lang = 'en-GB'
    window.speechSynthesis.speak(textSpeak)
}

function wish() {
    let day = new Date()
    let hours = day.getHours();
    if(hours=>0 && hours<12){
        speak("Good Morning Ali")
    }
    else if(hours=>12 && hours<16){
        speak("Good Evening Ali")
    }
}
// window.addEventListener('load', ()=>{
//     wish()
// })

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let getRecognition = new speechRecognition()

getRecognition.onresult = (event)=>{
    let transcript=event.results[0][0].transcript
    content.innerText=transcript
   getCommand(transcript.toLowerCase())
}

btn.addEventListener('click', ()=>{
    getRecognition.start()
    voice.style.display="block"
    btn.style.display="none"
})

function getCommand(message){
    voice.style.display="none"
     btn.style.display="flex"
     if(message.includes("hello")||message.includes("hey") || message == 'denim' ){
         speak("hello sir,what can i help you?")
     }
     else if(message.includes("who are you")||message.includes('who created')){
         speak("i am virtual assistant Denim,created by Developer Ali")
     }else if(message.includes("open youtube")){
         speak("opening youtube...")
         window.open("https://youtube.com/","_blank")
     }
     else if(message.includes("open google")){
         speak("opening google...")
         window.open("https://google.com/","_blank")
     }
     else if(message.includes("open facebook")){
         speak("opening facebook...")
         window.open("https://facebook.com/","_blank")
     }
     else if(message.includes("open instagram")){
         speak("opening instagram...")
         window.open("https://instagram.com/","_blank")
     }
     else if(message.includes("open calculator")){
         speak("opening calculator..")
         window.open("calculator://")
     }
     else if(message.includes("open whatsapp")){
         speak("opening whatsapp..")
         window.open("https://whatsapp.com")
     }
     else if(message.includes("time")){
       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
     }
     else if(message.includes("date")){
         let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
         speak(date)
       }
     else{
         let finalText="this is what i found on internet regarding" + message.replace("denim","") || message.replace("denim","")
         speak(finalText)
         window.open(`https://www.google.com/search?q=${message.replace("denim","")}`,"_blank")
     }
 }
