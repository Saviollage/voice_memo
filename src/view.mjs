export default class View {
    constructor() {
        this.btnStart = document.getElementById("btnStart")
        this.btnStop = document.getElementById("btnStop")
        this.audioElement = document.getElementById("audio")
    }

    onRecordClick(command) {
        return () => {
            command()
            this.toogleAudioElement({ visible: false })
        }
    }

    onStopRecordClick(command) {
        return () => {
            command()
        }
    }

    configureStartRecordingButton(command) {
        console.log('Starting button...')
        this.btnStart = addEventListener("click", this.onRecordClick(command))
    }

    configureStopRecordingButton(command) {
        this.btnStop = addEventListener("click", this.onStopRecordClick(command))
    }

    toogleAudioElement({ visible }) {
        const classList = this.audioElement.classList
        visible ? classList.remove('hidden') : classList.add('hidden')
    }

    playAudio(url) {
        const audio = this.audioElement
        audio.src = url
        audio.muted = true
        audio.addEventListener("loadedmetadata", _ => {
            this.toogleAudioElement({ visible: true })
            audio.play()
        })

    }


}