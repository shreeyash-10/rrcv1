/* eslint-env node */
import crypto from 'crypto';

const COOKIE_NAME = 'rrc_admin';
const DEFAULT_TTL_SECONDS = 60 * 60 * 8;

const base64UrlEncode = (value) =>
  Buffer.from(value)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');

const base64UrlDecode = (value) =>
  Buffer.from(value.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8');

const getSecret = () => process.env.ADMIN_SECRET || 'dev-secret';

export const safeEqual = (a = '', b = '') => {
  const aBuf = Buffer.from(String(a));
  const bBuf = Buffer.from(String(b));
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
};

export const createSessionToken = (payload, ttlSeconds = DEFAULT_TTL_SECONDS) => {
  const issuedAt = Math.floor(Date.now() / 1000);
  const tokenPayload = {
    ...payload,
    iat: issuedAt,
    exp: issuedAt + ttlSeconds,
  };
  const data = base64UrlEncode(JSON.stringify(tokenPayload));
  const signature = base64UrlEncode(
    crypto.createHmac('sha256', getSecret()).update(data).digest()
  );
  return `${data}.${signature}`;
};

export const verifySessionToken = (token) => {
  if (!token) return null;
  const [data, signature] = token.split('.');
  if (!data || !signature) return null;
  const expected = base64UrlEncode(
    crypto.createHmac('sha256', getSecret()).update(data).digest()
  );
  if (!safeEqual(signature, expected)) return null;
  try {
    const payload = JSON.parse(base64UrlDecode(data));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
};

export const getSession = (req) => {
  const cookieHeader = req.headers?.cookie || '';
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  if (!match) return null;
  return verifySessionToken(decodeURIComponent(match[1]));
};

export const setAuthCookie = (res, token, ttlSeconds = DEFAULT_TTL_SECONDS) => {
  const secure = process.env.NODE_ENV === 'production';
  const parts = [
    `${COOKIE_NAME}=${encodeURIComponent(token)}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${ttlSeconds}`,
  ];
  if (secure) parts.push('Secure');
  res.setHeader('Set-Cookie', parts.join('; '));
};

export const clearAuthCookie = (res) => {
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax`);
};
