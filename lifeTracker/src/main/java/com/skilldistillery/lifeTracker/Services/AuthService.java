package com.skilldistillery.lifeTracker.Services;

import org.apache.catalina.User;
import org.springframework.stereotype.Service;


@Service
public interface AuthService {

	 User register(User user);
}
