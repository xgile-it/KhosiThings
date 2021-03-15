package com.bezkoder.spring.jwt.mongodb.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bezkoder.spring.jwt.mongodb.models.User;

public interface UserRepository extends JpaRepository<User,String> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}
