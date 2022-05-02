import ApiClient from "@/libs/http-client";

const AuthService = {
    endpoints(route) {
        const url = {
            signUp: "/auth/sign-up",
            signIn: "/auth/sign-in",
        };

        return url[route];
    },

    get(url, param) {
        return ApiClient.get(this.endpoints(url), param);
    },
    post(url, data, config = {}) {
        return ApiClient.post(this.endpoints(url), data, config);
    },
};

export default AuthService;
