class Event {
  constructor(name, startTime, endTime, location) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }
  toString() {
    const { name, startTime, endTime, location } = this;
    return `${startTime} - ${endTime}: ${name} at ${location}`;
  }
  getStartHours() {
    console.log(Number(this.startTime.split(":")[0]))
    return Number(this.startTime.split(":")[0]);
  }
  getStartMinutes() {
    console.log(Number(this.startTime.split(":")[1]))
    return Number(this.startTime.split(":")[1]);
  }
  getEndHours() {
    console.log(Number(this.endTime.split(":")[0]))
    return Number(this.endTime.split(":")[0]);
  }
  getEndMinutes() {
    console.log(Number(this.endTime.split(":")[1]))
    return Number(this.endTime.split(":")[1]);
  }
  isBefore(other) {
    return (
      this.getEndHours() < other.getStartHours() ||
      (this.getEndHours() === other.getStartHours() &&
        this.getEndMinutes() <= other.getStartMinutes())
    );
  }
  durationMinutes() {
    const durationHours = this.getEndHours() - this.getStartHours(); 
    const durationMinutes = this.getEndMinutes() - this.getStartMinutes();
    console.log(`duration hours: ${durationHours}`)
    console.log(`duration minutes: ${durationMinutes}`)
    console.log(`duration total: ${durationHours*60 + durationMinutes}`)
    return durationHours*60 + durationMinutes
  }
  
  conflict(other) {
    return (
      this.getEndHours() >= other.getStartHours() && 
      this.getStartHours() <= other.getEndHours()
    )
  }
}

// const meeting = new Event("Meeting", "14:30", "15:00", "Conference room");


module.exports = Event;
