import express, { Request, Response, NextFunction } from 'express';
import { requestLogger } from './middleware/logger';
import routes from './routes';  // Make sure this points to correct file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(requestLogger);

// API Routes
app.use('/api', routes);

// 404 Handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: "Not Found",
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: "Internal Server Error",
    message: "An unexpected error occurred"
  });
});

export default app;  // Export without starting server