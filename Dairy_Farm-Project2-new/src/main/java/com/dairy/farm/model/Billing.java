//package com.dairy.farm.model;
//
//import java.time.LocalDate;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//
//@Data
//@Entity
//@NoArgsConstructor
//@AllArgsConstructor
//public class Billing {
//	
//	@Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "customer_id")
//    private DaliyCustomer customer;
//
//    @Column(columnDefinition = "DATE")
//    private LocalDate billingDate;
//
//    private Long quantity;
//    private Integer rate;
//    private Integer bill;
//
//}
