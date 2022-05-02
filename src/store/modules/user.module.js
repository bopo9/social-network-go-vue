import AuthService from "../../services/api/auth.service";


let initialState = {
    authToken: false,
    isAuth: false,
    user: {


    }
};

let state = {
    authToken: false,
    isAuth: false,
    user: {
        name: "Borys",
        surname: "Shcherbina",
        age: "23",
        gender: "male",
        username: "bopo9",
        country: "Ukraine",
        city: "Odessa",
        avatar: "https://api.beginning.projects.od.ua/storage/uploads/psychologists/test_photos/test_photo_male.jpg"
    }
};

const mutations = {
    SET_USER(state, payload) {
        state.user = Object.assign(state.user, payload.data);
        state.isAuth = true;
        state.authToken = payload.token;
    },
    UPDATE_USER(state, payload) {
        state.user = payload.data;
    },
    SET_AUTH_TOKEN(state, payload) {
        state.isAuth = true;
        state.authToken = payload;
    },
    SET_LOGOUT(state) {
        state.isAuth = false;
        state.authToken = null;
        state.user = initialState;
    },
};

const actions = {
    // setPatientGeneralQuestions({ commit }, payload) {
    //     commit("SET_PATIENT_GENERAL_QUESTIONS", payload);
    // },
    // eslint-disable-next-line no-unused-vars
    signUp({ commit }, data) {
        return new Promise((resolve, reject) => {
            AuthService.post("signUp", data)
                .then((response) => {
                    // commit("SET_USER", response.data);
                    console.log(response)
                    return resolve("");
                })
                .catch((error) => reject(error));
        });
    },
};

const getters = {
    getUser: (state) => state.user,
    getAuthToken: (state) => state.authToken,
    getAuthParam: (state) => {
        return {
            isAuth: state.isAuth,
            authToken: state.authToken,
            userRole: state.user.role,
        };
    },
    isAuth: (state) => state.isAuth,
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
