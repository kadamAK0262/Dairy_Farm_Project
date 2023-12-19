//package com.dairy.farm.service;
//
//import java.time.LocalDate;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.dairy.farm.model.Billing;
//import com.dairy.farm.repository.BillingRepo;
//
//@Service
//public class BillingService {
//
//	@Autowired
//    private BillingRepo billingRepository;
//
//    
//    public List<Billing> getBills(Long customerId, LocalDate startDate, LocalDate endDate) {
//        return billingRepository.findByCustomer_IdAndBillingDateBetween(customerId, startDate, endDate);
//    }
//
//    
//    public Integer getTotalBill(Long customerId, LocalDate startDate, LocalDate endDate) {
//        return billingRepository.sumBillByCustomer_IdAndBillingDateBetween(customerId, startDate, endDate);
//    }
//}
