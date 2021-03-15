package org.xgileit.reference.testserviceone.userservice;

import org.xgileit.reference.testserviceone.ui.model.request.UserDetailsRequestModel;
import org.xgileit.reference.testserviceone.ui.model.response.UserRest;

public interface UserService {

    UserRest createUser(UserDetailsRequestModel userService);
}
