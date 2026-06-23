package com.example.demo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entityc.Role;


public interface RoleRepository extends JpaRepository<Role, Long> {

}
