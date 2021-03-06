package com.pastelle.shop.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    @NotNull
    private String name;

    @ElementCollection
    private List<String> imageUrls;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<ProductImage> productImages;

    @Column
    @NotNull
    private String category;

    @Column
    @NotNull
    private String subcategory;

    @ElementCollection
    private List<Size> sizes;

    @Column
    private Integer percentage;

    @Column
    @NotNull
    private String color;

    @Column
    @NotNull
    private BigDecimal price;

    @Column(name = "sale_price")
    private BigDecimal salePrice;

    @Column
    @NotNull
    private boolean sale;

}
