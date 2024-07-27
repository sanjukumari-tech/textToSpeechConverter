 const textInput = document.getElementById('text-input');
        const convertBtn = document.getElementById('convert-btn');

        function getFemaleVoice() {
            const voices = speechSynthesis.getVoices();
            return voices.find(voice => voice.name.includes('Female') || voice.name.includes('Google UK English Female')) || voices[2];
        }

        convertBtn.addEventListener('click', () => {
            const text = textInput.value;

            if ('speechSynthesis' in window) {
                const speech = new SpeechSynthesisUtterance();
                speech.text = text;

                const femaleVoice = getFemaleVoice();
                if (femaleVoice) {
                    speech.voice = femaleVoice;
                }
                
                speechSynthesis.speak(speech);
            } else {
                alert('Sorry, your browser does not support speech synthesis.');
            }
        });

        // Ensure voices are loaded
        window.speechSynthesis.onvoiceschanged = () => {
            getFemaleVoice();
        };