package com.skilldistillery.lifeTracker.data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.lifeTracker.entities.Life;

@Service
@Transactional
public class LifeDAOImpl implements LifeDAO {
	
	@Autowired
	Life life;
	
	@PersistenceContext
	private EntityManager em;

	public List<Life> findAll() {
		  String query = "Select * from Life ";
		  return em.createQuery(query, Life.class).getResultList();
		
	}
	
	
	

}
