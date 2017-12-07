//struct for request
export default class Request {
    constructor(requesterId, providerId, title, description, latitude, 
    longitude, address, timeStart, timeEnd) {
        this.requesterId = requesterId,
        this.provierId = providerId,
        this.title = title,
        this.description = description,
        this.latitude = latitude,
        this.longitude = longitude,
        this.address = address,
        this.timeStart = timeStart,
        this.timeEnd = timeEnd
    }
}