package com.dairy.farm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dairy.farm.model.SalesDataDto;
import com.dairy.farm.service.SalesDataService;

@RestController
@RequestMapping("/api")
public class SalesController {

	@Autowired
	private SalesDataService salesDataService;
	
	 @GetMapping("/cow/{milkType}")
	    public List<SalesDataDto> getMonthlyDataForSale(@PathVariable(name = "milkType") String milkType) {
	        return salesDataService.getMonthlyDataForSale(milkType);
	    }
	 
	 @GetMapping("/cow/quarterly/{milkType}")
	    public List<SalesDataDto> getQuarterlyDataForCow(@PathVariable(name = "milkType") String milkType) {
	        return salesDataService.getQuarterlyDataForSale(milkType);
	    }
	 
//	 @GetMapping("/buffalo")
//	    public List<SalesDataDto> getMonthlyDataForBuffalo() {
//	        return salesDataService.getMonthlyDataForBuffalo();
//	    }
}
