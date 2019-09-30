package com.skilldistillery.lifeTracker.Services;

import java.util.List;

import com.skilldistillery.lifeTracker.entities.Life;

public interface LifeService {

	List <Life> index();
	Life show(int id);
	Life create (Life Life);
	Life update(int LifeId, Life Life);
	Boolean delete(int LifeId);
}
