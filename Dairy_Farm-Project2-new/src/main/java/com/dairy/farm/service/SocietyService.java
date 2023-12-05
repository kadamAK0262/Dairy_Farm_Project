package com.dairy.farm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dairy.farm.model.Societies;
import com.dairy.farm.repository.SocietyRepo;

@Service
public class SocietyService {

	@Autowired
	private SocietyRepo societyRepo;
	
	
	public Societies addSociety(Societies society) {
		return societyRepo.save(society);
	}
	
	public List<Societies> getSociety(){
		return societyRepo.findAll();
	}
	
	
//	public ResponseEntity<Societies> updateSociety(long id, Societies society){
//		Optional<Societies> newSociety = societyRepo.findById(id);
//		if(newSociety.isPresent()){
//			Societies mySociety = newSociety.get();
//			mySociety.setSocietyName(mySociety.getSocietyName());
//			mySociety.setSocietyId(mySociety.getSocietyId());
//			mySociety.setTotalActiveCustomers(mySociety.getTotalActiveCustomers());
//			
//			return ResponseEntity.ok(societyRepo.save(mySociety));
//		}
//		else {
//			return ResponseEntity.notFound().build();
//		}
//	}
	
	public Societies updateSociety(Societies society, long id) {
		Societies societies = societyRepo.findById(id).get();
		
		societies.setSocietyName(society.getSocietyName());
		societies.setSocietyId(society.getSocietyId());
		societies.setTotalActiveCustomers(society.getTotalActiveCustomers());
		
		return societyRepo.saveAndFlush(societies);
		
	}

	
	public void deleteSociety(long id) {
		
		        societyRepo.deleteById(id);
		       
		
	}
	
//	public void incrementTotalActiveCustomers(Long societyId) {
//        Societies society = societyRepo.findBySocietyId(societyId);
//
//        if (society != null) {
//            society.setTotalActiveCustomers(society.getTotalActiveCustomers() + 1);
//            societyRepo.save(society);
//        } else {
//            System.out.println("Not");
//            
//        }
//	}
	
	
	
}
