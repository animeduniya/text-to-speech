async function convertTextToSpeech() {
    const textInput = document.getElementById("text-input").value.trim();
    const audioOutput = document.getElementById("audio-output");

    if (!textInput) {
        alert("Please enter some text.");
        return;
    }

    const apiKey = "YOUR_API_KEY"; // Replace with your VoiceRSS API key
    const apiUrl = `https://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${encodeURIComponent(textInput)}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch audio.");
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);

        audioOutput.src = audioUrl;
        audioOutput.style.display = "block";
        audioOutput.play();
    } catch (error) {
        console.error(error);
        alert("Error generating speech. Please try again.");
    }
}

document.getElementById("speak-button").addEventListener("click", convertTextToSpeech);
