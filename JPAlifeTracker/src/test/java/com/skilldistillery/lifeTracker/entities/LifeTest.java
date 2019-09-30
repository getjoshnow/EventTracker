package com.skilldistillery.lifeTracker.entities;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class LifeTest {

	private static EntityManager em;;
	private static EntityManagerFactory emf;
	 private static Life life = new Life();	

	 @BeforeAll
	 public static void setUp1() throws Exception {
		 emf = Persistence.createEntityManagerFactory("lifeTrackerPU");
	 }
		@BeforeEach
		public void setUp2() throws Exception {
			em = emf.createEntityManager();
			life = em.find(Life.class, 1);
		}


		@AfterEach
		public void tearDown2() throws Exception {
			em.close();
			life = null;
		}
		@AfterAll
		public static void tearDown1() throws Exception {
			emf.close();
		}
		@Test
		public void Test_basicconnectivitiy(){
			life = em.find(Life.class, 1);
			assertNotNull(life);
		}
		
//		@Test
//		public void Test_entityoneconnectivitiy(){
//			life = em.find(Life.class, 1);
//			assertNotNull(life);
//			assertEquals("Test", life.getName());
//		}
		
		
	}