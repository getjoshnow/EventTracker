package com.skilldistillery.lifeTracker.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.lifeTracker.entities.Life;
@Repository
public interface LifeTrackerRepository extends JpaRepository<Life, Integer>{

	
}
