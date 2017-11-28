//user class metadata
import Request from 'client/app/Common/Request';
import axios from 'axios';

axios.defaults.baseURL = 'https://conveni-friends.com';
axios.defaults.headers.common['Authorization'] = 'abcde';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default class User {
    constructor(userId='', sessionKey='') {
        //the only variables actually needed for the user class
        this.userId = userId;
        this.sessionKey = sessionKey;
    }

    login(userId, password) {
        let url = '/v1/user/' + userId + '/login'
        let response = axios.post(url, {
            params: {
                password: password
            }
        }).then(function (response) {
            console.log(response);
            //if successful, set userId and sessionKey to the member variables
          })
          .catch(function (error) {
            console.log(error);
            //return error JSON?
          });
          return response;
    }

    createRequest(request) {
        let response = axios.post('/v1/request/create', {
            params: {
                userId: request.userId,
                title: request.title,
                description: request.description,
                latitude: request.latitude,
                longitude: request.longitude,
                address: request.address,
                timeStart: request.timeStart,
                timeEnd: request.timeEnd
            }
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          return response;
    }

   getMyRequests() {
       let url = 'v1/user/' + this.userId + '/requests'
       let response = axios.get(url)
       .then(function (response) {
        console.log(response);
        //format into request list and return list
      })
      .catch(function (error) {
        console.log(error);
        //return error JSON?
      });
      return response;
   }

   getNearbyRequests(latitude, longitude) {
       let response = axios.get('/v1/requests/all', {
           params: {
               userId: this.userId,
               latitude: latitude,
               longitude: longitude
           }
       }).then(function (response) {
        console.log(response);
        //format into request list and return list
      }).catch(function (error) {
        console.log(error);
        //return error JSON?
      });
      return response;
   }
}