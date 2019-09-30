package com.skilldistillery.lifeTracker.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.lifeTracker.entities.Life;
@Repository
public interface LifeTrackerRepository extends JpaRepository<Life, Integer>{

	List <Life> findAll();
	List <Life> findByName(String name);
	List <Life> findByUserStory(String userStory); 
	List <Life> findById(int id);
	List <Life> findByDescription(String description);
	Life findByCategory(String category);
	List <Life> findByPriority(String priority);
	
}
