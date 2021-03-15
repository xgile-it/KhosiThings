package com.bezkoder.spring.jwt.mongodb.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bezkoder.spring.jwt.mongodb.models.ERole;
import com.bezkoder.spring.jwt.mongodb.models.Role;

public interface RoleRepository extends JpaRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
