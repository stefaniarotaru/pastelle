package com.pastelle.shop.controller;

import com.pastelle.shop.model.Product;
import com.pastelle.shop.repository.ProductRepository;
import com.pastelle.shop.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getProducts();

    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable int id) {
        return productService.getProduct(id);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }
}
