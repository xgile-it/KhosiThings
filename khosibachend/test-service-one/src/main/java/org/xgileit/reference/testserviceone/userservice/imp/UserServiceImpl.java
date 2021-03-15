package org.xgileit.reference.testserviceone.userservice.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.xgileit.reference.testserviceone.shared.Utils;
import org.xgileit.reference.testserviceone.ui.model.request.UserDetailsRequestModel;
import org.xgileit.reference.testserviceone.ui.model.response.UserRest;
import org.xgileit.reference.testserviceone.userservice.UserService;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    Map<String,UserRest> users;

    Utils utils;
     public  UserServiceImpl(){}

     @Autowired
     public  UserServiceImpl(Utils utils)
     {
         this.utils = utils;
     }


    @Override
    public UserRest createUser(UserDetailsRequestModel userDetails) {

        UserRest returnValue = new UserRest();
        returnValue.setEmail(userDetails.getEmail());
        returnValue.setFirstName(userDetails.getFirstName());
        returnValue.setLastName(userDetails.getLastName());

        String userId = utils.generateUserId();
        returnValue.setUserId(userId);

        if(users == null)users =new HashMap<>();
        users.put(userId,returnValue);

        return  returnValue;


    }
}
