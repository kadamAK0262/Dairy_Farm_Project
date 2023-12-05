package com.dairy.farm.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class DaliyCustomer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private int CustomerId;
	private String customerName;
	private String address;
	private String milkType;
	private long quantity;
	private int rate;
	private int outStandingBill;
	private int bill;
	private String emailId;
	private long contactNo;

	private long idOfSociety;
	
    private String delivered ;

	@Column(columnDefinition = "DATE")
	private LocalDate checkDate;

	public void setBill() {
        this.bill = (int) (quantity * rate);
    }
	public int getBill() {
        return (int) (rate * quantity);
    }
}
