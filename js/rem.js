
		//判断是不是电脑设备
        //平台、设备和操作系统 
        var system = { 
            win: false, 
            mac: false, 
            xll: false, 
            ipad:false 
        }; 
        //检测平台 
        var p = navigator.platform; 
        system.win = p.indexOf("Win") == 0; 
        system.mac = p.indexOf("Mac") == 0; 
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); 
        system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false; 
        //跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面 
        if (system.win || system.mac || system.xll||system.ipad) { 
  			
        } else { 

        } 
    // 当做公式来看
    (function (doc, win) {
      var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
//    	判断是不是电脑设备
            	if (system.win || system.mac || system.xll||system.ipad) { 
		  			docEl.style.fontSize = 19.6 + 'px';
					$("html").addClass("html_box")
		        } else { 
	 			
	           var clientWidth = docEl.clientWidth;
	              if (!clientWidth) return;
                    // 15pt = 1rem
	              docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
		        } 
          
        };

      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
