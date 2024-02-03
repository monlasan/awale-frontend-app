import api from './base.service';

class PaymentService {
  async search(data = {}) {
    try {
      const response = await api.post('/payment/search', data);
      return response.data.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
  // async create(data = {}) {
  //   try {
  //     const response = await api.post('/inventory/create', data);
  //     return response.data.data;
  //   } catch (error: any) {
  //     throw error.response?.data.message || error.message;
  //   }
  // }
}

export default new PaymentService();
