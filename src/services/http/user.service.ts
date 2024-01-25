import api from './base.service';

class UserService {
  async search(data = {}) {
    try {
      const response = await api.post('/user/search', data);
      return response.data.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
}

export default new UserService();
