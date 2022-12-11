package com.plum.apicalltest;

import java.util.Map;

import org.apache.commons.collections4.MapUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequiredArgsConstructor
public class BaseController {
	
	private final TestFeignService feignService;
	
	@RequestMapping("/")
	public String index(ModelMap modelMap) {
		log.info("index");
		return "redirect:/main";		
	}
	
	@RequestMapping("/main")
	public String main(@RequestParam Map<String, Object> allParameters) {
		log.info("main");
		
		return "main/main";
	}
	
	@RequestMapping("/feign")
	public String feign(@RequestParam Map<String, Object> allParameters) {
		log.info("feign");
		
		return "feign/form";
	}
	
	@RequestMapping("/feign/gettest")
	@ResponseBody
	public String gettest(@RequestBody Map<String, Object> allParameters) {
		log.info("gettest");
		Map resp = feignService.echoGet(
				MapUtils.getString(allParameters, "comCode", ""),
				MapUtils.getString(allParameters, "account001", ""),
				MapUtils.getString(allParameters, "account002", ""),
				MapUtils.getString(allParameters, "account004", ""),
				MapUtils.getString(allParameters, "account081", ""),
				MapUtils.getString(allParameters, "account034", ""));
		
		MapUtils.debugPrint(System.out, "resp", resp);
		Gson gson = new Gson();
		String json = gson.toJson(resp);
		return json;
	}

	@RequestMapping("/feign/posttest")
	@ResponseBody
	public String posttest(@RequestBody Map<String, Object> allParameters) {
		log.info("posttest");
		Map resp = feignService.echoPost(allParameters);
		
		MapUtils.debugPrint(System.out, "resp", resp);
		Gson gson = new Gson();
		String json = gson.toJson(resp);
		return json;
	}

}
