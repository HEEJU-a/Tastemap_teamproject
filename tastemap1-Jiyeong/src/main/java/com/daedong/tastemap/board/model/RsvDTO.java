package com.daedong.tastemap.board.model;

import com.daedong.tastemap.board.model.RsvEntity;
import lombok.Data;
import lombok.Getter;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@EnableAutoConfiguration
@Data
public class RsvDTO extends RsvEntity {
    private String rsnm;
}
