import {DateRangeArray} from './daterangearray'

export default class Task {
  constructor (needGenerateTaskId = true) {
    this.id = needGenerateTaskId ? Task.generateTaskId() : 0
    this.name = 'simple task'
    this.dates = new DateRangeArray()
  }

  clone () {
    let result = new Task(false)
    result.id = this.id
    result.name = this.name
    for (let i = 0; i < this.dates.length; i++) {
      result.dates.push(this.dates[i].clone())
    }
    return result
  }

  static generateTaskId () {
    return ++Task.prototype.maxId
  }
}

Task.prototype.maxId = 0
