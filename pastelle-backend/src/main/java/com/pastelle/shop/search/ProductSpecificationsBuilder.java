package com.pastelle.shop.search;

import com.pastelle.shop.model.Product;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ProductSpecificationsBuilder {
    private final List<SearchCriteria> params;

    public ProductSpecificationsBuilder() {
        params = new ArrayList<SearchCriteria>();
    }

    public ProductSpecificationsBuilder with(String orPredicate, String key, String operation, Object value) {
        SearchOperation op = SearchOperation.getSimpleOperation(operation.charAt(0));
        params.add(new SearchCriteria(orPredicate, key, op, value));
        return this;
    }

    public Specification<Product> build() {
        if (params.size() == 0) {
            return null;
        }
        List<Specification<Product>> specs = params.stream()
                .map(ProductSpecification :: new)
                .collect(Collectors.toList());
        Specification<Product> result = specs.get(0);

        for (int i = 1; i < params.size(); i++) {
            result = params.get(i)
                    .isOrPredicate()
                    ? Specification.where(result)
                    .or(specs.get(i))
                    : Specification.where(result)
                    .and(specs.get(i));
        }
        return result;
    }
}
