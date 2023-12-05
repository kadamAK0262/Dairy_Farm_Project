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
	
	private int outStandingBill;
	
	private int bill;

    private String delivered;
	
	private LocalDate checkDate;
	
	public void setBill() {
        this.bill = (int) (quantity * rate);
    }
	public int getBill() {
        return (int) (rate * quantity);
    }
	
//	@Column( insertable = false, updatable = false)
	
//	@OneToOne
//    @JoinColumn(name = "idOfSociety") // This should match the name of the foreign key column in your Costumer table
//    private Societies society; 
	
	
	
//	@Autowired
//	private SocietyRepo societyRepo;
	
	
//	@PrePersist
//	public void updateTotalActiveCustomers() {
//	    if (society != null) {
//	        try {
//	            Societies societyEntity = societyRepo.findById(society.getId()).orElse(null);
//	            if (societyEntity != null) {
//	                societyEntity.setTotalActiveCustomers(societyEntity.getTotalActiveCustomers() + 1);
//	                societyRepo.save(societyEntity);
//	            }
//	        } catch (Exception e) {
//	            // Handle the exception gracefully, e.g., log the error
//	            e.printStackTrace(); // Replace with appropriate error handling
//	        }
//	    }
//	}

	
	
//	@PrePersist
//	public void updateTotalActiveCustomers() {
//	    if (society != null) {
//	        Societies societyEntity = societyRepo.findById(society.getId()).orElse(null);
//	        if (societyEntity != null) {
//	            societyEntity.setTotalActiveCustomers(societyEntity.getTotalActiveCustomers() + 1);
//	            societyRepo.save(societyEntity);
//	        }
//	    }
//	}

	
//	@PrePersist
//  public void updateTotalActiveCustomers() {
//      if (idOfSociety != null) {
//          Societies society = societyRepo.findById(society.getId()).orElse(null);
//          if (society != null) {
//              society.setTotalActiveCustomers(society.getTotalActiveCustomers() + 1);
//              societyRepo.save(society);
//          }
//      }
//  }
	

//	@ManyToOne
//	@JoinColumn(name = "idOfSociety", referencedColumnName = "societyId")
	
	

//	public void setIdOfSociety(Long idOfSociety) {
//	    this.idOfSociety = idOfSociety;
//	}


//	@ManyToOne // Many customers can belong to one society
//    @JoinColumn(name = "idOfSociety", referencedColumnName = "societyId")
//    private Long idOfSociety;

//	public Object getIdOfSociety() {
//		// TODO Auto-generated method stub
//		return null;
//	}

//    private Long idOfSociety;

//	public void setSocietyId(Societies society) {
//		// TODO Auto-generated method stub
//		
//	}

//    @ManyToOne(fetch = FetchType.LAZY) // Many customers belong to one society
//    @JoinColumn(name = "societyId")
//    private Societies society;
}
