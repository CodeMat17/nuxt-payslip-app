import {
    auth
} from '~/plugins/firebase'
import Cookie from 'js-cookie';

export const state = () => ({
    user: ''
});

export const mutations = {
    SET_USER: (state, account) => {
        state.user = account;
    }
}

export const actions = {
    async login({
            commit
        },
        account
    ) {
        try {
            // Login user
            await auth.signInWithEmailAndPassword(account.email, account.password);

            // Get JWT from firebase
            const token = await auth.currentUser.getIdToken();
            const {
                email,
                uid
            } = auth.currentUser;

            // Set JWT to the cookie
            Cookie.set('access_token', token);

            // Set user locally
            commit('SET_USER', {
                email,
                uid
            });
        } catch (error) {
            throw error;
        }

    },
    logOut() {
        return auth.signOut()
    }
};