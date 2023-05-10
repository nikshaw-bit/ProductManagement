package com.deloitte.productManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.deloitte.productManagement.entity.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

	List<Product> findByPriceBetween(int start,int end);
}
