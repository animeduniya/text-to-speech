async function convertTextToSpeech() {
    const textInput = document.getElementById("text-input").value.trim();
    const audioOutput = document.getElementById("audio-output");

    if (!textInput) {
        alert("Please enter some text.");
        return;
    }

    // Construct the TTSMP3 URL
    const ttsmp3Url = `https://ttsmp3.com/makemp3_new.php`;
    const formData = new URLSearchParams({
        msg: textInput,
        lang: "Joanna", // Change the voice as needed (Joanna, Matthew, etc.)
        source: "ttsmp3"
    });

    try {
        // Make a POST request to TTSMP3
        const response = await fetch(ttsmp3Url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
        });

        const data = await response.json();

        if (data.Error) {
            throw new Error(data.Error);
        }

        // Use the returned URL to play the audio
        const audioUrl = data.URL;
        audioOutput.src = audioUrl;
        audioOutput.style.display = "block";
        audioOutput.play();
    } catch (error) {
        console.error(error);
        alert("Error generating speech. Please try again.");
    }
}

document.getElementById("speak-button").addEventListener("click", convertTextToSpeech);
