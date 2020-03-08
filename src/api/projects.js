import { handleError, api } from './api';

export default class ProjectService {
    all(page = 1, perPage = -1) {
        api.get(`projects?page=${page}&perPage=${perPage}`)
        .then(res => {
            return res.data;
        }, handleError);
    }


    get(id) {
        api.get(`projects/${id}`)
        .then(res => {
            return res.data;
        }, handleError);
    }

    update(id, data) {
        api.post(`projects/${id}`, data)
        .then(res => {
            return res.data;
        }, handleError)
    }

    delete(id) {
        api.delete(`projects/${id}`)
        .then(res => {
            return res.data
        }, handleError)
    }
}