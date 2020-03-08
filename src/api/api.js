import axios from 'axios';

export var api = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});

export function handleError(error) {
    return 'not implement';
}