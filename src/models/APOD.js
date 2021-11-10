export class APOD {
  constructor(data) {
    this.title = data.title
    this.date = data.date
    this.url = data.hdurl
    this.type = data.media_type
    this.descriptions = data.explanation
  }

}