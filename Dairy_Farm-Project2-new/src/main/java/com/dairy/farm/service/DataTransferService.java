package com.dairy.farm.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.dairy.farm.model.Costumer;
import com.dairy.farm.model.DaliyCustomer;
import com.dairy.farm.model.PreviousDateData;
import com.dairy.farm.repository.CostumerRepo;
import com.dairy.farm.repository.DailyCustomerRepo;
import com.dairy.farm.repository.PreviousDateDataRepo;

import jakarta.transaction.Transactional;

@Service
public class DataTransferService {
	
	@Autowired
	private DailyCustomerRepo dailyCustomerRepo;
	
	@Autowired
	private PreviousDateDataRepo previousDateDataRepo;
	
	@Autowired
	private CostumerRepo customerRepo;	
	
	@Scheduled(cron = "0 0 0 * * ?") 
    @Transactional
    public void transferData() {
        // Get the current date and previous date
		
		System.out.println("Transfer data method is running at: " + LocalDateTime.now());
		
        LocalDate currentDate = LocalDate.now();
        LocalDate previousDate = currentDate.minusDays(1);

        // Transfer data from Customer to DailyCustomer for the current date
        List<Costumer> customersForCurrentDate = customerRepo.findByCheckDate(currentDate);
        for (Costumer customer : customersForCurrentDate) {
            DaliyCustomer dailyCustomer = new DaliyCustomer();
            // Copy data from Customer to DailyCustomer
            dailyCustomer.setCustomerName(customer.getCustomerName());
            dailyCustomer.setAddress(customer.getAddress());
            dailyCustomer.setMilkType(customer.getMilkType());
            dailyCustomer.setQuantity(customer.getQuantity());
            dailyCustomer.setRate(customer.getRate());
            dailyCustomer.setOutStandingBill(customer.getOutStandingBill());
            dailyCustomer.setBill(customer.getBill());
            dailyCustomer.setIdOfSociety(customer.getIdOfSociety());
            dailyCustomer.setDelivered(customer.getDelivered());
            dailyCustomer.setCheckDate(currentDate);
            // Save to DailyCustomer
            
            
            dailyCustomerRepo.save(dailyCustomer);
        }

        // Transfer data from DailyCustomer to PreviousDateData for the previous date
        List<DaliyCustomer> dailyCustomersForPreviousDate = dailyCustomerRepo.findByCheckDate(previousDate);
        for (DaliyCustomer dailyCustomer : dailyCustomersForPreviousDate) {
        	
            PreviousDateData previousDateData = new PreviousDateData();
            // Copy data from DailyCustomer to PreviousDateData
            previousDateData.setCustomerName(dailyCustomer.getCustomerName());
            previousDateData.setAddress(dailyCustomer.getAddress());
            previousDateData.setMilkType(dailyCustomer.getMilkType());
            previousDateData.setQuantity(dailyCustomer.getQuantity());
            previousDateData.setRate(dailyCustomer.getRate());
            previousDateData.setOutStandingBill(dailyCustomer.getOutStandingBill());
            previousDateData.setBill(dailyCustomer.getBill());
            previousDateData.setIdOfSociety(dailyCustomer.getIdOfSociety());
            previousDateData.setDelivered(dailyCustomer.getDelivered());
            previousDateData.setCheckDate(previousDate);
            // Save to PreviousDateData
            previousDateDataRepo.save(previousDateData);
        }

        // Delete data from DailyCustomer for the previous date
        dailyCustomerRepo.deleteByCheckDate(previousDate);
    }
	

}
