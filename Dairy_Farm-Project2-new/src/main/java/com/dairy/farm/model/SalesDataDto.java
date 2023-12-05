package com.dairy.farm.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SalesDataDto {
	 private String monthOfYear;
	    private Long numberOfData;
	    private Double totalQuantityMonth;
	    private Double totalBillMonth;

}
