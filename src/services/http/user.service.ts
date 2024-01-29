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

  // Client
  async createClient(data: any) {
    try {
      const response = await api.post('/user/client/create', {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone_number: data.phone_number,
        gender: data.gender,
        avatar_url: data.avatar_url,
        billing_address: data.billing_address,
        delivery_address: data.delivery_address,
      });
      return response.data.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }

  async searchClients(data = {}) {
    try {
      const response = await api.post('/user/client/search', data);
      return response.data.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
}

export default new UserService();
