import {async, Utils} from 'platypus';

export default class BaseService {
	protected static _inject: any = {
        http: async.Http,
        Promise: async.IPromise,
        utils: Utils
    };

	protected http: async.Http;
	protected Promise: async.IPromise;
	protected utils: Utils;

    host: string = 'https://www.reddit.com/r';
}
