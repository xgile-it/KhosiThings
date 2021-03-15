package com.appsdeveloperblog.photoapp.api.users.security;

import com.appsdeveloperblog.photoapp.api.users.ui.model.LoginRequestModel;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.tomcat.util.digester.ArrayStack;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {


    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res)throws AuthenticationException{
        try{
            LoginRequestModel creds = new ObjectMapper().readValue(req.getInputStream(),LoginRequestModel.class);

                    return getAuthenticationManager().authenticate(
                            new UsernamePasswordAuthenticationToken(
                                    creds.getEmail(),
                                    creds.getPassword(),
                                    new ArrayStack<>())
                            )

        }catch (IOException e){
            throw new RuntimeException(e);
        }
    }

}
