
import { adminAuth, getAdminUser } from "../../utils/axios";

export const authProvider = {
    // called when the user attempts to log in
    login: async ({ username, password }) => {
        
        // accept all username/password combinations
        
            try {
                const user = await adminAuth(username, password);
                if(!user || !user?.token) {
                    console.log(user)
                    return Promise.reject();
                }
                
                localStorage.setItem('adminToken', user.token);
                localStorage.setItem('adminUser', JSON.stringify(user.user));
                return Promise.resolve(user)
            } catch(err) {
                return Promise.reject(err)
            }

        
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403 || status === 500) {
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminUser");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: async () => {
        const user = await getAdminUser(localStorage.getItem('adminToken'));
        console.log(user)
        localStorage.setItem('adminUser', JSON.stringify(user));
        return user?.id ? Promise.resolve(user) : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};