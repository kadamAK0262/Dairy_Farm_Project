package com.dairy.farm.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dairy.farm.model.Costumer;
import com.dairy.farm.model.DaliyCustomer;
import com.dairy.farm.repository.CostumerRepo;
import com.dairy.farm.repository.DailyCustomerRepo;
import com.fasterxml.jackson.annotation.JsonFormat;

@Service
public class DailyCustomerService {

	@Autowired
    private DailyCustomerRepo dailyCustomerRepository;
	
	@Autowired
	private CostumerRepo costumerRepo;

    public List<DaliyCustomer> getAllDailyCustomers() {
        return dailyCustomerRepository.findAll();
    }

    public DaliyCustomer getDailyCustomerById(int id) {
        return dailyCustomerRepository.findById(id).orElse(null);
    }

    public DaliyCustomer updateDailyCustomer(DaliyCustomer dailyCustomer) {
        return dailyCustomerRepository.save(dailyCustomer);
    }

    public void deleteDailyCustomer(int id) {
        dailyCustomerRepository.deleteById(id);
    }
	
    public List<DaliyCustomer> getBySocietyId(int societyId) {
    	return dailyCustomerRepository.findByIdOfSociety(societyId);
    }
    
//    @JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
    public  Costumer saveDataListService( Costumer dataList) {
    	LocalDate currentDate = LocalDate.now();
    	
//    		List<DaliyCustomer> listOfDailyCustomer=new ArrayList<>();
    		DaliyCustomer dailyCustomer=new DaliyCustomer();
    		dailyCustomer.setCustomerId(dataList.getId());
        	dailyCustomer.setCustomerName(dataList.getCustomerName());
        	dailyCustomer.setContactNo(dataList.getContactNo());
        	dailyCustomer.setAddress(dataList.getAddress());
        	dailyCustomer.setBill(dataList.getBill());
        	dailyCustomer.setDelivered(dataList.getDelivered());
        	dailyCustomer.setEmailId(dataList.getEmailId());
        	dailyCustomer.setIdOfSociety(dataList.getIdOfSociety());;
        	dailyCustomer.setMilkType(dataList.getMilkType());
        	dailyCustomer.setQuantity(dataList.getQuantity());
        	dailyCustomer.setOutStandingBill(dataList.getOutStandingBill());
        	dailyCustomer.setCheckDate(currentDate);
        	dailyCustomer.setRate(dataList.getRate());
        	
        	dailyCustomerRepository.save(dailyCustomer);
        	
        	
    		 
    	return dataList;
    }
    
    
    public void getDataFromCustomerToAngular() {
    	 LocalDate currentDate = LocalDate.now();
    	List<Costumer> customerList=costumerRepo.findAll();
    	System.out.println(customerList +""+ currentDate);
    	
//    	for(Costumer customer:customerList) {
//    	DaliyCustomer dailyCustomer=new DaliyCustomer();
//    	
//    	dailyCustomer.setId(customer.getId());
//    	dailyCustomer.setCustomerName(customer.getCustomerName());
//    	dailyCustomer.setContactNo(customer.getContactNo());
//    	dailyCustomer.setAddress(customer.getAddress());
//    	dailyCustomer.setBill(customer.getBill());
//    	dailyCustomer.setDelivered(customer.getDelivered());
//    	dailyCustomer.setEmailId(customer.getEmailId());
//    	dailyCustomer.setIdOfSociety(customer.getIdOfSociety());;
//    	dailyCustomer.setMilkType(customer.getMilkType());
//    	dailyCustomer.setQuantity(customer.getQuantity());
//    	dailyCustomer.setOutStandingBill(customer.getOutStandingBill());
//    	dailyCustomer.setCheckDate(customer.getCheckDate());
//    	
//    	dailyCustomerRepository.save(dailyCustomer);
//    	}
    	
    
    	
    	
    }
    
    
    public void updateCustomerByDateAndId( int id, LocalDate checkDate,String delivered	,String milkType,long quantity) {
    	System.out.println(id+"     "+checkDate);
    	DaliyCustomer dc = dailyCustomerRepository.findByDateAndId(id,checkDate);
    	System.out.println(dc);
    	dc.setDelivered(delivered);
    	dc.setMilkType(milkType);
    	dc.setQuantity(quantity);
//        List<Customer> customers = customerRepository.findByDateAndId(date, id);
//        for (Customer customer : customers) {
//            customer.setName(newName);
//            customerRepository.save(customer);
//        }
    	dailyCustomerRepository.save(dc);
    }
    
    public List<DaliyCustomer> getHistoryOfCustomer(int id) {
    	return dailyCustomerRepository.getHistoryOfCustomer(id);
    }
	
}
