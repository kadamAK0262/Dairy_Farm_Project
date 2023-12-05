package com.dairy.farm.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dairy.farm.model.SignUp;

@Repository
public interface SignUpRepo extends JpaRepository<SignUp, Long>{

	Optional<SignUp> findByEmail(String email);
}
