package com.dairy.farm.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dairy.farm.model.Costumer;
import com.dairy.farm.model.DaliyCustomer;

@Repository
public interface CostumerRepo extends JpaRepository<Costumer, Integer> {

	List<Costumer> findByIdOfSociety(long idOfSociety);

	List<Costumer> findByCheckDate(LocalDate currentDate);
	
	List<Costumer> findByIdOfSocietyAndStatus(long idOfSociety, String status);
	
	List<Costumer> findByIdOfSocietyAndTiming(long idOfSociety, String timing);

	void save(DaliyCustomer dailyCustomer);


}
