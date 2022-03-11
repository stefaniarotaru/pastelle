package com.pastelle.shop.search;

import com.pastelle.shop.model.Product;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

@AllArgsConstructor
public class ProductSpecification implements Specification<Product> {
    private SearchCriteria criteria;

    @Override
    public Predicate toPredicate(Root<Product> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        //check if the text can be casted to boolean
        //if it is possible, then add the check to the query

        Object value = criteria.getValue();
        value = "true".equalsIgnoreCase(value.toString()) ? Boolean.TRUE :
                "false".equalsIgnoreCase(value.toString()) ? Boolean.FALSE : value;

        switch (criteria.getOperation()) {
            case EQUALITY:
                return builder.equal(root.get(criteria.getKey()), value);
            case NEGATION:
                return builder.notEqual(root.get(criteria.getKey()), value);
            case GREATER_THAN:
                return builder.greaterThan(root.get(criteria.getKey()), value.toString());
            case LESS_THAN:
                return builder.lessThan(root.get(criteria.getKey()), value.toString());
            case LIKE:
                return builder.like(root.get(criteria.getKey()), value.toString());
            default:
                return null;
        }
    }
}

