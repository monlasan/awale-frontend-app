import imgbbService from '@/services/http/imgbb.service';
import axios from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Check if the code is running in a browser environment
export const isBrowser = typeof window !== 'undefined';
export class LocalStorage {
  // Get a value from local storage by key
  static get(key: string) {
    if (!isBrowser) return;
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (err) {
        return null;
      }
    }
    return null;
  }

  // Set a value in local storage by key
  static set(key: string, value: any) {
    if (!isBrowser) return;
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Remove a value from local storage by key
  static remove(key: string) {
    if (!isBrowser) return;
    localStorage.removeItem(key);
  }

  // Clear all items from local storage
  static clear() {
    if (!isBrowser) return;
    localStorage.clear();
  }
}

export function generateRandomPassword(): string {
  const length = 8;
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

type Option = {
  label: string;
  value: string;
};
export function formatOption(label: string, arrayOfOptions: Option[]) {
  const filt = arrayOfOptions.filter((s) => s.label === label)[0].value;
  return filt;
}
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
export function formatPrice(price: number) {
  return price + ' €';
}

export function processStatusColor(
  status:
    | 'IN_WRITTING'
    | 'IS_READY'
    | 'IS_REJECTED'
    | 'IS_LOCKED'
    | 'IN_DELIVERY'
    | 'IN_RECOVERY'
    | 'IS_VALIDATED'
    | 'IS_WAITING'
) {
  let color = '';
  switch (status) {
    case 'IN_WRITTING':
      color = '38, 100%, 50%';
      break;
    case 'IS_READY':
      color = '227, 52%, 50%';
      break;
    case 'IS_REJECTED':
      color = '0, 52%, 50%';
      break;
    case 'IS_LOCKED':
      color = '0, 0%, 30%';
      break;
    case 'IN_DELIVERY':
      color = '183, 67%, 31%';
      break;
    case 'IN_RECOVERY':
      color = '320, 82%, 40%';
      break;
    case 'IS_VALIDATED':
      color = '116, 32%, 50%';
      break;
    case 'IS_WAITING':
      color = '283, 100%, 30%';
      break;
    default:
      color = '183, 100%, 30%';
      break;
  }
  return color;
}

export function generateRandomColor() {
  // Generate random R, G, and B values
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Convert decimal to hexadecimal
  var rHex = r.toString(16).padStart(2, '0');
  var gHex = g.toString(16).padStart(2, '0');
  var bHex = b.toString(16).padStart(2, '0');

  // Concatenate and return the color in hexadecimal format
  return '#' + rHex + gHex + bHex;
}

interface Item {
  id: string;
  name: string;
  quantity: number;
  price: number;
}
export function groupItems(items: Item[]) {
  // TODO: we are manimpulating financial data and money infos here... i should do more research about storing those type of data
  const groupedItems: any = {};

  for (let i = 0; i < items.length; i++) {
    const item: Item = items[i];
    const id = item.id;

    if (!groupedItems.hasOwnProperty(id)) {
      // Initialize the grouped item if it doesn't exist
      groupedItems[id] = {
        id: id,
        name: item.name,
        quantity: 0,
        total_price: 0,
      };
    }

    // Update quantity and total price for the item's id
    groupedItems[id].quantity++;
    groupedItems[id].total_price += item.price;
  }

  const result = [];
  for (const id in groupedItems) {
    if (groupedItems.hasOwnProperty(id)) {
      result.push(groupedItems[id]);
    }
  }

  return result;
}

export async function uploadImg({
  name,
  imageData,
}: {
  name: string;
  imageData: any;
}) {
  const data = new FormData();
  data.append('name', name);
  data.append('key', import.meta.env.VITE_IMGBB_APIKEY);
  data.append('image', imageData);

  const imageMetadata = await imgbbService.upload(data);
  // try {
  //   const res = await axios.post('https://api.imgbb.com/1/upload', data);
  //   const photoMetadata = res.data;
  //   console.log(photoMetadata);
  return imageMetadata;
  //   // Do some checks: isImage, sizeLimit etc...
  //   // if () {}
  //   // return photoMetadata.data;
  // } catch (error) {

  //   throw Error('Something went wrong while saving image');
  // }
}
