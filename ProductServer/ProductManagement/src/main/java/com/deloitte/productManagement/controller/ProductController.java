package com.deloitte.productManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deloitte.productManagement.entity.Product;
import com.deloitte.productManagement.service.ProductService;

@RestController
@CrossOrigin
@RequestMapping("/productmanagement")
public class ProductController {
	
	@Autowired
	ProductService service;
	
	@GetMapping("")
	public List<Product> getAllProduct(){
		return service.getAll();
	}
	
	@PostMapping("/add")
	public long addProduct(@RequestBody Product prod) {
		return service.addProduct(prod);
	}
	
	@GetMapping("/product/{id}")
	public Product getProductById(@PathVariable long id) {
		return service.getById(id);
	}
	@PostMapping("/update")
	public long updateProduct(@RequestBody Product prod) {
		return service.updateProduct(prod);
	
	}
	
	@GetMapping("/delete/{id}")
	public Product deleteById(@PathVariable long id) {
		return service.deleteById(id);
	}
	
	@GetMapping("/product/{start}/{end}")
	public List<Product> getProductBetween(@PathVariable int start,@PathVariable int end){
		return service.getProductBetween(start, end);
	}

}
