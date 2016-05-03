javascript:console.clear();void(function(win){

	var w=win,d=w.document,found=[];

	for(var s,res=found,regex=/url\(["']?([^"']*)/gi,f=d.defaultView.getComputedStyle,m=d.getElementsByTagName('*'),l=m.length,i=0;i<l;i++){
		s=f(m[i],null).getPropertyValue('background-image');
		if(s!=='none'){
			for(var t,p=regex,e=res,m2=s.split(','),l2=m2.length,i2=0;i2<l2;i2++){
				t=p.exec(m2[i2]);
				if(t!==null){
					e[e.length]=t[1];
				};
			};
		};
	};

	for(var o,e=found,m=d.images,l=m.length,i=0;i<l;i++){
		o=m[i];
		if(o.complete && o.naturalWidth > 1){
			e[e.length]=o.src;
		};
	};

	if(found.length!==0){
	 w=w.open('data:text/html,');
	 d=w.document;
	 d.open();
	 d.write('<style>img{display:block;max-width:100%;margin-bottom:12px;border:2px solid #eee;}</style>');
	 for(var f=d.write.bind(d),m=found,l=m.length,i=0;i<l;i++){f('<img src='+m[i]+'>');};
	 d.close();
	};
 }(window));
//=============================





//=============================
w.open('data:text/html;charset=utf-8,')
			console.log(m[i]);
				console.log(m2[i2]);


	console.dir(result);
if(t!==null.length){dest[dest.length]=t;};
	d.close();
document.write()




				console.dir();
var array = [];
$.each($('#myElement').css('background-image'), function(key, value){
    array.push(value.replace(/^url\(["']?/, '').replace(/["']?\)$/, ''));
});

//




			s.replace(p,function(fullMatch,url){
				console.log(fullMatch,url);
			});


