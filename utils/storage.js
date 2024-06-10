export const getItem = (key) => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      return JSON.parse(item);
    }
    return null; // Or any default value on server-side
  };
  
  export const setItem = (key, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };