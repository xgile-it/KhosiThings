package com.appdeveloperblog.app.ws.mobileappws.ui.contoller;


import com.appdeveloperblog.app.ws.mobileappws.exceptions.UserServiceExceptions;

import com.appdeveloperblog.app.ws.mobileappws.ui.contoller.model.request.UpdateUserDetailsRequestModel;
import com.appdeveloperblog.app.ws.mobileappws.ui.contoller.model.request.UserDetailsRequestModel;
import com.appdeveloperblog.app.ws.mobileappws.ui.contoller.model.response.UserRest;
import com.appdeveloperblog.app.ws.mobileappws.userservice.UserService;
import com.appdeveloperblog.app.ws.mobileappws.userservice.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired ;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/users")//http://localhost:8080/users
public class UserController {

    Map<String, UserRest> users;

    @Autowired
    UserService userservice;

    @GetMapping
    public String getUsers(@RequestParam(value = "page",defaultValue = "1") int page,
                           @RequestParam(value = "limit",defaultValue = "50") int limit,
                           @RequestParam(value = "sort",defaultValue = "desc",required = false)String sort)
    {
        return "get user was called with page = " + page + " and limit = " + limit + " and sort = "+ sort;
    }

    @GetMapping(path = "/{userId}",
                produces = {
            MediaType.APPLICATION_XML_VALUE,
                        MediaType.APPLICATION_JSON_VALUE,

                })

    public ResponseEntity<UserRest>getUser(@PathVariable String userId)
    {
        if(true)throw  new UserServiceExceptions("A user service exception service is thrown");
           if(users.containsKey(userId))
           {
               return  new ResponseEntity<>(users.get(userId),HttpStatus.OK);
           }
           else{
               return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
           }
    }

    @PostMapping
            (consumes ={
         MediaType.APPLICATION_XML_VALUE,
         MediaType.APPLICATION_JSON_VALUE,
            }, produces = {
                    MediaType.APPLICATION_XML_VALUE,
                    MediaType.APPLICATION_JSON_VALUE,
            })
    public ResponseEntity<UserRest>createUser(@Valid @RequestBody UserDetailsRequestModel userDetails)
    {
        UserRest returnValue = new UserServiceImpl().createUser(userDetails);
        return new ResponseEntity<UserRest>(returnValue,HttpStatus.OK);
    }

    @PutMapping
            (path = "/{userId}",consumes = {
                    MediaType.APPLICATION_XML_VALUE,
                    MediaType.APPLICATION_JSON_VALUE,

            }, produces = {
                    MediaType.APPLICATION_XML_VALUE,
                    MediaType.APPLICATION_JSON_VALUE,
            })
    public UserRest updateUser(@PathVariable String userId, @Valid @RequestBody UpdateUserDetailsRequestModel userDetails)
    {
        UserRest storedUserDetails = users.get(userId);
        storedUserDetails.setFirstName(userDetails.getFirstName());
        storedUserDetails.setLastName(userDetails.getLastName());

        users.put(userId,storedUserDetails);
        return storedUserDetails;
    }

    @DeleteMapping(path = "/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable String id)
    {

        users.remove(id);
        return ResponseEntity.noContent().build();
    }







}
