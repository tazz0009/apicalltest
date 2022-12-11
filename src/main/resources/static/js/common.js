// 숫자 타입에서 쓸 수 있도록 format() 함수 추가
Number.prototype.format = function(){    
	if(this==0) return 0;     
	var reg = /(^[+-]?\d+)(\d{3})/;    
	var n = (this + '');     
	while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');     
	return n;
}; 
// 문자열 타입에서 쓸 수 있도록 format() 함수 추가
String.prototype.format = function(){    
	var num = parseFloat(this);    
	if( isNaN(num) ) return "0";     
	return num.format();
}; 
function transaction($modal, url, params, callback) {
	axios.post(url, params)
        .then(callback)
        .catch(function (err) {
			$modal.prop('checked', '');
            console.log({err});
        });
}
function formData(target) {
	var queryArray = $(target).serializeArray();
	var params = {};
	for (var i = 0; i < queryArray.length; i++){
		params[queryArray[i]['name']] = queryArray[i]['value'];
	}
	return params;
}
function fn_egov_downFile(atchFileId, fileSn){
	window.open("/cmm/fms/FileDown.do?atchFileId="+atchFileId+"&fileSn="+fileSn+"");
}
// 페이징 네비게이터를 동적 생성합니다.
function createPagingNavigator(paginationInfo) {
	
	console.log({paginationInfo});
	
	var currentPageNo = paginationInfo.currentPageNo; 
	var firstPageNoOnPageList = paginationInfo.firstPageNoOnPageList; 	// 페이지 리스트의 첫 페이지 번호
	var lastPageNo = paginationInfo.lastPageNo; 
	var lastPageNoOnPageList = paginationInfo.lastPageNoOnPageList; 	// 페이지 리스트의 마지막 페이지 번호
	var pageSize = paginationInfo.pageSize; 
	var retStr = "";

	if (currentPageNo !== 1 && firstPageNoOnPageList > 10) {
		// 처음
		retStr += "<button class='btn btn-outline btn-md' onclick='javascript:gotoPage(1)'>&lt;&lt;</button>";
		// 이전
		retStr += "<button class='btn btn-outline ' onclick='javascript:gotoPage(" + (firstPageNoOnPageList - 1) + ");'><</button>";
	}

	for (var i=0; i<pageSize; i++) {
		if (currentPageNo == (firstPageNoOnPageList + i)) {
			retStr += "<button class='btn btn-outline  btn-active'>" + (firstPageNoOnPageList + i) + "</button>";
		} else {
			retStr += "<button class='btn btn-outline ' onclick='javascript:gotoPage(" + (firstPageNoOnPageList + i) + ");'>";
			retStr += (firstPageNoOnPageList + i);
			retStr += "</button>";
		}
		if (lastPageNoOnPageList == (firstPageNoOnPageList + i)) {
			break;
		}
	}
	
	if (lastPageNoOnPageList !== paginationInfo.totalPageCount) {
		// 다음
		retStr += "<button class='btn btn-outline ' onclick='javascript:gotoPage(" + (lastPageNoOnPageList+1) + ");'>&gt;</button>";
		// 마지막
		retStr += "<button class='btn btn-outline ' onclick='javascript:gotoPage(" + lastPageNo + ");'>&gt;&gt;</button>";
	} 
	return retStr;
}

function isNull(v) {
	return (v === undefined || v === null) ? true : false;
}

function isEmpty(v) {
	if( v == "" || v == null || v == undefined || ( v != null && typeof v == "object" && !Object.keys(v).length )){
    	return true
	}else{
    	return false
   	}
}
// 현재 시각을 Time 형식으로 리턴
function getCurrentTime() {
    return toTimeString(new Date());
}
// 현재 年을 YYYY형식으로 리턴
function getYear() {
    return getCurrentTime().substr(0,4);
}
// 현재 月을 MM형식으로 리턴
function getMonth() {
    return getCurrentTime().substr(4,2);
}
// 현재 日을 DD형식으로 리턴
function getDay() {
    return getCurrentTime().substr(6,2);
}
// 현재 年月을 separator 로 구분하여 리턴
function getYYYYMM( separator) {
    return getYear() + separator + getMonth();
}
// 현재 月日을 separator 로 구분하여 리턴
function getMMDD( separator) {
    return getMonth() + separator + getDay();
}
// 현재 年月日을 separator 로 구분하여 리턴
function getYYYYMMDD( separator) {
    return getYear() + separator + getMonth() + separator + getDay();
}
// 현재 年月日을 separator 로 구분하여 리턴
function getYYYYMMDD_minusOneMonth(separator) {
	var minusDate = shiftTime(getCurrentTime(), 0, -1, 0, 0);
	var year  = minusDate.substr(0,4);
    var month = minusDate.substr(4,2); // 1월=0,12월=11
    var day   = minusDate.substr(6,2);
    return ("" + year + separator + month + separator + day);
}
function getYYYYMMDD_minusThreeMonth(separator) {
	var minusDate = shiftTime(getCurrentTime(), 0, -3, 0, 0);
	var year  = minusDate.substr(0,4);
    var month = minusDate.substr(4,2); // 1월=0,12월=11
    var day   = minusDate.substr(6,2);
    return ("" + year + separator + month + separator + day);
}
function getYYYYMMDD_minusSixMonth(separator) {
	var minusDate = shiftTime(getCurrentTime(), 0, -6, 0, 0);
	var year  = minusDate.substr(0,4);
    var month = minusDate.substr(4,2); // 1월=0,12월=11
    var day   = minusDate.substr(6,2);
    return ("" + year + separator + month + separator + day);
}
// 현재 時를 HH형식으로 리턴
function getHour() {
    return getCurrentTime().substr(8,2);
}
/**
 * 연월(YYYYMM)의 유효성을 체크하고 표준 날짜 포맷 (YYYY/MM) 으로 변환하여 리턴
 * (주의 : 이 함수의 파라미터는 객체임 (input object))
 */
