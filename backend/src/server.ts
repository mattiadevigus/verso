import app from './app';

export function startServer() {
  const port = process.env.PORT ?? 3000;
  app.listen(port);
}