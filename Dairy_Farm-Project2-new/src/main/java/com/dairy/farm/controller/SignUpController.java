package com.dairy.farm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dairy.farm.loginDto.LoginRequest;
import com.dairy.farm.model.SignUp;
import com.dairy.farm.service.SignUpService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/users")
public class SignUpController {

	@Autowired
	private SignUpService serve;

	@PostMapping("/signup")
	public SignUp signUp(@RequestBody SignUp user) {
		return serve.registerUser(user);
	}
	
	
	@PostMapping("/login")
	public boolean login(@RequestBody LoginRequest loginRequest) {
	    boolean loginResult = serve.login(loginRequest.getEmail(), loginRequest.getPassword());

	    if (loginResult) {
	        return true;
	    } else {
//	        return ResponseEntity.badRequest().body("Login failed. Check your email and password.");
	    	return false;
	    }
	}
	
}
