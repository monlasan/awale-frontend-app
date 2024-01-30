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
      break;
  }
  return color;
}
