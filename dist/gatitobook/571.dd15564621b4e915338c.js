"use strict";(self.webpackChunkgatitobook=self.webpackChunkgatitobook||[]).push([[571],{8571:(vt,_,r)=>{r.r(_),r.d(_,{AnimaisModule:()=>dt});var m=r(8583),t=r(639);let I=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez]]}),n})();var s=r(665),y=r(8939),f=r(1841),g=r(2340),b=r(5917),Z=r(7574);var q=r(7393);class U{constructor(e){this.value=e}call(e,o){return o.subscribe(new w(e,this.value))}}class w extends q.L{constructor(e,o){super(e),this.value=o}_next(e){this.destination.next(this.value)}}var J=r(5304),S=r(5024);const p=g.N.apiURL;let v=(()=>{class n{constructor(o,i){this.httpClient=o,this.tokenService=i}listaDoUsuario(o){return this.httpClient.get(`${p}/${o}/photos`)}buscaPorId(o){return this.httpClient.get(`${p}/photos/${o}`)}excluiAnimal(o){return this.httpClient.delete(`${p}/photos/${o}`)}curtir(o){return this.httpClient.post(`${p}/photos/${o}/like`,{},{observe:"response"}).pipe(e=>e.lift(new U(!0)),(0,J.K)(i=>"304"===i.status?(0,b.of)(!1):function(n,e){return new Z.y(o=>o.error(n))}(i)))}upload(o,i,a){const l=new FormData;return l.append("description",o),l.append("allowComments",i?"true":"false"),l.append("imageFile",a),this.httpClient.post(`${p}/photos/upload`,l,{observe:"events",reportProgress:!0})}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(f.eN),t.LFG(S.B))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var c=r(8216),C=r(6341);const Y=g.N.apiURL;let h=(()=>{class n{constructor(){this.urlOriginal="",this.descricao=""}set url(o){this.urlOriginal=o.startsWith("data")?o:`${Y}/imgs/${o}`}get url(){return this.urlOriginal}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-animal"]],inputs:{descricao:"descricao",url:"url"},decls:1,vars:2,consts:[[1,"img-thumbnail",3,"src","alt"]],template:function(o,i){1&o&&t._UZ(0,"img",0),2&o&&t.Q6J("src",i.url,t.LSH)("alt",i.descricao)},styles:[""]}),n})();function M(n,e){1&n&&t._UZ(0,"app-mensagem",18)}function E(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"button",13),t.NdJ("click",function(){return t.CHM(o),t.MAs(4).click()}),t._UZ(2,"i",14),t.qZA(),t.TgZ(3,"input",15,16),t.NdJ("change",function(a){return t.CHM(o),t.oxw().gravaArquivo(a.target)}),t.qZA(),t.YNc(5,M,1,0,"app-mensagem",17),t.qZA()}if(2&n){const o=t.oxw();let i;t.xp6(5),t.Q6J("ngIf",!(null==(i=o.formularioAnimal.get("file"))||null==i.errors||!i.errors.required))}}function $(n,e){if(1&n&&t._UZ(0,"app-animal",19),2&n){const o=t.oxw();t.Q6J("url",o.preview)}}function Q(n,e){1&n&&t._UZ(0,"app-mensagem",20)}function k(n,e){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"button",21),t._uU(2,"Enviar"),t.qZA(),t.TgZ(3,"a",22),t._uU(4," Cancelar "),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("disabled",o.formularioAnimal.invalid)}}function D(n,e){if(1&n&&(t.TgZ(0,"div",23),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.hij(" Percentual de upload ",o.percentualConcluido," % ")}}let R=(()=>{class n{constructor(o,i,a){this.animaisService=o,this.formBuilder=i,this.router=a,this.percentualConcluido=0}ngOnInit(){this.formularioAnimal=this.formBuilder.group({file:["",s.kI.required],description:["",s.kI.maxLength(300)],allowComments:[!0]})}upload(){var o,i,a,l;const u=null!==(i=null===(o=this.formularioAnimal.get("allowComments"))||void 0===o?void 0:o.value)&&void 0!==i&&i,ft=null!==(l=null===(a=this.formularioAnimal.get("description"))||void 0===a?void 0:a.value)&&void 0!==l?l:"";this.animaisService.upload(ft,u,this.file).pipe((0,y.x)(()=>this.router.navigate(["animais"]))).subscribe(d=>{var A;if(d.type===f.dt.UploadProgress){const gt=null!==(A=d.total)&&void 0!==A?A:1;this.percentualConcluido=Math.round(d.loaded/gt*100)}},d=>console.log(d))}gravaArquivo(o){const[i]=null==o?void 0:o.files;this.file=i;const a=new FileReader;a.onload=l=>this.preview=l.target.result,a.readAsDataURL(i)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(v),t.Y36(s.qu),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-novo-animal"]],decls:18,vars:6,consts:[[1,"container"],[1,"row",3,"formGroup","submit"],[1,"col-md-6","text-center"],["class","form-group",4,"ngIf","ngIfElse"],["previewImage",""],[1,"col-md-6"],[1,"form-group"],["formControlName","description","placeholder","Descri\xe7\xe3o do animal",1,"form-control","form-control-sm"],["mensagem","Tamanho m\xe1ximo do campo \xe9 300 caracteres",4,"ngIf"],[1,"text-muted"],["type","checkbox","formControlName","allowComments"],[4,"ngIf","ngIfElse"],["uploadDiv",""],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-image","fa-4x","align-middle"],["type","file","hidden","","formControlName","file","accept","image/*",3,"change"],["fileInput",""],["mensagem","Por favor selecione a foto",4,"ngIf"],["mensagem","Por favor selecione a foto"],["title","Preview",3,"url"],["mensagem","Tamanho m\xe1ximo do campo \xe9 300 caracteres"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],["routerLink","['animais']",1,"btn","btn-secondary","btn-block"],[1,"text-center","display-4"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.NdJ("submit",function(){return i.upload()}),t.TgZ(2,"div",2),t.YNc(3,E,6,1,"div",3),t.YNc(4,$,1,1,"ng-template",null,4,t.W1O),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"textarea",7),t._uU(9,"\n        "),t.qZA(),t.YNc(10,Q,1,0,"app-mensagem",8),t.qZA(),t.TgZ(11,"div",6),t.TgZ(12,"label",9),t._uU(13," Permite coment\xe1rio "),t._UZ(14,"input",10),t.qZA(),t.qZA(),t.YNc(15,k,5,1,"div",11),t.YNc(16,D,2,1,"ng-template",null,12,t.W1O),t.qZA(),t.qZA(),t.qZA()),2&o){const a=t.MAs(5),l=t.MAs(17);let u;t.xp6(1),t.Q6J("formGroup",i.formularioAnimal),t.xp6(2),t.Q6J("ngIf",!i.preview)("ngIfElse",a),t.xp6(7),t.Q6J("ngIf",!(null==(u=i.formularioAnimal.get("description"))||null==u.errors||!u.errors.maxlength)),t.xp6(5),t.Q6J("ngIf",!i.percentualConcluido)("ngIfElse",l)}},directives:[s._Y,s.JL,s.sg,m.O5,s.Fj,s.JJ,s.u,s.Wl,C.c,h,c.yS],styles:[""]}),n})();var x=r(3190),G=r(3342);const T=g.N.apiURL;let P=(()=>{class n{constructor(o){this.httpClient=o}buscaComentario(o){return this.httpClient.get(`${T}/photos/${o}/comments`)}incluiComentario(o,i){return this.httpClient.post(`${T}/photos/${o}/comments`,{commentText:i})}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(f.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function z(n,e){if(1&n&&(t.TgZ(0,"li"),t.TgZ(1,"p",10),t._uU(2),t.qZA(),t.TgZ(3,"em"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"p",11),t._uU(7),t.qZA(),t.qZA()),2&n){const o=e.$implicit;t.xp6(2),t.Oqu(o.userName),t.xp6(2),t.Oqu(t.xi3(5,3,o.date,"dd-MM-yyyy HH:mm")),t.xp6(3),t.Oqu(o.text)}}function B(n,e){1&n&&t._UZ(0,"app-mensagem",12)}function H(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"ul",1),t.YNc(2,z,8,6,"li",2),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"form",4),t.NdJ("submit",function(){return t.CHM(o),t.oxw().gravar()}),t.TgZ(5,"div",5),t._UZ(6,"textarea",6),t.TgZ(7,"div",7),t.TgZ(8,"button",8),t._uU(9,"Publicar"),t.qZA(),t.qZA(),t.qZA(),t.YNc(10,B,1,0,"app-mensagem",9),t.qZA(),t.qZA(),t.qZA()}if(2&n){const o=e.ngIf,i=t.oxw();let a;t.xp6(2),t.Q6J("ngForOf",o),t.xp6(2),t.Q6J("formGroup",i.comentarioForm),t.xp6(4),t.Q6J("disabled",i.comentarioForm.invalid),t.xp6(2),t.Q6J("ngIf",!(null==(a=i.comentarioForm.get("comentario"))||null==a.errors||!a.errors.maxLength))}}let j=(()=>{class n{constructor(o,i){this.formBuilder=o,this.comentariosService=i}ngOnInit(){this.comentarios$=this.comentariosService.buscaComentario(this.id),this.comentarioForm=this.formBuilder.group({comentario:["",s.kI.maxLength(300)]})}gravar(){var o,i;const a=null!==(i=null===(o=this.comentarioForm.get("comentario"))||void 0===o?void 0:o.value)&&void 0!==i?i:"";this.comentarios$=this.comentariosService.incluiComentario(this.id,a).pipe((0,x.w)(()=>this.comentariosService.buscaComentario(this.id)),(0,G.b)(()=>{this.comentarioForm.reset(),alert("Salvo coment\xe1rio")}))}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(s.qu),t.Y36(P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-comentarios"]],inputs:{id:"id"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"list-unstyled","comentario-list"],[4,"ngFor","ngForOf"],[1,"mt-4"],[3,"formGroup","submit"],[1,"input-group"],["formControlName","comentario",1,"form-control"],[1,"input-group-append"],[1,"btn","btn-primary","pull-left",3,"disabled"],["mensagem","Tamanho m\xe1ximo de 300 caracteres",4,"ngIf"],[1,"text-dark","font-weight-bold","mr-1"],[1,"break-word","mb-2"],["mensagem","Tamanho m\xe1ximo de 300 caracteres"]],template:function(o,i){1&o&&(t.YNc(0,H,11,4,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,i.comentarios$))},directives:[m.O5,m.sg,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,C.c],pipes:[m.Ov,m.uU],styles:[".comentario-list[_ngcontent-%COMP%]{height:50vh;overflow-y:auto}"]}),n})();function X(n,e){if(1&n&&t._UZ(0,"app-comentarios",12),2&n){const o=t.oxw(2);t.Q6J("id",o.animalId)}}function W(n,e){1&n&&(t.TgZ(0,"p"),t._uU(1,"Usuario n\xe3o pode comentar o animal"),t.qZA())}function K(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._UZ(3,"app-animal",4),t.qZA(),t.TgZ(4,"div",5),t.TgZ(5,"small"),t.TgZ(6,"p",6),t._uU(7),t.qZA(),t.TgZ(8,"i",7),t.NdJ("click",function(){return t.CHM(o),t.oxw().curtir()}),t._uU(9),t.qZA(),t.TgZ(10,"i",8),t._uU(11),t.qZA(),t.TgZ(12,"i",9),t.NdJ("click",function(){return t.CHM(o),t.oxw().excluir()}),t.qZA(),t.qZA(),t.YNc(13,X,1,1,"app-comentarios",10),t.YNc(14,W,2,0,"ng-template",null,11,t.W1O),t.qZA(),t.qZA(),t.qZA()}if(2&n){const o=e.ngIf,i=t.MAs(15);t.xp6(3),t.Q6J("url",o.url)("descricao",o.description),t.xp6(4),t.Oqu(o.description),t.xp6(2),t.Oqu(o.likes),t.xp6(2),t.Oqu(o.comments),t.xp6(2),t.Q6J("ngIf",o.allowComments)("ngIfElse",i)}}let V=(()=>{class n{constructor(o,i,a){this.animaisService=o,this.activatedRoute=i,this.router=a}ngOnInit(){this.animalId=this.activatedRoute.snapshot.params.animalId,this.animal$=this.animaisService.buscaPorId(this.animalId)}curtir(){this.animaisService.curtir(this.animalId).subscribe(o=>{o&&(this.animal$=this.animaisService.buscaPorId(this.animalId))})}excluir(){this.animaisService.excluiAnimal(this.animalId).subscribe(()=>{this.router.navigate(["/animais/"])},o=>console.log(o))}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(v),t.Y36(c.gz),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-detalhe-animal"]],decls:2,vars:3,consts:[["class","bg-white border",4,"ngIf"],[1,"bg-white","border"],[1,"row"],[1,"col-lg-8"],[3,"url","descricao"],[1,"col-lg-4"],[1,"text-left","break-word"],[1,"fa","fa-heart-o","fa-2x","mr-2","pull-left",3,"click"],[1,"fa","fa-comment-o","fa-2x","mr-2","ml-2"],[1,"fa","fa-trash-o","fa-2x","pull-right",3,"click"],[3,"id",4,"ngIf","ngIfElse"],["warning",""],[3,"id"]],template:function(o,i){1&o&&(t.YNc(0,K,16,7,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,i.animal$))},directives:[m.O5,h,j],pipes:[m.Ov],styles:[""]}),n})();function tt(n,e){if(1&n&&(t.TgZ(0,"h4",3),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.titulo)}}const ot=["*"];let nt=(()=>{class n{constructor(){this.titulo=""}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cartao"]],inputs:{titulo:"titulo"},ngContentSelectors:ot,decls:4,vars:1,consts:[[1,"card","border-light","text-center"],["class","card-header",4,"ngIf"],[1,"card-block","text-justify"],[1,"card-header"]],template:function(o,i){1&o&&(t.F$t(),t.TgZ(0,"div",0),t.YNc(1,tt,2,1,"h4",1),t.TgZ(2,"div",2),t.Hsn(3),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",i.titulo))},directives:[m.O5],styles:[""]}),n})();function et(n,e){1&n&&(t.TgZ(0,"p",3),t._uU(1," Desculpe, n\xe3o h\xe1 animais.\n"),t.qZA())}const it=function(n){return["/animais",n]};function at(n,e){if(1&n&&(t.TgZ(0,"div",4),t.TgZ(1,"a",5),t.TgZ(2,"app-cartao"),t._UZ(3,"app-animal",6),t.TgZ(4,"i",7),t._uU(5),t.qZA(),t.TgZ(6,"i",8),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const o=e.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(5,it,o.id)),t.xp6(2),t.Q6J("url",o.url)("descricao",o.description),t.xp6(2),t.Oqu(o.likes),t.xp6(2),t.Oqu(o.comments)}}let rt=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-grade-fotos-animais"]],inputs:{animais:"animais"},decls:3,vars:2,consts:[["class","text-center text-muted",4,"ngIf"],[1,"row"],["class","col-4",4,"ngFor","ngForOf"],[1,"text-center","text-muted"],[1,"col-4"],[3,"routerLink"],[3,"url","descricao"],["aria-hidden","true",1,"fa","fa-heart-o","fa-1x","mr-2"],["aria-hidden","true",1,"fa","fa-comment-o","fa-1x","mr-2","ml-2"]],template:function(o,i){1&o&&(t.YNc(0,et,2,0,"p",0),t.TgZ(1,"div",1),t.YNc(2,at,8,7,"div",2),t.qZA()),2&o&&(t.Q6J("ngIf",!i.animais.length),t.xp6(2),t.Q6J("ngForOf",i.animais))},directives:[m.O5,m.sg,c.yS,nt,h],styles:[""]}),n})(),st=(()=>{class n{constructor(o){this.activatedRoute=o}ngOnInit(){this.activatedRoute.params.subscribe(o=>{this.animais=this.activatedRoute.snapshot.data.animais})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-lista-animais"]],decls:2,vars:1,consts:[[3,"animais"]],template:function(o,i){1&o&&(t.TgZ(0,"div"),t._UZ(1,"app-grade-fotos-animais",0),t.qZA()),2&o&&(t.xp6(1),t.Q6J("animais",i.animais))},directives:[rt],styles:[""]}),n})();var lt=r(5257),mt=r(2374);const ct=[{path:"",component:st,resolve:{animais:(()=>{class n{constructor(o,i){this.animaisService=o,this.usuarioService=i}resolve(o,i){return this.usuarioService.retornaUsuario().pipe((0,x.w)(a=>{var l;const u=null!==(l=a.name)&&void 0!==l?l:"";return this.animaisService.listaDoUsuario(u)}),(0,lt.q)(1))}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(v),t.LFG(mt.i))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}},{path:"novo",component:R},{path:":animalId",component:V}];let ut=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(ct)],c.Bz]}),n})();var pt=r(7764);let dt=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,ut,I,pt.m]]}),n})()}}]);