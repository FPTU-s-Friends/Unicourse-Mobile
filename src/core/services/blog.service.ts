import axios from 'axios';
import { environment } from '../../../environments/environment.development';

export const useBlogService = () => {
    const fetchAllBlog = async () => {
        return axios.get(`${environment.baseUrl}/api/blog?page=1`)
            .then(response => {
                if (response.data) {
                    return response.data;
                } else {
                    console.log('No blog found in response');
                    return null;
                }
            })
            .catch(error => {
                console.log(error);
                return null;
            });
    };

    const fetchBlogById = async (id: string) => {
        return axios.get(`${environment.baseUrl}/api/blog/${id}`)
            .then(response => {
                if (response.data) {
                    return response.data;
                } else {
                    console.log('No blog found in response');
                    return null;
                }
            })
            .catch(error => {
                console.log(error);
                return null;
            });
    };

    return { fetchAllBlog, fetchBlogById };
};
