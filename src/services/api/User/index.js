import buildUrl from 'build-url';

export default (api) => {

    return {
        getMe: () => {
            let url = buildUrl(`/user/me`, {
                queryParams: {

                }
            });

            return api.get(url);
        },
        register: (data) => {
            let url = buildUrl(`/user/register`, {
                queryParams: {

                }
            });
            return api.post(url, data);
        },
        login: (data) => {
            let url = buildUrl(`/user/login`, {
                queryParams: {

                }
            });
            return api.post(url, data);
        },
        updateProfile: (data) => {
            let url = buildUrl(`/user/me`, {
                queryParams: {

                }
            });
            return api.put(url, data);
        },
        uploadImage: (data) => {
            let url = buildUrl(`/user/me/avatar`, {
                queryParams: {
                    ...data.queryParams
                }
            });
            return api.post(url, data);
        },
        getAvatar: (data) => {
            console.log("Salom bu getAvatar", data)
            let url = buildUrl(`/user/6224c5c303aeda00176bea8c/avatar`, {
                queryParams: {
                }
            });

            return api.get(url);
        },
    }
}