import api from './base.service';

class AuthService {
  async login(data: any) {
    try {
      const response = await api.post('/auth/login', {
        emailOrPhone: data.emailOrPhone,
        password: data.password,
      });
      return response.data.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
  async registerContact(data: any) {
    try {
      const response = await api.post('/auth/register', {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone_number: data.phone_number,
        gender: data.gender,
        group: data.group,
        role: data.role,
        password: data.password,
        avatar_url: data.avatar_url,
      });
      return response.data.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
  async logout() {
    try {
      await api.get('/auth/logout');
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
}

export default new AuthService();
