package com.pastelle.shop.controller;

import com.pastelle.shop.model.Product;
import com.pastelle.shop.repository.ProductRepository;
import com.pastelle.shop.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
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

    @GetMapping("/category/{category}")
    public List<Product> getProductsByCategory(@PathVariable String category) {
        return productService.getProductsByCategory(category);
    }

    @GetMapping("/subcategory/{subcategory}")
    public List<Product> getProductsBySubcategory(@PathVariable String subcategory) {
        return productService.getProductsBySubcategory(subcategory);
    }

    @GetMapping("/sale")
    public List<Product> getProductsOnSale() {
        return productService.getProductsOnSale();
    }

    @PostMapping("/add-product")
    public Product addProduct(@Valid @RequestBody Product product) {
        return productService.addProduct(product);
    }


}
