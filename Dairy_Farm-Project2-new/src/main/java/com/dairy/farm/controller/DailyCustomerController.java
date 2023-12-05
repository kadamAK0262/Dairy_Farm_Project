package com.dairy.farm.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dairy.farm.model.Costumer;
import com.dairy.farm.model.DaliyCustomer;
import com.dairy.farm.service.DailyCustomerService;

@RestController
@RequestMapping("/dailyCustomers")
public class DailyCustomerController {
	
	@Autowired
    private DailyCustomerService dailyCustomerService;

    @GetMapping("/")
    public List<DaliyCustomer> getAllDailyCustomers() {
        return dailyCustomerService.getAllDailyCustomers();
    }

    @GetMapping("/{id}")
    public DaliyCustomer getDailyCustomerById(@PathVariable int id) {
        return dailyCustomerService.getDailyCustomerById(id);
    }

    @PutMapping("/{id}")
    public DaliyCustomer updateDailyCustomer(@PathVariable int id, @RequestBody DaliyCustomer dailyCustomer) {
        dailyCustomer.setId(id);
        return dailyCustomerService.updateDailyCustomer(dailyCustomer);
    }

    @DeleteMapping("/{id}")
    public void deleteDailyCustomer(@PathVariable int id) {
        dailyCustomerService.deleteDailyCustomer(id);
    }
    
    
    @GetMapping("/societyId/{societyId}")
    public List<DaliyCustomer> getBySociety(@PathVariable int societyId){
    	return dailyCustomerService.getBySocietyId(societyId);
    }
    
    @GetMapping("/addCustomerToDailyCustomer")
    public void addCustomerToDailyCustomer() {
    	dailyCustomerService.getDataFromCustomerToAngular();
    	
    }
    
    @PostMapping("/addListOfDailyCustomer")
    public Costumer saveDataList(@RequestBody  Costumer dataList) {
        // Here you can handle the received data list and save it to your database or perform any other actions
        System.out.println("Received data list: " + dataList);

        return dailyCustomerService.saveDataListService(dataList);
    }

    
    @PutMapping("/updateData")
    public void updateDailyCustomerByDate( @RequestBody DaliyCustomer dc) {
    	 LocalDate currentDate = LocalDate.now();
    	System.out.println(dc+"ssssssssssss");
    
    int	id=dc.getId();
    System.out.println(" aaaaaaaaaaaa"+id);
    LocalDate checkDate=currentDate;
    String delivered=dc.getDelivered();
    String milkType=dc.getMilkType();
    long quantity=dc.getQuantity();
    	
    	dailyCustomerService.updateCustomerByDateAndId(id,checkDate, delivered, milkType, quantity);
    }
    
    
    @GetMapping("/historyOfCustomer/{id}")
    public List<DaliyCustomer> getHistoryOfCustomer(@PathVariable String id) {
    	int newid=Integer.parseInt(id);
    	return dailyCustomerService.getHistoryOfCustomer(newid);
    }
}
