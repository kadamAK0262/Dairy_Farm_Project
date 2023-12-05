package com.dairy.farm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dairy.farm.model.PreviousDateData;

@Repository
public interface PreviousDateDataRepo extends JpaRepository<PreviousDateData, Integer>{

	List<PreviousDateData> findByIdOfSociety(long idOfSociety);
}
