import axios from 'axios';
import { environment } from '../../../environments/environment.development';

export const useBlogService = () => {
    // Axios instance with interceptors for logging
    const axiosInstance = axios.create();

    const fetchAllBlog = async () => {
        try {
            const response = await axiosInstance.get(`${environment.baseUrl}/api/blog?page=1`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.data) {
                return response.data;
            } else {
                console.log('No blog found in response');
                return null;
            }
        } catch (error: any) {
            console.log('Network or Server Error:', error.message || error);
            return null;
        }
    };

    const fetchBlogById = async (id: string) => {
        try {
            const response = await axiosInstance.get(`${environment.baseUrl}/api/blog/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.data) {
                return response.data;
            } else {
                console.log('No blog found in response');
                return null;
            }
        } catch (error: any) {
            console.log('Network or Server Error:', error.message || error);
            return null;
        }
    };

    axiosInstance.interceptors.request.use(
        request => {
            return request;
        },
        error => {
            console.log('Request Error', error);
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            console.log('Response Error', error);
            return Promise.reject(error);
        }
    );

    return { fetchAllBlog, fetchBlogById };
};
