package com.skilldistillery.lifeTracker;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.lifeTracker.entities.Life;
import com.skilldistillery.lifeTracker.repositories.LifeTrackerRepository;


@SpringBootTest
@RunWith(SpringRunner.class)
public class LifeRestTest {

	@Autowired
	private LifeTrackerRepository repo;

//	@Test
//	public void Test_Post_findById() {
//		Life life= repo.show(1);
//		assertNotNull(life);
//		assertEquals("Test", life.getName());
//		}
//	
//	@Test
//	public void Test_PostListfindByCategory()
//	{	List<Category> cat = new ArrayList<>();
//		Post post= repo.findByCategory(cat)
//		assertNotNull(post);
//		assertEquals("Xtreme Single Engine", post.getTitle());
//	}

	@Test
	public void  TEST_Listlife() {
		List <Life> lifes = new ArrayList<>();
		repo.findAll();
		assertNotNull(lifes);
		assertEquals(2, lifes.size());
	}
	

		
	}