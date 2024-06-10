export function setCookie(name, value, expires = 7) {
  if (typeof document !== 'undefined') {
    const date = new Date();
    date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
    const expiresString = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expiresString}; path=/`;
  }
}

export function getCookie(name) {
  if (typeof document !== 'undefined') {
    const nameEq = `${name}=`;
    const cookieData = document.cookie;
    if (!cookieData) {
      return null;
    }
    const cookieParts = cookieData.split(';');
    for (let i = 0; i < cookieParts.length; i++) {
      let cookie = cookieParts[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEq) === 0) {
        return cookie.substring(nameEq.length, cookie.length);
      }
    }
    return null;
  }
  return null;
}
