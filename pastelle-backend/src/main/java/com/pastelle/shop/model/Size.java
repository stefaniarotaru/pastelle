package com.pastelle.shop.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.RequiredArgsConstructor;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
@RequiredArgsConstructor
public enum Size {
    S("S"),
    M("M"),
    L("L"),
    ONE_SIZE("ONE SIZE"),
    SIZE_36("36"),
    SIZE_37("37"),
    SIZE_38("38"),
    SIZE_39("39");

    private final String displayName;

    public String getDisplayName() {
        return displayName;
    }

    public String getName() {
        return name();
    }
}
