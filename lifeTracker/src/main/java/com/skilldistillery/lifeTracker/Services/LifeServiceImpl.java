package com.skilldistillery.lifeTracker.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.lifeTracker.entities.Life;

@Service
public class LifeServiceImpl implements LifeService {

	@Autowired
	LifeService repo;
	
	@Override
	public List<Life> index() {
		return repo.index();
	}

	@Override
	public Life show(int id) {
		return repo.show(id);
	}
//
//	@Override
//	public Life create(Life Life) {
//		return repo.saveAndFlush(life);
//	}
		
//	@Override
//	public Life update(int LifeId, Life life) {
//		Life managed = new Life();
//		repo.show(LifeId);
//	if (life != null) 
//	{
//	managed.setId(LifeId);
//	managed.setName(life.getName());
//	managed.setUserStory(life.getUserStory());
//	managed.setDescription(life.getDescription());
//	managed.setPriority(life.getPriority());
//	managed.setCategory(life.getCategory());
//	managed.setLine_Number(life.getLine_Number());
//	managed.setUrlList(life.getUrlList());
//	managed.setSubMenu(life.getSubMenu());
//	
//	return repo.saveAndFlush(managed);
//	}	
//		return null;
//}
	
	@Override
	public Boolean delete(int LifeId) {
		Boolean deleted = true;
		try {
			repo.delete(LifeId);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return deleted;
	}

	@Override
	public Life create(Life Life) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Life update(int LifeId, Life Life) {
		// TODO Auto-generated method stub
		return null;
	}

}