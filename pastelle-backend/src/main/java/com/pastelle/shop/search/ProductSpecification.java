package com.pastelle.shop.search;

import com.pastelle.shop.model.Product;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class ProductSpecification implements Specification<Product> {
    private SearchCriteria criteria;

    @Override
    public Predicate toPredicate(Root<Product> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        //check if the text can be casted to boolean
        //if it is possible, then add the check to the query

        Object value = criteria.getValue();

        if ("true".equalsIgnoreCase(value.toString())) {
            value = Boolean.TRUE;
        } else if ("false".equalsIgnoreCase(value.toString())) {
            value = Boolean.FALSE;
        } else if ("null".equalsIgnoreCase(value.toString())) {
            value = null;
        }

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
            case STARTS_WITH:
                return builder.like(root.get(criteria.getKey()), criteria.getValue() + "%");
            case ENDS_WITH:
                return builder.like(root.get(criteria.getKey()), "%" + criteria.getValue());
            case CONTAINS:
                return builder.like(root.get(criteria.getKey()), "%" + criteria.getValue() + "%");
            default:
                return null;
        }
    }
}

