import { getStoreAccessors } from "vuex-typescript";
import { ActionContext } from "vuex";

class State {
    user: object;
}
export const state: State = {
    user: {},
};
type UserContext = ActionContext<State, any>;
export const user = {
    namespaced: true,
    state,
    getters: {

        user: (state: State) => {

            return state.user;
        }
    },
    mutations: {

        updateUser(state: State, user: object) {

            state.user = user;

        },

        resetState: (s: State) => {
            const initial = state;
            Object.keys(initial).forEach(key => { s[key] = initial[key]; });
        }
    },
    actions: {
        async someAction(context: UserContext, data: object) {
            try {
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        }
    }

};

const { commit, read, dispatch } =
    getStoreAccessors<State, any>("docs");
const mutations = user.mutations;
const getters = user.getters;
const actions = user.actions;

// mutations
export const resetState = commit(mutations.resetState);
export const updateUser = commit(mutations.updateUser);

// getters
export const getUser = read(getters.user);


// actions
export const someAction = dispatch(actions.someAction);
