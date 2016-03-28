import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class APIService extends BaseService {
        getRedditList():async.IAjaxThenable<any> {
        return this.http.json({
            method: 'GET',
            url: this.host + '/aww.json',
        }).then(
            (success) => {
                //console.log(success);
                return success.response;
            },
            (error): any => {
                throw error.response.message;
            }
        );
    }



}

register.injectable('api-svc', APIService);