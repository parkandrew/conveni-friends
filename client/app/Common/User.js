//user class metadata
import Request from 'client/app/Common/Request';
import axios from 'axios';

import config from 'client/config';

export default class User {
    constructor(userId='') {
        //the only variables actually needed for the user class
        this.userId = userId;
    }

    login(userId, password) {
        let url = `${config.API_URL}/v1/user/` + userId + '/login';
        return axios.post(url, {
                password: password
        }).then((response) => {
            console.log(response);
            return response.status;
          })
          .catch((error) => {
            console.log(error);
            //return error JSON?
          });
    }


    signup(userId, password) {
        let url = `${config.API_URL}/v1/user/` + userId + '/signup';
        return axios.post(url, {
            password: password
        }).then((response) => {
            console.log(response);
            return response;
        }).catch((error) => {
            console.log(error);
        });
    }

    changePassword(userId, oldPassword, newPassword) {
        let url = `${config.API_URL}/v1/user/` + userId + '/update';
        return axios.post(url, {
            password: oldPassword,
            newPassword: newPassword
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }


    createRequest(request) {
        console.log(request);
        return axios.post(`${config.API_URL}/v1/request/create`, {
                userId: request.userId,
                title: request.title,
                latitude: request.latitude,
                longitude: request.longitude,
                address: request.address,
                description: request.description,
                timeStart: request.timeStart,
                timeEnd: request.timeEnd
        }).then((response) => {
            console.log(response);
            return response.data;
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
    }

   getMyRequests() {
       let url = `${config.API_URL}v1/user/` + this.userId + '/requests'
       return axios.get(url)
       .then((response) => {
           console.log(response)
        return response.data;
        //format into request list and return list
      })
      .catch((error) => {
        console.log(error);
        //return error JSON?
      });
   }

   getNearbyRequests(latitude, longitude) {
       return axios.get(`${config.API_URL}/v1/requests/all`, {
           params: {
               userId: this.userId,
               latitude: latitude,
               longitude: longitude
           }
       }).then(function (response) {
        return response.data;
        //format into request list and return list
      }).catch(function (error) {
        console.log(error);
        //return error JSON?
      });
   }
}