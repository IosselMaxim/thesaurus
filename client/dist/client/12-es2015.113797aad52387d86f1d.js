(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Oix2:function(n,t,e){"use strict";e.r(t),e.d(t,"TrainerPageModule",(function(){return M}));var i=e("ofXK"),o=e("tyNb"),r=e("wO+i"),c=e("zHUb"),a=e("fXoL"),l=e("JXxo");function g(n,t){if(1&n&&(a.Nb(0,"li"),a.tc(1),a.Mb()),2&n){const n=t.$implicit;a.zb(1),a.vc(" ",n," ")}}function b(n,t){if(1&n&&(a.Nb(0,"li"),a.tc(1),a.Mb()),2&n){const n=t.$implicit;a.zb(1),a.vc(" ",n," ")}}function p(n,t){if(1&n&&(a.Nb(0,"li"),a.tc(1),a.Mb()),2&n){const n=t.$implicit;a.zb(1),a.vc(" ",n," ")}}const s=[{path:"",component:(()=>{class n{constructor(n){this.route=n}ngOnInit(){this.route.params.pipe(Object(r.a)("id")).subscribe(n=>{this.trainer=c.a.find(t=>t._id===n)})}}return n.\u0275fac=function(t){return new(t||n)(a.Jb(o.a))},n.\u0275cmp=a.Db({type:n,selectors:[["app-trainer"]],decls:40,vars:13,consts:[[1,"container"],[1,"main","p-2"],["routerLink","/trainers",1,"back","d-flex","justify-content-start","align-items-center"],["src","/assets/img/icon/arrow-left.png","alt",""],[1,"trainers"],[1,"trainer","d-flex","flex-column","flex-sm-row"],[1,"img","col-sm-4","col-8","mx-auto","mb-4"],["alt","",1,"p-0","pr-sm-5",3,"src"],[1,"info","col-sm-8"],[1,"name","text-sm-left","text-center",3,"routerLink"],[1,"line","mx-auto","mb-4","d-sm-none"],[1,"experience"],[1,"expertise"],[1,"area-of-expertise"],[1,"skills"],[4,"ngFor","ngForOf"],[1,"text"],[1,"upper-education"],[1,"title"],[1,"education"],[3,"clients"]],template:function(n,t){1&n&&(a.Nb(0,"div",0),a.Nb(1,"div",1),a.Nb(2,"div",2),a.Kb(3,"img",3),a.Nb(4,"span"),a.tc(5,"\u041d\u0430\u0437\u0430\u0434 \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0442\u0440\u0435\u043d\u0435\u0440\u043e\u0432"),a.Mb(),a.Mb(),a.Nb(6,"div",4),a.Nb(7,"div",5),a.Nb(8,"div",6),a.Kb(9,"img",7),a.Mb(),a.Nb(10,"div",8),a.Nb(11,"div",9),a.tc(12),a.Mb(),a.Kb(13,"div",10),a.Nb(14,"div",11),a.tc(15),a.Mb(),a.Nb(16,"div",12),a.Nb(17,"p"),a.tc(18),a.Mb(),a.Nb(19,"p"),a.tc(20),a.Mb(),a.Mb(),a.Nb(21,"div",13),a.tc(22,"\u0421\u0444\u0435\u0440\u044b \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u043d\u043e\u0441\u0442\u0438:"),a.Mb(),a.Nb(23,"div",14),a.Nb(24,"ul"),a.rc(25,g,2,1,"li",15),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(26,"div",16),a.tc(27),a.Mb(),a.Nb(28,"div",17),a.Nb(29,"div",18),a.tc(30,"\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u0442\u0440\u0435\u043d\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430:"),a.Mb(),a.Nb(31,"ul"),a.rc(32,b,2,1,"li",15),a.Mb(),a.Mb(),a.Nb(33,"div",19),a.Nb(34,"div",18),a.tc(35,"\u0412\u044b\u0441\u0448\u0435\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435:"),a.Mb(),a.Nb(36,"ul"),a.rc(37,p,2,1,"li",15),a.Mb(),a.Mb(),a.Mb(),a.Nb(38,"app-customer-logos",20),a.tc(39),a.Mb(),a.Mb()),2&n&&(a.zb(9),a.ec("src","/assets/img/main/trainers/",null==t.trainer?null:t.trainer.img,".jpg",a.lc),a.zb(2),a.dc("routerLink","/trainers/"+(null==t.trainer?null:t.trainer._id)),a.zb(1),a.wc(" ",null==t.trainer||null==t.trainer.name?null:t.trainer.name.firstName," ",null==t.trainer||null==t.trainer.name?null:t.trainer.name.lastName," "),a.zb(3),a.vc("\u041e\u043f\u044b\u0442 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0442\u0440\u0435\u043d\u0438\u043d\u0433\u043e\u0432 ",null==t.trainer?null:t.trainer.experience," \u043b\u0435\u0442"),a.zb(3),a.uc(null==t.trainer?null:t.trainer.grade),a.zb(2),a.uc(null==t.trainer?null:t.trainer.expertise),a.zb(5),a.dc("ngForOf",null==t.trainer?null:t.trainer.skills),a.zb(2),a.vc(" ",null==t.trainer?null:t.trainer.text," "),a.zb(5),a.dc("ngForOf",null==t.trainer?null:t.trainer.upperEducation),a.zb(5),a.dc("ngForOf",null==t.trainer?null:t.trainer.education),a.zb(1),a.dc("clients",null==t.trainer?null:t.trainer.clients),a.zb(1),a.uc(null==t.trainer?null:t.trainer.clientsText))},directives:[o.d,i.i,l.a],styles:[".main[_ngcontent-%COMP%]{color:#17375e;margin:10px 0 50px;display:flex;flex-direction:column;justify-content:center}.main[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{cursor:pointer;font-weight:500;font-size:11px;line-height:13px;color:#757886;padding:15px 15px 15px 0;margin-bottom:20px}.main[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:15px}.main[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#17375e;text-decoration:underline}.main[_ngcontent-%COMP%]   .trainers[_ngcontent-%COMP%]{max-width:880px}.main[_ngcontent-%COMP%]   .trainer[_ngcontent-%COMP%]{margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid #17375e}.main[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;padding:0 30px 0 0}.main[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:80%;height:2px;background:#17375e}.main[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{position:relative;align-items:flex-end;font-weight:600;font-size:20px;line-height:30px;padding-bottom:20px}.main[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.main[_ngcontent-%COMP%]   .expertise[_ngcontent-%COMP%]{font-style:normal;font-weight:200;font-size:13px;line-height:20px}.main[_ngcontent-%COMP%]   .expertise[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:10px}.main[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]{font-weight:400;font-size:13px;line-height:16px}.main[_ngcontent-%COMP%]   .area-of-expertise[_ngcontent-%COMP%]{font-weight:600;font-size:11px;line-height:13px;color:#757886;margin-bottom:20px}.main[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:0}.main[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]{font-size:11px;color:#757886}.main[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-weight:300;line-height:20px}.main[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:13px;margin-bottom:40px}.main[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .upper-education[_ngcontent-%COMP%]{font-weight:300;font-size:11px;line-height:20px;color:#757886;margin-bottom:20px}.main[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .upper-education[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600;font-size:11px;line-height:13px;margin-bottom:10px}"],changeDetection:0}),n})(),data:{title:"\u0422\u0420\u0415\u041d\u0415\u0420\u042b"}}];let m=(()=>{class n{}return n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({factory:function(t){return new(t||n)},imports:[[o.g.forChild(s)],o.g]}),n})();var u=e("PCNd");let M=(()=>{class n{}return n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({factory:function(t){return new(t||n)},imports:[[i.c,m,u.a]]}),n})()}}]);