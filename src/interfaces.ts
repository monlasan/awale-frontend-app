export interface IClient {
  id: string;
  reference: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  gender: 'MALE' | 'FEMALE';
  avatar_url: string;
  billing_address: string;
  delivery_address: string;
  created_at: Date;
  updated_at: Date;
}
