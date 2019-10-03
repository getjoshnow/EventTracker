package com.skilldistillery.lifeTracker.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.lifeTracker.entities.Life;
import com.skilldistillery.lifeTracker.repositories.LifeTrackerRepository;

@Service
public class LifeServiceImpl implements LifeService {

	@Autowired
	private LifeTrackerRepository repo;
	
	@Override
	public List<Life> index() {
		List<Life> debugging = repo.findAll();
		
		return debugging;
	}

	@Override
	public Life show(Integer id) {
		Optional<Life> lifeOpt = repo.findById(id);
		Life life = lifeOpt.get();
		return life;
	}

		
	@Override
	public Life update(Integer Id, Life life) {
		Life managed = new Life();
		managed = repo.findById(Id).get();
	if (life != null) 
	{
	managed.setId(Id);
	managed.setName(life.getName());
	managed.setUserStory(life.getUserStory());
	managed.setDescription(life.getDescription());
	managed.setPriority(life.getPriority());
	managed.setCategory(life.getCategory());
	managed.setLineNumber(life.getLineNumber());
	managed.setUrlList(life.getUrlList());
	managed.setSubMenu(life.getSubMenu());
	
	return repo.saveAndFlush(managed);
	}	
		return null;
}
	
	@Override
	public Boolean delete(Integer LifeId) {
		Boolean deleted = true;
		try {
			repo.delete(repo.findById(LifeId).get());
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return deleted;
	}
	
	@Override
	public Life create(Life life) {
		return repo.saveAndFlush(life);
	}
}