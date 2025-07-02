export class LocalStorageManager<T> {
  private key: string

  private initialValue: T | null

  private inMemoryStorage: Map<string, T | null>

  private value: T | null

  constructor(key: string, initialValue: T | null = null) {
    this.key = key
    this.initialValue = initialValue
    this.inMemoryStorage = new Map<string, T | null>()

    this.value = this.getSnapshot(key, initialValue)
    this.initialize()
  }

  private getSnapshot = (key: string, initialValue: T | null): T | null => {
    try {
      const item = localStorage.getItem(key)
      return item !== null ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.error(error)
      this.inMemoryStorage.set(key, initialValue)
      return initialValue
    }
  }

  private initialize = () => {
    if (!this.initialValue) return

    try {
      const value = localStorage.getItem(this.key)
      if (!value) {
        localStorage.setItem(this.key, JSON.stringify(this.initialValue))
      }
    } catch (error) {
      console.error(error)
      const value = this.inMemoryStorage.get(this.key)
      if (!value) {
        this.inMemoryStorage.set(this.key, this.initialValue)
      }
    }
  }

  public set = (nextValue: T) => {
    try {
      localStorage.setItem(this.key, JSON.stringify(nextValue))
    } catch (error) {
      console.log(error)
      this.inMemoryStorage.set(this.key, nextValue)
    }
    this.value = nextValue
  }

  public remove = () => {
    try {
      localStorage.removeItem(this.key)
    } catch (error) {
      console.log(error)
      this.inMemoryStorage.set(this.key, null)
    }
    this.value = null
  }

  public getValueOrNull = (): T | null => this.value

  public getInMemoryStorage = (): Map<string, T | null> => {
    return this.inMemoryStorage
  }
}
