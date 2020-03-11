import { handleError, api } from './api';

export default class ContactService {
    
    static submitContact(data) {
        return api.post(`posts`, {
            title: 'test',
            body: 'Test api only',
            userId: Math.round(Math.random()*100)
        })
        .then(res => {
            return res.data;
        }, handleError)
    }

}