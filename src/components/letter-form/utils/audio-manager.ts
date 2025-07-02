export class AudioManager {
  private audioList: HTMLAudioElement[] = []
  private currentPlayingIndex: number | null = null

  init(urls: string[]) {
    this.audioList = urls.map((url) => {
      const audio = new Audio(url)
      audio.load()
      return audio
    })
  }

  play(index: number) {
    if (
      this.currentPlayingIndex !== null &&
      this.currentPlayingIndex !== index
    ) {
      this.pause(this.currentPlayingIndex)
    }

    this.audioList[index].play()
  }

  pause(index: number) {
    this.audioList[index].pause()
  }

  isPlaying(index: number): boolean {
    return this.currentPlayingIndex === index && !this.audioList[index].paused
  }

  toggle(index: number) {
    if (this.isPlaying(index)) {
      this.pause(index)
    } else {
      this.play(index)
    }
  }
}
