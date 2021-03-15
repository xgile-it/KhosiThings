package com.appdeveloperblog.app.ws.mobileappws.userservice;


import org.springframework.stereotype.Service;
import com.appdeveloperblog.app.ws.mobileappws.ui.contoller.model.request.UserDetailsRequestModel;
import com.appdeveloperblog.app.ws.mobileappws.ui.contoller.model.response.UserRest;
@Service
public interface UserService {
    UserRest createUser(UserDetailsRequestModel userDetails);
}
