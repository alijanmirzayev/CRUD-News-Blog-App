import {userRoute} from './user.route.js'
import { user_signup } from './user.controller.js'


userRoute.get('/', user_signup)
