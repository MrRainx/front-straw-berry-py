_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{KHpy:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/usuarios",function(){return t("WFFa")}])},WFFa:function(e,a,t){"use strict";t.r(a);var r=t("VX74"),o=t("6I9Z"),s=t("qFOF"),i=t("Tq9W"),n=t("yp05"),u=t("YFqc"),l=t.n(u),d=t("JyMj"),c=t("pVVi"),m=t("q1tI"),p=t.n(m),g=t("WFMo"),f=p.a.createElement,b=function(e){var a=e.items,t=Object(r.useQuery)(n.c.getAll),u=t.data,m=t.loading,p=f("div",{className:"container-fluid my-2"},f("div",{className:"row"},f("div",{className:"col text-left"},f(l.a,{href:"/auth/usuarios/create"},f("a",{className:"btn btn-info btn-sm"},"Agregar ",f(g.a,null))))));return f(i.a,{title:"IPCA | Usuarios",loading:m},f("main",{className:"container-fluid"},f(o.a,{title:"Usuarios",items:a}),f("div",{className:"row justify-content-center"},f("div",{className:"col-md-11 datatable-doc-demo"},f(c.DataTable,{className:"p-datatable-customers shadow-lg",value:null===u||void 0===u?void 0:u.usuarios,rowHover:!0,paginator:!0,header:p,currentPageReportTemplate:"{totalRecords} registros totales",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rows:10,rowsPerPageOptions:[10,25,50],emptyMessage:"No se han encontrado resultados"},Object(s.a)(),f(d.Column,{header:"Nombre de Usuario",field:"username",sortable:!0,filter:!0,reorderable:!0}),f(d.Column,{header:"# de grupos",field:"numeroGrupos",sortable:!0,filter:!0,reorderable:!0}),f(d.Column,{header:"# de permisos",field:"numeroPermisos",sortable:!0,filter:!0,reorderable:!0}),Object(s.b)({editPath:function(e){var a=e.id;return"/auth/usuarios/update?id=".concat(a)},detailPath:function(e){var a=e.id;return"/auth/usuarios/detail?id=".concat(a)}}))))))};b.getInitialProps=function(e){return{items:[{title:"Usuarios",active:!0}]}},a.default=b}},[["KHpy",1,2,3,11,0,4,5,6,7,8,12,13]]]);