package com.dairy.farm.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class PreviousDateData {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String customerName;
    private String address;
    private String milkType;
    private long quantity;
    private int rate;
    private int outStandingBill;
    private int bill;

    private long idOfSociety;
    
    private String delivered ;

    @Column(columnDefinition = "DATE")
    private LocalDate checkDate;

}