function format_YYYYMM(object) {
    var num, year, month;
    num=object.value;   
    while (num.search("/") != -1) { 
  		num = num.replace("/","");
 	}
	if (isNaN(num)) {        
     	window.alert("숫자로만 작성하셔야 합니다.");
	  	object.focus();
  		return "";
 	}  
    if( num != 0 && (num.length >= 5 && num.length <= 6)) {
        year = num.substring(0,4);
        month = num.substring(4);
        if (isValidMonthYYYYMM(object, month)==false){
            alert("월을 다시 한번 확인하시고 입력해 주세요.");
          object.focus();
          return "";
        }
        if (num.length==6) {
         num = year+"/"+month;
        } else if (num.length==5) { 
         num = year+"/"+"0"+month;
        } 
    } else {
        num = "";
  		window.alert("년월을 다시 한번 확인하시고 입력해 주세요.");
  		object.focus();
        return "";
    } 
    return num;
}
// Time 스트링을 자바스크립트 Date 객체로 변환  parameter time: Time 형식의 String
function toTimeObject(time) { //parseTime(time)
    var year  = time.substr(0,4);
    var month = time.substr(4,2) - 1; // 1월=0,12월=11
    var day   = time.substr(6,2);
    var hour  = time.substr(8,2);
    var min   = time.substr(10,2);
    return new Date(year,month,day,hour,min);
}
// 자바스크립트 Date 객체를 Time 스트링으로 변환 
// parameter date: JavaScript Date Object
function toTimeString(date) { //formatTime(date)
    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day   = date.getDate();
    var hour  = date.getHours();
    var min   = date.getMinutes();
    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }
    if (("" + hour).length  == 1) { hour  = "0" + hour;  }
    if (("" + min).length   == 1) { min   = "0" + min;   }
    return ("" + year + month + day + hour + min)
}
// Time이 현재시각 이후(미래)인지 체크
function isFutureTime(time) {
    return (toTimeObject(time) > new Date());
}
// Time이 현재시각 이전(과거)인지 체크
function isPastTime(time) {
    return (toTimeObject(time) < new Date());
}
// 주어진 Time 과 y년 m월 d일 h시 차이나는 Time을 리턴
function shiftTime(time,y,m,d,h) { //moveTime(time,y,m,d,h)
    var date = toTimeObject(time);
    date.setFullYear(date.getFullYear() + y); //y년을 더함
    date.setMonth(date.getMonth() + m);       //m월을 더함
    date.setDate(date.getDate() + d);         //d일을 더함
    date.setHours(date.getHours() + h);       //h시를 더함
    return toTimeString(date);
}
// 두 Time이 몇 개월 차이나는지 구함
function getMonthInterval(time1,time2) { //measureMonthInterval(time1,time2)
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var years  = date2.getFullYear() - date1.getFullYear();
    var months = date2.getMonth() - date1.getMonth();
    var days   = date2.getDate() - date1.getDate();
    return (years * 12 + months + (days >= 0 ? 0 : -1) );
}
// 두 Time이 며칠 차이나는지 구함
function getDayInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var day   = 1000 * 3600 * 24; //24시간
    return parseInt((date2 - date1) / day, 10) + 1;
}
// 두 Time이 몇 시간 차이나는지 구함
function getHourInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var hour  = 1000 * 3600; //1시간
    return parseInt((date2 - date1) / hour, 10);
}
// 현재 시각과 y년 m월 d일 h시 차이나는 Time을 리턴
function getRelativeTime(y,m,d,h) {
    return shiftTime(getCurrentTime(),y,m,d,h);
}
var formatForTime = function(v) {
	var str = v.value;
	if (isEmpty(str)) {
		return '';
	} else {
        return str.substring(0, 2) + ':' + str.substring(2, 4) + ':' + str.substring(4, 6);
	}
}
var formatForDate = function(v) {
	var str = v.value;
	if (isEmpty(str)) {
		return '';
	} else {
        return str.substring(0, 4) + '-' + str.substring(4, 6) + '-' + str.substring(6, 8);
	}
}
var formatForAmount = function(v) {
	var str = v.value;
	if (isEmpty(str)) {
		return '';
	} else {
        return str.format();
	}
}
var formatForInstallment = function(v) {
	var str = v.value;
	if (isEmpty(str)) {
		return '';
	} else {
		if (str === '00') {
			return '일시불';
		} else {
	        return str;
		}
	}
}
	  
function pad(n, width) {
  	n = n + '';
  	return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

function makeOption(id, name) {
	return `<option value=${id}>${name}</option>`;
}

// 상세검색 클릭이벤트
function showSearchDetails() {
    $(".search-details").show();
    $(".search-details-off").hide();
}
function hideSearchDetails() {
    $(".search-details").hide();
    $(".search-details-off").show();
}
// Intl api
var formatter = new Intl.NumberFormat('ko');
var currencyFormatter = new Intl.NumberFormat('ko', {style:'currency', currency:'krw'});
var currencyCompactFormatter = new Intl.NumberFormat('ko', {style:'currency', currency:'krw', notation:'compact'});
var relativeTimeFormatter = new Intl.RelativeTimeFormat('ko', {numeric:'auto'});

