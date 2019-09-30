package com.skilldistillery.lifeTracker.data;

import java.util.List;

import com.skilldistillery.lifeTracker.entities.Life;

public interface LifeDAO {

	
	List <Life> findAll();
}
