import cors from 'cors';

const allowedOrigins = [
  'http://localhost:5173',
  'https://product-manager-frontend-psi.vercel.app',
  'https://productmanager-backend-vd2u.onrender.com'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.some(url => origin.startsWith(url))) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked for origin: ${origin}`));
    }
  },
  credentials: true,
};
