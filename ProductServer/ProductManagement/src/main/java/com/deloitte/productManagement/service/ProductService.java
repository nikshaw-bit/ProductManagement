package com.deloitte.productManagement.service;

import java.util.List;

import com.deloitte.productManagement.entity.Product;


public interface ProductService {
		
	List<Product> getAll();

	long addProduct(Product prod);
	
	Product getById(long id);

	long updateProduct(Product prod);

	Product deleteById(long id);
	
	List<Product> getProductBetween(int start, int end);

}
