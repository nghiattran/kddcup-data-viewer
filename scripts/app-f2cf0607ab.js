!function(){"use strict";angular.module("kddcup-data-viewer",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"}];this.getTec=t}angular.module("kddcup-data-viewer").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("kddcup-data-viewer").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,n,r,a){var i,o=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){o.type(t).pause()["delete"]()}),i=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){o.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){i()})}function n(t,e){function n(){return r().then(function(){t.info("Activated Contributors View")})}function r(){return e.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],n()}n.$inject=["$log","githubContributor"];var r={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return r}t.$inject=["malarkey"],angular.module("kddcup-data-viewer").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function n(n){function a(t){return t.data}function i(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(r+"/contributors?per_page="+n).then(a)["catch"](i)}var r="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:r,getContributors:n};return a}t.$inject=["$log","$http"],angular.module("kddcup-data-viewer").factory("githubContributor",t)}(),function(){"use strict";function t(t,e){function n(){var t=o(s,c.field);i(t,"")}function r(t){if(t){var e=Object.keys(t[Object.keys(t)[0]]);return e}}function a(t,e,n){function r(t){l(),u(),d3.select(e.toggleLegendTag).on("click",p),S.append("svg:circle").attr("r",T).style("opacity",0);var n=$.nodes(t).filter(function(t){return t.dx>.005}),r=S.data([t]).selectAll("path").data(n).enter().append("svg:path").attr("display",function(t){return t.depth?null:"none"}).attr("d",B).attr("fill-rule","evenodd").style("fill",function(t){return g[t.name]}).style("opacity",1).on("mouseover",a);d3.select("#container").on("mouseleave",i),A=r.node().__data__.value}function a(t){var n=(100*t.value/t.parent.value).toPrecision(3),r=(100*t.value/A).toPrecision(3),a=n+"%",i=r+"%";.1>n&&(a="< 0.1%"),d3.select(e.percentageTag).text(i),d3.select(e.explanationTag).style("visibility","");var l=o(t);c(l,a),d3.selectAll("path").style("opacity",.3),S.selectAll("path").filter(function(t){return l.indexOf(t)>=0}).style("opacity",1)}function i(t){d3.select("#trail").style("visibility","hidden"),d3.selectAll("path").on("mouseover",null),d3.selectAll("path").transition().duration(1e3).style("opacity",1).each("end",function(){d3.select(this).on("mouseover",a)}),d3.select("#explanation").style("visibility","hidden")}function o(t){for(var e=[],n=t;n.parent;)e.unshift(n),n=n.parent;return e}function l(){var t=d3.select(e.sequenceTag).append("svg:svg").attr("width",w).attr("height",50).attr("id","trail");t.append("svg:text").attr("id","endlabel").style("fill","#000")}function s(t,e){var n=[];return n.push("0,0"),n.push(j.w+",0"),n.push(j.w+j.t+","+j.h/2),n.push(j.w+","+j.h),n.push("0,"+j.h),e>0&&n.push(j.t+","+j.h/2),n.join(" ")}function c(t,e){var n=d3.select("#trail").selectAll("g").data(t,function(t){return t.name+t.depth}),r=n.enter().append("svg:g");r.append("svg:polygon").attr("points",s).style("fill",function(t){return g[t.name]}),r.append("svg:text").attr("x",(j.w+j.t)/2).attr("y",j.h/2).attr("dy","0.35em").attr("text-anchor","middle").text(function(t){return t.name}),n.attr("transform",function(t,e){return"translate("+e*(j.w+j.s)+", 0)"}),n.exit().remove(),d3.select("#trail").select("#endlabel").attr("x",(t.length+.5)*(j.w+j.s)).attr("y",j.h/2).attr("dy","0.35em").attr("text-anchor","middle").text(e),d3.select("#trail").style("visibility","")}function u(){var t={w:75,h:30,s:3,r:3},n=d3.select(e.legendTag).append("svg:svg").attr("width",t.w).attr("height",d3.keys(g).length*(t.h+t.s)),r=n.selectAll("g").data(d3.entries(g)).enter().append("svg:g").attr("transform",function(e,n){return"translate(0,"+n*(t.h+t.s)+")"});r.append("svg:rect").attr("rx",t.r).attr("ry",t.r).attr("width",t.w).attr("height",t.h).style("fill",function(t){return t.value}),r.append("svg:text").attr("x",t.w/2).attr("y",t.h/2).attr("dy","0.35em").attr("text-anchor","middle").text(function(t){return t.key})}function p(){var t=d3.select(e.legendTag);"hidden"==t.style("visibility")?t.style("visibility",""):t.style("visibility","hidden")}function d(t){for(var e={name:"root",children:[]},n=0;n<t.length;n++){var r=t[n][0],a=+t[n][1];if(!isNaN(a))for(var i=r.split("-"),o=e,l=0;l<i.length;l++){var s,c=o.children,u=i[l];if(l+1<i.length){for(var p=!1,d=0;d<c.length;d++)if(c[d].name==u){s=c[d],p=!0;break}p||(s={name:u,children:[]},c.push(s)),o=s}else s={name:u,size:a},c.push(s)}}return e}d3.select(e.chartTag).select("svg").remove(),n=n||{};var g=n.colors||{},v=d3.scale.category20c();for(var f in t){for(var h in t[f])g[h]||(g[h]=v(h));g[f]||(g[f]=v(f))}var m=[],b=0;for(var f in t)for(var h in t[f]){var y="{protocol}-{label}".replace("{protocol}",f).replace("{label}",h);m.push([y,t[f][h]]),b+=t[f][h]}var w=750,x=600,T=Math.min(w,x)/2,j={w:75,h:30,s:3,t:10},A=0,S=d3.select(e.chartTag).append("svg:svg").attr("width",w).attr("height",x).append("svg:g").attr("id","container").attr("transform","translate("+w/2+","+x/2+")"),$=d3.layout.partition().size([2*Math.PI,T*T]).value(function(t){return t.size}),B=d3.svg.arc().startAngle(function(t){return t.x}).endAngle(function(t){return t.x+t.dx}).innerRadius(function(t){return Math.sqrt(t.y)}).outerRadius(function(t){return Math.sqrt(t.y+t.dy)}),k=d(m);r(k)}function i(t,e){var n={chartTag:"#chart"+e,sequenceTag:"#sequence"+e,explanationTag:"#explanation"+e,percentageTag:"#percentage"+e,legendTag:"#legend"+e,toggleLegendTag:"#togglelegend"+e,sidebarTag:"#sidebar"+e};a(t,n)}function o(t,e){e=e||"protocol_type";var n={};for(var r in t)for(var a in t[r][e])n[a]?n[a][r]?n[a][r]+=t[r][e][a]:n[a][r]=t[r][e][a]:(n[a]={},n[a][r]=t[r][e][a]);return n}function l(){var e=0,n=document.getElementById("uploadInput").files,a=n.length,i=document.getElementById("uploadInput").files[0];if(i){var o=new FileReader;o.readAsText(i,"UTF-8"),o.onload=function(e){s=JSON.parse(e.target.result),c.options=r(s),t.$apply()},o.onerror=function(t){document.getElementById("fileContents").innerHTML="error reading file"}}for(var l=0;a>l;l++)e+=n[l].size;for(var u=e+" bytes",p=["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],d=0,g=e/1024;g>1;g/=1024,d++)u=g.toFixed(3)+" "+p[d]+" ("+e+" bytes)";document.getElementById("fileSize").innerHTML=u}var s,c=this;c.process=n,c.updateSize=l,c.options=[]}t.$inject=["$scope","$timeout"],angular.module("kddcup-data-viewer").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("kddcup-data-viewer").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("kddcup-data-viewer").config(t)}(),function(){"use strict";angular.module("kddcup-data-viewer").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("kddcup-data-viewer").config(t)}(),angular.module("kddcup-data-viewer").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class=container><form name=uploadForm><p><label class="btn btn-info btn-file">Browse<input id=uploadInput type=file name=myFiles onchange=angular.element(this).scope().main.updateSize() style="display: none"></label>total size: <span id=fileSize>0</span></p><div class=row><div class=col-md-4><select id=fieldselector class=form-control ng-model=main.field ng-options="o as o for o in main.options" ng-change=main.updateGraph()></select></div><div><input class="btn btn-primary" type=submit value="Process data" ng-click=main.process()></div></div></form><div><div id=sidebar><input type=checkbox id=togglelegend> Legend<br><div id=legend style="visibility: hidden"></div></div><div id=graphs><div id=sequence></div><div id=chart><div id=explanation style="visibility: hidden"><span id=percentage></span><br>of all requests</div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-f2cf0607ab.js.map
