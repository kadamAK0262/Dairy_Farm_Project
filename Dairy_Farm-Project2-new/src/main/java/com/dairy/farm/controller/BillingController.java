//package com.dairy.farm.controller;
//
//import java.time.LocalDate;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.format.annotation.DateTimeFormat;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.dairy.farm.model.Billing;
//import com.dairy.farm.service.BillingService;
//
//
//@RestController
//@RequestMapping("/api/billing")
//public class BillingController {
//	
//	@Autowired
//    private BillingService billingService;
//
//    @GetMapping("/{customerId}")
//    public List<Billing> getBills(
//            @PathVariable Long customerId,
//            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
//            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
//        return billingService.getBills(customerId, startDate, endDate);
//    }
//
//    @GetMapping("/total/{customerId}")
//    public Integer getTotalBill(
//            @PathVariable Long customerId,
//            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
//            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
//        return billingService.getTotalBill(customerId, startDate, endDate);
//    }
//
//}
