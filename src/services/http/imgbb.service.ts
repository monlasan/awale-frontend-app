import axios from 'axios';

class ImgBBService {
  async upload(data = {}) {
    try {
      const response = await axios.post('https://api.imgbb.com/1/upload', data);
      return response.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
}

export default new ImgBBService();
