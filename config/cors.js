import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173",
  "https://product-manager-frontend-psi.vercel.app",
  "https://productmanager-backend-vd2u.onrender.com"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("🚫 Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

export const corsMiddleware = cors(corsOptions);
