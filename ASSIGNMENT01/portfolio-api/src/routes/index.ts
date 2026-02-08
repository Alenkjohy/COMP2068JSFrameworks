import { Router, Request, Response } from 'express';
import { profile, about, projects, addContactMessage } from '../data';
import { validateContactRequest } from '../middleware/logger';

const router = Router();

// GET /api/profile - Basic profile information
router.get('/profile', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: profile
  });
});

// GET /api/about - About me information
router.get('/about', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: about
  });
});

// GET /api/projects - List of projects
router.get('/projects', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    count: projects.length,
    data: projects
  });
});

// POST /api/contact - Accept a contact message
router.post('/contact', validateContactRequest, (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;
    
    // Add message to in-memory storage
    const newMessage = addContactMessage(name, email, message);
    
    res.status(201).json({
      success: true,
      message: "Contact message received successfully",
      data: {
        id: newMessage.id,
        name: newMessage.name,
        email: newMessage.email,
        timestamp: newMessage.timestamp
      }
    });
  } catch (error) {
    console.error('Error processing contact message:', error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: "Failed to process contact message"
    });
  }
});

export default router;