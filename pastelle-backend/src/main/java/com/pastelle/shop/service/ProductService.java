package com.pastelle.shop.service;

import com.pastelle.shop.exception.NotFoundException;
import com.pastelle.shop.model.Product;
import com.pastelle.shop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;


    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public List<Product> getProductsBySubcategory(String subcategory) {
        return  productRepository.findBySubcategory(subcategory);
    }

    public List<Product> getProductsOnSale() {
        return productRepository.findBySale(true);
    }

    public Product getProduct(int id) {
        return productRepository.findById(id).orElseThrow(() -> new NotFoundException("Product not found."));
    }



    @Transactional
    public Product addProduct(Product product) {
        List<String> imageUrls = product.getImageUrls();
        product.setImageUrls(imageUrls.stream()
                .filter(url -> !url.isBlank())
                .collect(Collectors.toList()));

        return productRepository.save(product);
    }

}
