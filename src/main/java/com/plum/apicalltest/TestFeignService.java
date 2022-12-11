package com.plum.apicalltest;

import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "feign", url = "http://localhost:9090/api/v1")
public interface TestFeignService {

	@GetMapping(path = "/echo-get", produces = "application/json", consumes = "application/json")
	public Map<String, Object> echoGet(
			@RequestParam("comCode") String comCode, 
			@RequestParam("account001") String account001, 
			@RequestParam("account002") String account002, 
			@RequestParam("account004") String account004, 
			@RequestParam("account081") String account081, 
			@RequestParam("account034") String account034);
	
	@PostMapping(path = "/echo-post", produces = "application/json", consumes = "application/json")
//	public Map<String, Object> echoPost(@SpringQueryMap Map<String, Object> param);
//	@PostMapping(path = "/echo-post")
	public Map<String, Object> echoPost(
			@RequestBody Map<String, Object> param);
}
