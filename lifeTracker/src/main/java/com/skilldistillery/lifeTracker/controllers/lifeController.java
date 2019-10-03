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

	
	@Autowired
	private LifeService svr;


	@GetMapping("ping")
	public String ping()
	{ return "pong/n";  }
	
	@GetMapping(path ="posts")
	public List<Life> index() {
		return svr.index();
	}

	@GetMapping(path ="post/{trackerId}")
	public Life show(@PathVariable Integer trackerId, HttpServletResponse resp) {
		return svr.show(trackerId);
	}

	@PostMapping(path ="posts/")
	public Life create(@RequestBody Life life, HttpServletResponse resp, HttpServletRequest req) {
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

	@PutMapping(path ="posts/{trackerId}")
	public Life update(@PathVariable("trackerId") Integer trackerId, @RequestBody Life life, HttpServletResponse resp) {

		try {
			svr.update(trackerId, life);
			if (life == null) 
			{resp.setStatus(404);}
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
			life = null;
		}
		return life;
		
	}

	@DeleteMapping(path ="posts/{trackerId}")
	public void delete(@PathVariable int trackerId, HttpServletRequest req, HttpServletResponse resp) {
		try {
			svr.delete(trackerId);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(404);
		}
	}
	
	
	
}
