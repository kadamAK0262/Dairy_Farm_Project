package com.dairy.farm.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dairy.farm.model.Societies;
import com.dairy.farm.service.SocietyService;

@RestController
@RequestMapping("/api")
public class SocietyController {

	@Autowired
	private SocietyService societyserve;
	
	@PostMapping("/addSociety")
	public Societies addSocieties(@RequestBody Societies society) {
		return societyserve.addSociety(society);
	}
	
	@GetMapping("/getSocieties")
	public List<Societies> getSocieties(){
		return societyserve.getSociety();
		}
	
	@PutMapping("/updateSociety/{id}")
	public Societies updateSociety(@PathVariable int id, @RequestBody Societies society){
		return societyserve.updateSociety(society, id);
	}
	
	@DeleteMapping("/deleteSociety/{id}")
	public void deleteSociety(@PathVariable long id) {
		societyserve.deleteSociety(id);
	}
	
}
