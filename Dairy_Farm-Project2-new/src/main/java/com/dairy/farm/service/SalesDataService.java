package com.dairy.farm.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.dairy.farm.model.SalesDataDto;
@Service
public class SalesDataService {

	@Autowired
	private JdbcTemplate jdbcTemplate;

    
    public List<SalesDataDto> getMonthlyDataForSale(String milkType) {
        String sql = "SELECT MONTHNAME(check_date) as month_of_year, " +
                     "COUNT(*) as Nos_of_data, " +
                     "SUM(quantity) AS total_quantity_month, " +
                     "SUM(bill) AS total_bill_month " +
                     "FROM dairy_farm.daliy_customer " +
                     "WHERE delivered='yes' AND milk_type=? AND status='Active'" +
                     "GROUP BY month_of_year";

        return jdbcTemplate.query(sql,new Object[] { milkType }, (rs, rowNum) -> {
        	SalesDataDto monthlyData = new SalesDataDto();
            monthlyData.setMonthOfYear(rs.getString("month_of_year"));
            monthlyData.setNumberOfData(rs.getLong("Nos_of_data"));
            monthlyData.setTotalQuantityMonth(rs.getDouble("total_quantity_month"));
            monthlyData.setTotalBillMonth(rs.getDouble("total_bill_month"));
            return monthlyData;
        });
    }
    
    public List<SalesDataDto> getQuarterlyDataForSale(String milkType) {
        String sql = "SELECT CONCAT(YEAR(check_date), ' Q', QUARTER(check_date)) AS quarter_OF, " +
                     "COUNT(*) as Nos_of_data, " +
                     "SUM(quantity) AS total_quantity_quarter, " +
                     "SUM(bill) AS total_bill_quarter " +
                     "FROM dairy_farm.daliy_customer " +
                     "WHERE delivered='yes' AND milk_type=? AND status='Active' " +
                     "GROUP BY quarter_OF";

        return jdbcTemplate.query(sql, new Object[]{milkType}, (rs, rowNum) -> {
            SalesDataDto quarterlyData = new SalesDataDto();
            quarterlyData.setMonthOfYear(rs.getString("quarter_OF"));
            quarterlyData.setNumberOfData(rs.getLong("Nos_of_data"));
            quarterlyData.setTotalQuantityMonth(rs.getDouble("total_quantity_quarter"));
            quarterlyData.setTotalBillMonth(rs.getDouble("total_bill_quarter"));
            return quarterlyData;
        });
    }
    
    
    
    public List<SalesDataDto> getDailyDataForSale(String milkType) {
        String sql = "SELECT DATE(check_date) as date_of_month, " +
                     "COUNT(*) as Nos_of_data, " +
                     "SUM(quantity) AS total_quantity_day, " +
                     "SUM(bill) AS total_bill_day " +
                     "FROM dairy_farm.daliy_customer " +
                     "WHERE delivered='yes' AND milk_type=? " +
                     "AND DATE(check_date) = ? AND status='Active'" +  // Add this line to filter by today's date
                     "GROUP BY date_of_month";

        return jdbcTemplate.query(sql, new Object[]{milkType, LocalDate.now()}, (rs, rowNum) -> {
            SalesDataDto dailyData = new SalesDataDto();
            dailyData.setMonthOfYear(rs.getString("date_of_month"));
            dailyData.setNumberOfData(rs.getLong("Nos_of_data"));
            dailyData.setTotalQuantityMonth(rs.getDouble("total_quantity_day"));
            dailyData.setTotalBillMonth(rs.getDouble("total_bill_day"));
            return dailyData;
        });
    }
    
    
//    public List<SalesDataDto> getMonthlyDataForBuffalo() {
//        String sql = "SELECT MONTHNAME(check_date) as month_of_year, " +
//                     "COUNT(*) as Nos_of_data, " +
//                     "SUM(quantity) AS total_quantity_month, " +
//                     "SUM(bill) AS total_bill_month " +
//                     "FROM dairy_farm.daliy_customer " +
//                     "WHERE delivered='yes' AND milk_type='Buffalo' " +
//                     "GROUP BY month_of_year";
//
//        return jdbcTemplate.query(sql, (rs, rowNum) -> {
//        	SalesDataDto monthlyData = new SalesDataDto();
//            monthlyData.setMonthOfYear(rs.getString("month_of_year"));
//            monthlyData.setNumberOfData(rs.getLong("Nos_of_data"));
//            monthlyData.setTotalQuantityMonth(rs.getDouble("total_quantity_month"));
//            monthlyData.setTotalBillMonth(rs.getDouble("total_bill_month"));
//            return monthlyData;
//        });
//    }
    
}
