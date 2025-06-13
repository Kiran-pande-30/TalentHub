import express from 'express'

import userController from '../controllers/user.controller.js'
import authController from '../controllers/auth.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'
import reviewRouter from './review.routes.js'
import { getAppInfo } from '../controllers/app.controller.js'

const router = express.Router()

router.use('/:id/reviews', reviewRouter)

/**
 * @openapi
 * /api/v1/users/appInfo:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get application information
 *     description: Retrieve application information such as user statistics for the admin dashboard.
 *     responses:
 *       200:
 *         description: Application information retrieved successfully.
 */
router.get('/appInfo', getAppInfo)

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users except admins
 *     description: Retrieve a list of all users except those with the 'admin' role.
 *     responses:
 *       200:
 *         description: List of users retrieved successfully.
 */
router.route('/').get(userController.getUsers('freelancer', 'client'))

/**
 * @openapi
 * /api/v1/users/me:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get details of the authenticated user
 *     description: Retrieve information about the currently authenticated user.
 *     responses:
 *       200:
 *         description: User information retrieved successfully.
 *   patch:
 *     tags:
 *       - Users
 *     summary: Update the authenticated user's information
 *     description: Update details of the currently authenticated user.
 *     responses:
 *       200:
 *         description: User updated successfully.
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete the authenticated user's account
 *     description: Remove the currently authenticated user's account.
 *     responses:
 *       204:
 *         description: User deleted successfully.
 */
router
  .route('/me')
  .get(authMiddleware.protect, userController.getMe, userController.getUser)
  .patch(
    authMiddleware.protect,
    userController.getMe,
    userController.updateUser,
  )
  .delete(
    authMiddleware.protect,
    userController.getMe,
    userController.deleteUser,
  )

router.route('/freelancers').get(userController.getUsers('freelancer'))
router.route('/clients').get(userController.getUsers('client'))
router.route('/admins').get(userController.getUsers('admin'))
router.get(
  '/all',
  authMiddleware.protect,
  authMiddleware.restrictTo('admin'),
  userController.getUsers(),
)
router.get(
  '/applications',
  authMiddleware.protect,
  userController.getMyApplications,
)
router
  .route('/:id')
  .get(userController.getUser)
  .delete(
    authMiddleware.protect,
    authMiddleware.restrictTo('admin'),
    userController.deleteUser,
  )

router.route('/u/:username').get(userController.getUserByUserName)
router.post('/login', authController.login)
router.post('/signup', authController.signup)
router.post('/logout', authController.logout)

export default router;
