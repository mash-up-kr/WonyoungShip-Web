export class AudioManager {
  private audioList: HTMLAudioElement[] = []
  private currentPlayingIndex: number | null = null

  init(urls: string[]) {
    this.audioList = urls.map((url) => {
      const audio = new Audio(url)
      audio.load()
      return audio
    })
    this.currentPlayingIndex = null
  }

  play(index: number) {
    if (
      this.currentPlayingIndex !== null &&
      this.currentPlayingIndex !== index
    ) {
      this.pause(this.currentPlayingIndex)
    }

    this.audioList[index].play()
    this.currentPlayingIndex = index
  }

  pause(index: number) {
    if (!this.audioList[index]) return
    this.audioList[index].pause()
    if (this.currentPlayingIndex === index) {
      this.currentPlayingIndex = null
    }
  }

  reset() {
    this.audioList.forEach((audio) => {
      if (!audio.paused) {
        audio.pause()
      }
      audio.currentTime = 0
    })

    this.currentPlayingIndex = null
  }
}

export const audioManager = new AudioManager()
