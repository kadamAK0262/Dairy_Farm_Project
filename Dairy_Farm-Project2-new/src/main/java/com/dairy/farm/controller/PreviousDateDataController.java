package com.dairy.farm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dairy.farm.model.PreviousDateData;
import com.dairy.farm.service.PreviousDateDataService;

@RestController
@RequestMapping("/PreviousDateData")
public class PreviousDateDataController {

	@Autowired
	private PreviousDateDataService previousDateDataService;
	
	@GetMapping("/")
    public List<PreviousDateData> getAllDailyCustomers() {
        return previousDateDataService.getAllPreviousDateData();
    }

    @GetMapping("/{id}")
    public PreviousDateData getDailyCustomerById(@PathVariable int id) {
        return previousDateDataService.getPreviousDateDataById(id);
    }

    @PutMapping("/{id}")
    public PreviousDateData updateDailyCustomer(@PathVariable int id, @RequestBody PreviousDateData dailyCustomer) {
        dailyCustomer.setId(id);
        return previousDateDataService.updatePreviousDateData(dailyCustomer);
    }

    @DeleteMapping("/{id}")
    public void deleteDailyCustomer(@PathVariable int id) {
    	previousDateDataService.deletePreviousDateData(id);
    }
    
    @GetMapping("/IdOfSociety/{societyId}")
    public List<PreviousDateData> getByIdOfSociety(@PathVariable int societyId){
    	return previousDateDataService.getBySocietiesId(societyId);
    }
    
}
