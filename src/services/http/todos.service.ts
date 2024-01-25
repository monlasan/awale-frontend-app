import api from './base.service';

class TodosService {
  async fetchTodos() {
    try {
      const response = await api.get('employees');
      // const response = await api.get('users');
      return response.data;
    } catch (error) {
      console.log('🚩🚩', error);
      throw new Error('An error occurred while fetching the data.');
    }
  }

  async postTodos(data = {}, params = {}) {
    try {
      const response = await api.post('/', data, params);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new TodosService();
