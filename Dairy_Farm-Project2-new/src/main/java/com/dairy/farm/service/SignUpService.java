package com.dairy.farm.service;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.dairy.farm.model.SignUp;
import com.dairy.farm.repository.SignUpRepo;

@Service
public class SignUpService {
	
	@Autowired
	private SignUpRepo  repo;
	
	public SignUp registerUser(SignUp user) {
		return repo.save(user);
	}
	
	
	public boolean login(String email, String password) {
      // Find the user by email
      Optional<SignUp> optionalUser = repo.findByEmail(email);

      if (optionalUser.isPresent()) {
          SignUp user = optionalUser.get();
          // Check if the provided password matches the stored plain text password
          return password.equals(user.getPassword());
      }
      return false; // User not found or invalid credentials
	}
	
}
