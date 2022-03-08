import buildUrl from 'build-url';
import i18next from 'i18next';


export default (api) => {
    return {
        upload: (data) => {
            let url = buildUrl(`/filemanager/uploads`, {
                queryParams: {
                    ...data.queryParams,
                },

            });
            return api.post(url, data)
        },
        deleteImage: (data) => {
            let url = buildUrl(`/filemanager/${data.id}`, {
                queryParams: {
                    ...data.queryParams,
                }
            });
            return api.delete(url)
        },
        getAllTasks: () => {
            console.log("Salom bu get all task")
            let url = buildUrl(`/task`, {
                queryParams: {

                }
            });

            return api.get(url);
        },
        addTask: (data) => {
            console.log("Salom bu add  task")
            let url = buildUrl(`/task`, {
                queryParams: {

                }
            });

            return api.post(url, data);
        },
        deleteTask: (data) => {
            console.log("Salom bu delete  task")
            let url = buildUrl(`/task/${data.id}`, {
                queryParams: {

                }
            });

            return api.delete(url, data);
        },
        getTaskById: (data) => {
            console.log("Salom bu get task by id  ")
            let url = buildUrl(`/task/${data.id}`, {
                queryParams: {

                }
            });

            return api.get(url, data);
        },
        updateTaskByID: (data) => {
            console.log("Salom bu update  task", data)
            let url = buildUrl(`/task/${data.id}`, {
                queryParams: {

                }
            });

            return api.put(`/task/${data.id}`, {description:data.description});
        }
    }
}
