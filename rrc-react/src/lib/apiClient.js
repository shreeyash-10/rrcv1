const envBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const devBaseUrl =
  !envBaseUrl && process.env.NODE_ENV !== 'production' && typeof window !== 'undefined'
    ? `${window.location.protocol}//${window.location.hostname}:5001`
    : '';

export const API_BASE_URL = envBaseUrl || devBaseUrl || '';

export const apiUrl = (path) => {
  if (!path) return API_BASE_URL || '';
  if (!API_BASE_URL) return path;
  return `${API_BASE_URL}${path}`;
};

export const resolveMediaUrl = (value) => {
  if (!value) return value;
  if (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('data:')) {
    return value;
  }
  if (value.startsWith('/uploads') && API_BASE_URL) {
    return `${API_BASE_URL}${value}`;
  }
  return value;
};
