import axios from 'axios';
import { environment } from '../../../environments/environment.development';

export const useAuthService = () => {
    const signIn = async (email: string, password: string) => {
        return axios.post(`${environment.baseUrl}/api/auth/basic-signIn`, { email, password })
            .then(response => {
                if (response.data) {
                    return response.data;
                } else {
                    console.log('No user found in response');
                    return null;
                }
            })
            .catch(error => {
                console.log(error);
                return null;
            });
    };

    const signUp = async (email: string, password: string) => {
        return axios.post(`${environment.baseUrl}/api/auth/basic-signUp`, { email, password })
            .then(response => {
                if (response.data) {
                    return response.data;
                } else {
                    console.log('No user found in response');
                    return null;
                }
            })
            .catch(error => {
                console.log(error);
                return null;
            });
    };

    return { signIn, signUp };
};
