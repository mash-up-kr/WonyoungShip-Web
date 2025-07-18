export class StateStorageManager<T> {
  private value: T | null = null

  constructor(initialValue: T | null = null) {
    this.value = initialValue
  }

  setValue(value: T) {
    this.value = value
  }

  getValue() {
    return this.value
  }
}
