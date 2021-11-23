package com.pastelle.shop.service;

import com.pastelle.shop.model.Product;
import com.pastelle.shop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;


    public List<Product> getProducts() {
        return productRepository.findAll();

    }
    public Product getProduct(int id) {
        return productRepository.findById(id).orElseThrow();
    }

    @Transactional
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

}
