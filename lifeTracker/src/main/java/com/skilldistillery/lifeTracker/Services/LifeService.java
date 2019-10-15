package com.skilldistillery.lifeTracker.Services;

import java.util.List;

import com.skilldistillery.lifeTracker.entities.Life;

public interface LifeService {

	List <Life> index();
	Life show(Integer id);
	Life create (Life life);
	Life update(Integer LifeId, Life life);
	Boolean delete(Integer LifeId);
	
}
