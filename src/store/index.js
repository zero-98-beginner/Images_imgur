import { createStore } from 'vuex';
import auth from "./modules/auth";
import images from "./modules/images";

export const store = createStore({
    state: {
        count: 0
    },
    modules: {
        auth,
        images
    }
});