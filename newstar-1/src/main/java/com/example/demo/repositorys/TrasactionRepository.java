package com.example.demo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entityc.TrasactionEntity;

public interface TrasactionRepository extends JpaRepository<TrasactionEntity, Long> {

}