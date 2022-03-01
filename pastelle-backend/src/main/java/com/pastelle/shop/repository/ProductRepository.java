package com.pastelle.shop.repository;

import com.pastelle.shop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>, JpaSpecificationExecutor<Product> {

    List<Product> findByCategory(String category);

    List<Product> findBySubcategory(String subcategory);

    List<Product> findBySale(boolean sale);

}
