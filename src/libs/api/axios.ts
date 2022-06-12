import axios from 'axios';
import { API_URL } from '../../config/defaults';

const api = axios.create({
    baseURL: API_URL,
});

export { api };
