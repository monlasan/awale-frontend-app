import api from './base.service';

class FolderService {
  // Folder

  async updateFolderClient(data: any) {
    try {
      const response = await api.put('/folder/update-client', data);
      return response.data.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
  // async createFolder(data: any) {
  //   try {
  //     const response = await api.post('/user/folder/create', {
  //     });
  //     return response.data.data;
  //   } catch (error: any) {
  //     throw error.response?.data.message || error.message;
  //   }
  // }

  // async getFolder(folderId: string | undefined) {
  //   try {
  //     const response = await api.get('/folder/purchase/' + folderId);
  //     return response.data.data;
  //   } catch (error: any) {
  //     console.log('object', error);
  //     throw error.response?.data.message || error.message;
  //   }
  // }
  async searchPurchaseFolders(data = {}) {
    try {
      const response = await api.post('/folder/purchase/search', data);
      return response.data.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
}

export default new FolderService();
