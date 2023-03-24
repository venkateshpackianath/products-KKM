"use strict";(self.webpackChunkproducts_KKM=self.webpackChunkproducts_KKM||[]).push([[850],{4850:(D,h,d)=>{d.r(h),d.d(h,{ProductsModule:()=>K});var l=d(6895),u=d(7251),t=d(4650),m=d(3071);let f=(()=>{class e{constructor(o,n,r){this.auth=o,this.router=n,this.myRoute=r}canActivate(o,n){return"true"===localStorage.getItem("isLoggedIn")||(this.router.navigate(["/Login"]),!1)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(m.K),t.LFG(u.F0),t.LFG(u.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();class x{constructor(){this.productCode="",this.name="",this.price=0,this.availability="yes",this._id=""}}var _=d(8785),v=d(4144),M=d(4859),a=d(354),g=d(1948),s=d(4006);const P=["productForm"];function Z(e,i){1&e&&(t.TgZ(0,"th",14),t._uU(1," Product Code "),t.qZA())}function y(e,i){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.productCode)}}function T(e,i){1&e&&(t.TgZ(0,"th",14),t._uU(1," Name "),t.qZA())}function A(e,i){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.hij(" ",o.name," ")}}function b(e,i){1&e&&(t.TgZ(0,"th",14),t._uU(1," Price "),t.qZA())}function L(e,i){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.hij(" ",t.Dn7(2,1,o.price,"USD","symbol")," ")}}function w(e,i){1&e&&(t.TgZ(0,"th",14),t._uU(1," Availability "),t.qZA())}function U(e,i){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.hij(" ","yes"===o.availability?"In Stock":"Out of Stock"," ")}}function N(e,i){1&e&&(t.TgZ(0,"th",14),t._uU(1," Actions "),t.qZA())}function F(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"td",15)(1,"a",16),t.NdJ("click",function(){const c=t.CHM(o).$implicit,p=t.oxw();return t.KtG(p.edit(c))}),t._UZ(2,"i",17),t.qZA(),t.TgZ(3,"a",16),t.NdJ("click",function(){const c=t.CHM(o).$implicit,p=t.oxw();return t.KtG(p.delete(c))}),t._UZ(4,"i",18),t.qZA()()}}function q(e,i){1&e&&t._UZ(0,"tr",19)}function J(e,i){1&e&&t._UZ(0,"tr",20)}function k(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"div",21)(1,"form",22,23)(3,"h2"),t._uU(4),t.qZA(),t.TgZ(5,"div",24)(6,"mat-form-field",25)(7,"mat-label"),t._uU(8,"Product Code"),t.qZA(),t.TgZ(9,"input",26),t.NdJ("ngModelChange",function(r){t.CHM(o);const c=t.oxw();return t.KtG(c.productCode=r)}),t.qZA()(),t.TgZ(10,"mat-form-field",25)(11,"mat-label"),t._uU(12,"Product Name"),t.qZA(),t.TgZ(13,"input",27),t.NdJ("ngModelChange",function(r){t.CHM(o);const c=t.oxw();return t.KtG(c.name=r)}),t.qZA()(),t.TgZ(14,"mat-form-field",28)(15,"mat-label"),t._uU(16,"Price"),t.qZA(),t.TgZ(17,"span",29),t._uU(18,"$\xa0"),t.qZA(),t.TgZ(19,"input",30),t.NdJ("ngModelChange",function(r){t.CHM(o);const c=t.oxw();return t.KtG(c.price=r)}),t.qZA()()(),t.TgZ(20,"div")(21,"label"),t._uU(22,"Availability "),t.qZA(),t.TgZ(23,"mat-radio-group",31),t.NdJ("ngModelChange",function(r){t.CHM(o);const c=t.oxw();return t.KtG(c.availability=r)}),t.TgZ(24,"mat-radio-button",32),t._uU(25,"Yes"),t.qZA(),t.TgZ(26,"mat-radio-button",33),t._uU(27,"No"),t.qZA()()(),t.TgZ(28,"div",34)(29,"button",35),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.addProduct())}),t._uU(30),t.qZA(),t.TgZ(31,"button",36),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.cancel())}),t._uU(32,"cancel"),t.qZA()()()()}if(2&e){const o=t.oxw();t.xp6(4),t.Oqu(o.addMode?"Add Product":"Edit Product"),t.xp6(5),t.Q6J("ngModel",o.productCode),t.xp6(4),t.Q6J("ngModel",o.name),t.xp6(6),t.Q6J("ngModel",o.price),t.xp6(4),t.Q6J("ngModel",o.availability),t.xp6(7),t.Oqu(o.addMode?"Add":"Edit")}}let Q=(()=>{class e{constructor(o,n){this.userService=o,this.route=n,this.products=[],this.editMode=!1,this.addMode=!1,this.dataSource=new Array,this.displayedColumns=new Array,this.availability="yes",this.name="",this.price=0,this.productCode="",this.product=new x,this.currentId=""}ngOnInit(){this.products=this.route.snapshot.data.products,this.displayedColumns=["productCode","name","price","availability","actions"],this.dataSource=this.products}add(){this.addMode=!0,this.editMode=!1,this.productForm?.reset()}cancel(){this.productForm?.reset(),this.addMode=!1,this.editMode=!1,this.currentId=""}addProduct(){this.addMode&&this.productForm.valid&&this.userService.createProduct({productCode:this.productCode,name:this.name,price:this.price,availability:this.availability}).subscribe(n=>{this.productForm.reset(),this.getProducts()}),this.editMode&&this.productForm.valid&&this.userService.updateProduct({productCode:this.productCode,name:this.name,price:this.price,availability:this.availability},this.currentId).subscribe(n=>{this.productForm.reset(),this.getProducts()})}getProducts(){this.userService.getProducts().subscribe(o=>{this.dataSource=o})}delete(o){o&&this.userService.deleteProduct(o._id).subscribe(n=>{this.getProducts()})}edit(o){this.editMode=!0,this.addMode=!1,this.productCode=o.productCode,this.price=o.price,this.availability=o.availability,this.name=o.name,this.currentId=o._id?o._id:""}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m.K),t.Y36(u.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-list"]],viewQuery:function(o,n){if(1&o&&t.Gf(P,5),2&o){let r;t.iGM(r=t.CRH())&&(n.productForm=r.first)}},decls:24,vars:5,consts:[[1,"row","h-100"],[1,"p-4","d-flex","align-items-center","flex-column",3,"ngClass"],["mat-table","",1,"mat-elevation-z8","m-4","w-75",3,"dataSource"],["matColumnDef","productCode"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","price"],["matColumnDef","availability"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-raised-button","","color","primary",3,"click"],["class","shadowed col-sm-4 p-5 d-flex flex-column justify-content-center h-100",4,"ngIf"],["mat-header-cell",""],["mat-cell",""],[3,"click"],["aria-hidden","true",1,"fa","fa-pencil","mr-2"],["aria-hidden","true",1,"fa","fa-trash"],["mat-header-row",""],["mat-row",""],[1,"shadowed","col-sm-4","p-5","d-flex","flex-column","justify-content-center","h-100"],[1,"d-flex","flex-column"],["productForm","ngForm"],[1,"example-form-fields","d-flex","flex-column"],["appearance","fill"],["required","","name","productCode","matInput","",3,"ngModel","ngModelChange"],["required","","name","name","matInput","",3,"ngModel","ngModelChange"],["appearance","fill","floatLabel","always"],["matTextPrefix",""],["matInput","","required","","name","price","type","number","placeholder","0",1,"example-right-align",3,"ngModel","ngModelChange"],["required","","name","availability",1,"d-flex","flex-column",3,"ngModel","ngModelChange"],["value","yes"],["value","no"],[1,"d-flex","align-items-center","flex-row","justify-content-start","mt-2"],["mat-raised-button","","color","primary",1,"mr-2",3,"click"],["mat-raised-button","","color","danger",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"table",2),t.ynx(3,3),t.YNc(4,Z,2,0,"th",4),t.YNc(5,y,2,1,"td",5),t.BQk(),t.ynx(6,6),t.YNc(7,T,2,0,"th",4),t.YNc(8,A,2,1,"td",5),t.BQk(),t.ynx(9,7),t.YNc(10,b,2,0,"th",4),t.YNc(11,L,3,5,"td",5),t.BQk(),t.ynx(12,8),t.YNc(13,w,2,0,"th",4),t.YNc(14,U,2,1,"td",5),t.BQk(),t.ynx(15,9),t.YNc(16,N,2,0,"th",4),t.YNc(17,F,5,0,"td",5),t.BQk(),t.YNc(18,q,1,0,"tr",10),t.YNc(19,J,1,0,"tr",11),t.qZA(),t.TgZ(20,"div")(21,"button",12),t.NdJ("click",function(){return n.add()}),t._uU(22,"Add Product"),t.qZA()()(),t.YNc(23,k,33,6,"div",13),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngClass",n.addMode||n.editMode?"col-sm-8":"col-sm-12"),t.xp6(1),t.Q6J("dataSource",n.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(4),t.Q6J("ngIf",n.addMode||n.editMode))},dependencies:[l.mk,l.O5,_.KE,_.hX,v.Nt,M.lW,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,g.VQ,g.U0,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.Q7,s.On,s.F,l.H9],styles:["input.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button{display:none}.example-right-align[_ngcontent-%COMP%]{text-align:right}input.example-right-align[_ngcontent-%COMP%]{-moz-appearance:textfield}.mr-2[_ngcontent-%COMP%]{margin-right:20px}.shadowed[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003,0 6px 20px #00000030}"]}),e})(),C=(()=>{class e{constructor(o){this.userService=o}resolve(){return this.userService.getProducts()}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(m.K))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();const S=[{path:"product-list",component:Q,resolve:{products:C},canActivate:[f]}];let Y=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(S),u.Bz]}),e})();var G=d(9125);let K=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[C,f],imports:[l.ez,Y,G.q,s.u5]}),e})()}}]);