const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');
const userController = require('../controllers/userController');
const subscriptionController = require('../controllers/subscriptionController');
const ratingController = require('../controllers/ratingController');
const issueController = require('../controllers/issueController');
const fileController = require('../controllers/fileController');
const adminController = require('../controllers/adminController');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');

// Route routes
router.get('/routes', routeController.getRoutes);
router.get('/routes/:id', routeController.getRoute);
router.post('/routes', auth, routeController.createRoute);
router.put('/routes/:id', auth, routeController.updateRoute);
router.delete('/routes/:id', auth, routeController.deleteRoute);

// User routes
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.post('/users', userController.createUser);
router.put('/users/:id', auth, userController.updateUser);
router.delete('/users/:id', auth, userController.deleteUser);

// Subscription routes
router.get('/subscriptions', auth, subscriptionController.getSubscriptions);
router.get('/subscriptions/:id', auth, subscriptionController.getSubscription);
router.post('/subscriptions', auth, subscriptionController.createSubscription);
router.delete('/subscriptions/:id', auth, subscriptionController.deleteSubscription);

// Rating routes
router.get('/ratings', ratingController.getRatings);
router.get('/ratings/:id', ratingController.getRating);
router.post('/ratings', auth, ratingController.createRating);
router.put('/ratings/:id', auth, ratingController.updateRating);
router.delete('/ratings/:id', auth, ratingController.deleteRating);

// Issue routes
router.get('/issues', issueController.getIssues);
router.get('/issues/:id', issueController.getIssue);
router.post('/issues', auth, issueController.createIssue);
router.put('/issues/:id', auth, issueController.updateIssue);
router.delete('/issues/:id', auth, issueController.deleteIssue);

// File routes
router.get('/files', fileController.getFiles);
router.get('/files/:id', fileController.getFile);
router.post('/files', auth, fileController.createFile);
router.delete('/files/:id', auth, fileController.deleteFile);

// Admin routes
router.get('/admins', adminController.getAdmins);
router.get('/admins/:id', adminController.getAdmin);
router.post('/admins', auth, adminController.createAdmin);
router.put('/admins/:id', auth, adminController.updateAdmin);
router.delete('/admins/:id', auth, adminController.deleteAdmin);

module.exports = router;