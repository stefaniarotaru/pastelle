package com.pastelle.shop.service;

import com.pastelle.shop.model.Product;
import com.pastelle.shop.model.ProductImage;
import com.pastelle.shop.repository.ProductImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductImageService {
    private final ProductImageRepository productImageRepository;

    public ProductImage save(Product product, String imagePath) {
        ProductImage productImage = new ProductImage();
        productImage.setProduct(product);
        productImage.setImagePath(imagePath);
        return productImageRepository.save(productImage);
    }

}
