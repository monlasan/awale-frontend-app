import api from './base.service';

class DocumentService {
  // Document
  async createDocument(data: any) {
    try {
      const response = await api.post('/document/create', data);
      return response.data.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }

  async getDocument(documentId: string | undefined) {
    try {
      const response = await api.get('/document/purchase/' + documentId);
      return response.data.data;
    } catch (error: any) {
      console.log('object', error);
      throw error.response?.data.message || error.message;
    }
  }
  async searchPurchaseDocuments(data = {}) {
    try {
      const response = await api.post('/document/purchase/search', data);
      return response.data.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
  async searchSaleDocuments(data = {}) {
    try {
      const response = await api.post('/document/sale/search', data);
      return response.data.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
}

export default new DocumentService();
