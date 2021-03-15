package com.companyname.springbootcrudrest.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(com.companyname.springbootcrudrest.exception.ResourceNotFoundException.class)
    public ResponseEntity<?> resourceNotFoundException(com.companyname.springbootcrudrest.exception.ResourceNotFoundException ex, WebRequest request) {
        com.companyname.springbootcrudrest.exception.ErrorDetails errorDetails = new com.companyname.springbootcrudrest.exception.ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> globleExcpetionHandler(Exception ex, WebRequest request) {
        com.companyname.springbootcrudrest.exception.ErrorDetails errorDetails = new com.companyname.springbootcrudrest.exception.ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}