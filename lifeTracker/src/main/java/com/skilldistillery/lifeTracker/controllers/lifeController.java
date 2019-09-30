package com.skilldistillery.lifeTracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.lifeTracker.Services.LifeService;
import com.skilldistillery.lifeTracker.entities.Life;

@RequestMapping("api")
@RestController
public class lifeController {

	@GetMapping("ping")
	public String ping()
	{ return "pong/n";  				}
	
	@Autowired
	private LifeService svr;

	@GetMapping(path = "life")
	public List<Life> index() {
		return svr.index();
	}

	@GetMapping(path = "life/{filmId}")
	public Life show(@PathVariable Integer filmId, HttpServletResponse resp) {
		Life life = new Life();
		return svr.show(filmId);
	}

	@PostMapping(path = "life/{film}")
	public Life create(@RequestBody Life life, HttpServletResponse resp, HttpServletRequest req) {
		System.out.println("TESTing");
		try {
			svr.create(life);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/");
			url.append(life.getId());
			resp.setHeader("Location", url.toString());
		} catch (Exception e) {
			resp.setStatus(400);
			life = null;
			e.printStackTrace();
		}
		return life;
	}

	@PutMapping(path = "life/{film}")
	public Life update(@PathVariable("filmId") Integer filmId, @RequestBody Life life, HttpServletResponse resp) {

		try {
			svr.update(filmId, life);
			if (life == null) 
			{resp.setStatus(404);}
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
			life = null;
		}
		return life;
		
	}

	@DeleteMapping(path = "life/{filmId}")
	public void delete(@PathVariable int filmId, HttpServletRequest req, HttpServletResponse resp) {
		try {
			svr.delete(filmId);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(404);
		}
	}
	
	
	
}
