package com.pastelle.shop.controller;

import com.google.common.base.Joiner;
import com.pastelle.shop.search.ProductSpecificationsBuilder;
import com.pastelle.shop.model.Product;
import com.pastelle.shop.repository.ProductRepository;
import com.pastelle.shop.search.SearchOperation;
import com.pastelle.shop.service.ProductService;
import com.pastelle.shop.service.StorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    private final StorageService storageService;
    private final ProductRepository productRepository;

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


    @GetMapping("/products")
    public List<Product> search(@RequestParam(value = "search") String search) {
        ProductSpecificationsBuilder builder = new ProductSpecificationsBuilder();
        String operationSetExpression = Joiner.on("|")
                .join(SearchOperation.SIMPLE_OPERATION_SET);
        Pattern pattern = Pattern.compile("(\\p{Punct}?)(\\w+?)(" + operationSetExpression + ")([\\w.]+?),");
        Matcher matcher = pattern.matcher(search + ",");
        while (matcher.find()) {
            builder.with(matcher.group(1), matcher.group(2), matcher.group(3), matcher.group(4));
        }
        Specification<Product> spec = builder.build();
        return productRepository.findAll(spec);
    }

    @GetMapping(value = "/products/spec/adv")
    @ResponseBody
    public List<Product> findAllByAdvPredicate(@RequestParam(value = "search") String search) {
        return productService.doAdvancedSearch(search);
    }

    @PostMapping("/{productId}/images")
    public ResponseEntity<String> uploadFile(@RequestParam MultipartFile file, @PathVariable int productId) {
        return new ResponseEntity<>(storageService.uploadFile(file, productId), HttpStatus.OK);
    }

    @GetMapping("/image")
    public ResponseEntity<byte[]> getImage(@RequestParam String path) {
        return storageService.getImage(path);
    }

}
