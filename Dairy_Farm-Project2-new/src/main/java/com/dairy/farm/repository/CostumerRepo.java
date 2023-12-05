package com.dairy.farm.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dairy.farm.model.Costumer;

@Repository
public interface CostumerRepo extends JpaRepository<Costumer, Integer> {

	List<Costumer> findByIdOfSociety(long idOfSociety);

	List<Costumer> findByCheckDate(LocalDate currentDate);

}
