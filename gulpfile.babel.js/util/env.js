/*
 * @title Environments
 */

export const NODE_ENV = process.env.NODE_ENV ? "production" : "development";
export const isDev = process.NODE_ENV === "development";
export const isProd = process.env.NODE_ENV === 'production';
