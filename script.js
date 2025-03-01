let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);  // Capital "O" in Option
        voiceSelect.options[i] = option;
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[parseInt(voiceSelect.value)];  // Convert value to integer
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
