package com.pastelle.shop.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
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

    @Column
    @NotNull
    private String url;

    @Column
    @NotNull
    private String category;

    @Column
    @NotNull
    private String subcategory;

    @ElementCollection
    @NotNull
    private List<Size> sizes;

    @Column
    @NotNull
    private String color;

    @Column
    @NotNull
    private double price;

    @Column
    @NotNull
    private boolean sale;

}
