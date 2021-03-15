package com.crud.springboot.springbootjpacrud.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

    @Entity
    @Table(name = "employees")
    public class Employee {

        @Id
        @GeneratedValue
        private long id;


        @NotNull
        @Size(min=2,message = "First Name should have atleast 2 characters")
        @Column(name="first_name")
        private String firstName;

        @NotNull
        @Size(min=2,message = "Last Name should have atleast 2 characters")
        @Column(name="last_name")
        private String lastName;

        @NotNull
        @Email
        @Column(name = "email")
        private String emailId;

        public Employee() {

        }

        public Employee(String firstName, String lastName, String emailId) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.emailId = emailId;
        }

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        public long getId() {
            return id;
        }
        public void setId(long id) {
            this.id = id;
        }

        @Column(name = "first_name", nullable = false)
        public String getFirstName() {
            return firstName;
        }
        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        @Column(name = "last_name", nullable = false)
        public String getLastName() {
            return lastName;
        }
        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        @Column(name = "email_address", nullable = false)
        public String getEmailId() {
            return emailId;
        }
        public void setEmailId(String emailId) {
            this.emailId = emailId;
        }

        @Override
        public String toString() {
            return "Employee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId
                    + "]";
        }

    }

