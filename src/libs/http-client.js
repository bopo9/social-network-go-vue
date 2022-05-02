import Axios from "axios";
import store from "@/store";
import router from "@/router";
import Vue from "vue";

const options = {
    baseURL: process.env.VUE_APP_API,
    headers: {
        // "Access-Control-Allow-Origin": "*",
        // Accept: "application/json",
        // "Content-Type": "application/json",
        // "charset": "utf-8"
    },
};

const httpClient = Axios.create(options);

httpClient.interceptors.request.use((config) => {
    // if (store.getters["app/getSelectedLocale"]) {
    //     config.headers["Accept-Language"] = store.getters["app/getSelectedLocale"];
    // }
    // if (store.getters["user/getAuthToken"])
    //     config.headers["Authorization"] =
    //         "Bearer " + store.getters["user/getAuthToken"];

    return config;
});

httpClient.interceptors.response.use(
    (response) => {
        if (response.config.headers["authorization"]) {
            store.commit(
                "user/SET_AUTH_TOKEN",
                response.config.headers["authorization"]
            );
            return response;
        } else return response;
    },
    (error) => {
        const { data, status } = error.response;
        let countLenght = null;
        let message = "";

        if (status === 401) {
            store.commit("user/SET_LOGOUT");

            message = "Увы, но Вы были разлогинены :с";
            router.push("/auth/sign-in");
        } else if (status === 422) {
            message = data.message;
        } else return Promise.reject(data);

        const timerValue = (defaultTimer = 7000) => {
            if (countLenght > 1) {
                return countLenght * defaultTimer;
            } else {
                return defaultTimer;
            }
        };

        Vue.swal({
            html: message,
            icon: "error",
            timer: timerValue(),
            toast: true,
            modal: false,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Vue.swal.stopTimer);
                toast.addEventListener("mouseleave", Vue.swal.resumeTimer);
            },
            position: "top-right",
            showConfirmButton: false,
        });
    }
);

const ApiClient = {
    get(url, conf = {}) {
        return httpClient.get(url, conf);
    },

    put(url, data = {}, conf = {}) {
        return httpClient.put(url, data, conf);
    },

    delete(url, conf = {}) {
        return httpClient.delete(url, conf);
    },

    post(url, data = {}, conf = {}) {
        return httpClient.post(url, data, conf);
    },

    patch(url, data = {}, conf = {}) {
        return httpClient.patch(url, data, conf);
    },
};

export default ApiClient;
