package com.skilldistillery.lifeTracker.Services;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skilldistillery.lifeTracker.repositories.UserRepository;

@Service
public class AuthServiceImpl implements AuthService {

	@Autowired
	private UserRepository uRepo;
	
	@Autowired
	PasswordEncoder encoder;
	
	
	@Override
	public User register(User user) {
		
		String encryptedPassword = encoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		
		user.setEnabled(true);
		
		user.setRole("Standard");
		
		uRepo.saveAndflush(user);
	
		return user;
	}

}
