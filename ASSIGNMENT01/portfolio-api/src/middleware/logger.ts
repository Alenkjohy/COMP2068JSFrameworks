import { Request, Response, NextFunction } from 'express';

// Custom middleware for logging requests
export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip || req.socket.remoteAddress;
  
  console.log(`[${timestamp}] ${method} ${url}`);
  
  // Store start time for response time calculation
  const startTime = Date.now();
  
  // Capture when response finishes
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(`[${timestamp}] ${method} ${url} - Status: ${res.statusCode} - ${duration}ms`);
  });
  
  next();
}

// Simple validation middleware for contact form
export function validateContactRequest(req: Request, res: Response, next: NextFunction) {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    res.status(400).json({
      error: "Missing required fields",
      message: "Please provide name, email, and message"
    });
    return;
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({
      error: "Invalid email format",
      message: "Please provide a valid email address"
    });
    return;
  }
  
  next();
}