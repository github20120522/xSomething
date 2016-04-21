(function (source) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.textContent = '(' + source + ')();';
    document.head.appendChild(script);
    document.head.removeChild(script);
})(function () {

    var simpleHelper = {
        createElement: function (eName, eId, eHtml, eAttr, parentNode) {
            var parentNode = parentNode || document.body;
            var eAttr = eAttr || [];
            var element = document.createElement(eName);
            element.setAttribute("id", eId);
            for(var i=0; i<eAttr.length; i++){
                var key = eAttr[i].key;
                var value = eAttr[i].value;
                element.setAttribute(key, value);
            }
            element.innerHTML = eHtml;
            parentNode.appendChild(element);
            return document.getElementById(eId);
        }
    };
    simpleHelper.createElement("input", "sBtn", "", [{"key": "value", "value": "发送邪恶消息"}, {"key": "type", "value": "button"}, {"key": "style", "value": "position: fixed; top: 240px;"}]);
    document.getElementById("sBtn").addEventListener("click", task);

    var count = 1;
    function task(){
        var editArea = $("#editArea");
        var randomTime = Math.random()*1000 + 1000;
        if(editArea){
            var hardTxt = "海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>镇<br>群<br>神<br>针<br><br>清<br>屏<br>专<br>用<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>定<br>海<br>神<br>针<br><br>清<br>屏<br>专<br>用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
            angular.element('pre:last').scope().editAreaCtn = hardTxt;
            angular.element('pre:last').scope().sendTextMessage();
            count++;
        }
    }

});