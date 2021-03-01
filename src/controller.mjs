export default class Controller {
    constructor({ view, media, recorder }) {
        this.view = view
        this.media = media
        this.recorder = recorder
    }

    static initialize(dependences) {
        const instance = new Controller(dependences)
        return instance._init()
    }

    _init() {
        this.view.configureStartRecordingButton(this.onStartRecording.bind(this))
        this.view.configureStopRecordingButton(this.onStopRecording.bind(this))
    }

    async onStartRecording() {
        console.log('Starting...')
        const audioStream = await this.media.getAudio()
        this.recorder.startRecording(audioStream)
    }

    async onStopRecording() {

        console.log('Stopping...')
        await this.recorder.stopRecording()
        const audioUrl = await this.recorder.getRecordingUrl()
        this.view.playAudio(audioUrl)
    }
}