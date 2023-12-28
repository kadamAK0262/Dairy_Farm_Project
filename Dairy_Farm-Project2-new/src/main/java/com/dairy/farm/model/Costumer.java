package com.dairy.farm.model;


import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
public class Costumer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String customerName;

	private long contactNo;

	private String emailId;

	private String address;

	private String milkType;

	private long quantity;
	
	private long idOfSociety;
	
	private int rate;
	
	private String status;
	private String timing;
	
	private int bill;

    private String delivered;
	
	private LocalDate checkDate;
	
	public void setBill() {
        this.bill = (int) (quantity * rate);
    }
	public int getBill() {
        return (int) (rate * quantity);
    }
}
