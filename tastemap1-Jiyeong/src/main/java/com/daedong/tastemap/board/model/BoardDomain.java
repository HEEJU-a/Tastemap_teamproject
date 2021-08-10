package com.daedong.tastemap.board.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@Data
@EnableAutoConfiguration
public class BoardDomain extends BoardEntity{
    private int iuser;
    private int favCnt;
    private int isFav;
    private int startIdx;
    private int recordCnt = 10;
    private int page = 1;
}
