package com.dairy.farm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dairy.farm.model.Societies;

@Repository
public interface SocietyRepo extends JpaRepository<Societies, Long> {

	Societies findBySocietyId(long SocietyId);

}
