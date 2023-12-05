package com.dairy.farm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dairy.farm.model.PreviousDateData;
import com.dairy.farm.repository.PreviousDateDataRepo;

@Service
public class PreviousDateDataService {

	@Autowired
	private PreviousDateDataRepo previousDateDataRepo;
	
	
	public List<PreviousDateData> getAllPreviousDateData() {
        return previousDateDataRepo.findAll();
    }

    public PreviousDateData getPreviousDateDataById(int id) {
        return previousDateDataRepo.findById(id).orElse(null);
    }

    public PreviousDateData updatePreviousDateData(PreviousDateData dailyCustomer) {
        return previousDateDataRepo.save(dailyCustomer);
    }

    public void deletePreviousDateData(int id) {
    	previousDateDataRepo.deleteById(id);
    }
	
	public List<PreviousDateData> getBySocietiesId(int societyId){
		return previousDateDataRepo.findByIdOfSociety(societyId);
	}
    
}
