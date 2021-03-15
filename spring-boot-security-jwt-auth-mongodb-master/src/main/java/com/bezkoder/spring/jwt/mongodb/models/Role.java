package com.bezkoder.spring.jwt.mongodb.models;

import org.hibernate.annotations.NaturalId;

import javax.persistence.Id;

import javax.persistence.*;


@Entity
@Table(name = "roles")
public class Role {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
  private ERole name;

  public Role() {

  }

  public Role(ERole name) {
    this.name = name;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public ERole getName() {
    return name;
  }

  public void setName(ERole name) {
    this.name = name;
  }
}
