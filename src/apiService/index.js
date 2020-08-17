import api from '../api';

class Api {
    static async getAllTasks () {
        return api.get('tasks');
    }

    static async createTask (body) {
        return api.post('tasks', body);
    }

    static async updateTask (body) {
        return api.put(`tasks/${body.id}`, body);
    }

    static async deleteTask (id) {
        return api.delete(`tasks/${id}`);
    }
}

export default Api;
