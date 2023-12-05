package com.dairy.farm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dairy.farm.model.Costumer;
import com.dairy.farm.service.CostumerService;





@RestController
@RequestMapping("/api")
public class CostumerController {

	@Autowired
	private CostumerService serve;

	@GetMapping("/getCostumer")
	public List<Costumer> getCostumer() {
		System.out.println(serve.getCostumer());
		return serve.getCostumer();
	}

	@PostMapping("/addCostumer")
	public Costumer addCost(@RequestBody Costumer costumer) {
		return serve.addCustomer(costumer);
	}

	@DeleteMapping("/deleteCustomer/{id}")
	public void deleteCustomer(@PathVariable int id) {
		serve.deleteCustomer(id);
	}

	@GetMapping("/customersBySocietyId/{idOfSociey}")
//	    public ResponseEntity<List<Costumer>> getCustomersBySocietyId (@PathVariable long idOfSociey){
	public List<Costumer> getCustomersSocietyId(@PathVariable long idOfSociey) {
		List<Costumer> customers = serve.getCustomerBySocietyId(idOfSociey);

//	    	if(customers.isEmpty()) { 
//	    		return null;
//	    	}
//	    	else {
		return (customers);
//	    	
	}

	
	@PutMapping("/update/{id}")
	public ResponseEntity<Costumer> updateCustomer(@PathVariable int id, @RequestBody Costumer updatedCustomer) {
		return serve.updateCustomer(id, updatedCustomer);

	}

	
	
	
	
	
	
//		 @PostMapping("/addCostumer")
//		    public ResponseEntity<Costumer> addCostumer(@RequestBody Costumer costumer) {
//		        Costumer addedCostumer = serve.addCostumer(costumer);
	//
//		        if (addedCostumer != null) {
//		            return ResponseEntity.ok(addedCostumer);
//		        } else {
//		            return ResponseEntity.badRequest().body(null);
//		        }
//		    }

//	@GetMapping("/getCostumer")
//	public java.util.List<Costumer> getCost(){
//		return serve.getCostumer();
//	}
//	
//	@PostMapping("/addCostumer")
//	public Costumer addCost(@RequestBody Costumer costumer) {
//		return serve.addCostumer(costumer);
//	}

//	@PostMapping("/assignSocietyToCustomer/{customerId}/{societyId}")
//    public ResponseEntity<String> assignSocietyToCustomer(
//            @PathVariable int customerId,
//            @PathVariable long societyId
//    ) {
//        serve.assignSocietyToCustomer(customerId, societyId);
//        return ResponseEntity.ok("Society assigned to customer successfully.");
//    }
}
