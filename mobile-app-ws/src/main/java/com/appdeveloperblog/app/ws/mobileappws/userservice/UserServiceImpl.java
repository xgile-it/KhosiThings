package com.appdeveloperblog.app.ws.mobileappws.userservice;


import com.appdeveloperblog.app.ws.mobileappws.shared.Utils;
import com.appdeveloperblog.app.ws.mobileappws.ui.contoller.model.request.UserDetailsRequestModel;
import com.appdeveloperblog.app.ws.mobileappws.ui.contoller.model.response.UserRest;

import java.util.HashMap;

import java.util.Map;
import java.util.UUID;

public class UserServiceImpl implements UserService {

    Map<String, UserRest> users;
    Utils utils;

    public UserServiceImpl(){

    }
    public UserServiceImpl(Utils utils)
    {
        this.utils = utils;
    }

    @Override
    public UserRest createUser(UserDetailsRequestModel userDetails){

        UserRest returnValue = new UserRest();
        returnValue.setEmail((userDetails.getEmail()));
        returnValue.setFirstName(userDetails.getFirstName());
        returnValue.setLastName(userDetails.getLastName());

        String userId = UUID.randomUUID().toString();
        returnValue.setUserId(userId);

        if(users == null) users = new HashMap<>();
        users.put(userId,returnValue);
        return  returnValue;
    }
}
