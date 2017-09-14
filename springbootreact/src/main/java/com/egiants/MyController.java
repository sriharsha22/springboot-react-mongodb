package com.egiants;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by harsha on 9/13/17.
 */
@RestController
public class MyController {
    @RequestMapping(value="/echo")
    public String hello(@RequestParam(value="request", defaultValue = "hello") String request){
        return request;
    }
}
