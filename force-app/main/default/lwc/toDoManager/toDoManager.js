import { LightningElement, track } from 'lwc';
// Track is optional as of SP20 update.
// it is still recommended to use it to listen to changes.

export default class ToDoManager extends LightningElement {
  @track time = '8:15 PM' // @track OPTIONAL as of Sp20
  @track greeting = "Good Evening" // @track OPTIONAL as of Sp20

  //LifeCycle Method
  connectedCallback() {
    this.getTime();

    setInterval(() => {
      this.getTime()
      console.log("set interval called")
    }, 60000)
  }
  getTime() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();

    this.time = `${this.getHour(hour)}:${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`

    this.setGreeting(hour);
  }

  getHour(hour) {
    return hour === 0 ? 12 : hour > 12 ? (hour - 12) : hour
  }

  getMidDay(hour) {
    return hour >= 12 ? "PM" : "AM"
  }

  getDoubleDigit(digit) {
    return digit < 10 ? "0" + digit : digit
  }
  setGreeting(hour) {
    if (hour < 12) {
      this.greeting = "Good Morning"
    } else if (hour >= 12 && hour < 17) {
      this.greeting = "Good Afternoon"
    } else {
      this.greeting = "Good Evening"
    }
  }
}