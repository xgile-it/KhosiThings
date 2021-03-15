package com.crud.springboot.springbootjpacrud.repository;


import com.crud.springboot.springbootjpacrud.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
