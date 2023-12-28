package com.dairy.farm.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor

@Table(uniqueConstraints = {
        @UniqueConstraint(name = "uk_email", columnNames = "emailId"),
        @UniqueConstraint(name = "uk_contactNo", columnNames = "contactNo")
})
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
	private String status;
	private String timing;
	
	private int bill;
	
	@NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Column(unique = true, nullable = false)
	private String emailId;
	
	@NotNull(message = "Contact No is required")
    @Pattern(regexp = "[0-9]+", message = "Invalid Contact No")
    @Column(unique = true, nullable = false)
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
