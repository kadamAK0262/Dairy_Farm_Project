package com.dairy.farm.repository;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dairy.farm.model.Costumer;
import com.dairy.farm.model.DaliyCustomer;

@Repository
public interface DailyCustomerRepo extends JpaRepository<DaliyCustomer, Integer> {

	List<DaliyCustomer> findByCheckDate(LocalDate previousDate);

	void deleteByCheckDate(LocalDate previousDate);

	List<DaliyCustomer> findByIdOfSociety(long idOfSociety);

	String save(List<DaliyCustomer> dataList);
	
	@Query(value="select * from daliy_customer where  customer_id=:idodcustomer and check_date=:checkDate", nativeQuery = true)
	DaliyCustomer findByDateAndId(@Param(value="idodcustomer") int id ,@Param(value="checkDate") LocalDate checkDate);
	
	@Query(value="select * from daliy_customer where customer_id=:daliy_customer", nativeQuery = true)
	List<DaliyCustomer> getHistoryOfCustomer(@Param(value="daliy_customer") int id);
	
}
