_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{KHpy:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/usuarios",function(){return r("WFFa")}])},WFFa:function(e,a,r){"use strict";r.r(a);var t=r("VX74"),o=r("6I9Z"),s=r("qFOF"),i=r("Tq9W"),n=r("yp05"),l=r("YFqc"),u=r.n(l),d=r("JyMj"),c=r("pVVi"),m=r("q1tI"),p=r.n(m),f=r("WFMo"),b=p.a.createElement,g=function(e){var a=e.items,r=Object(t.useQuery)(n.c.getAll),l=r.data,m=r.loading,p=b("div",{className:"container-fluid my-2"},b("div",{className:"row"},b("div",{className:"col text-left"},b(u.a,{href:"/auth/usuarios/create"},b("a",{className:"btn btn-info btn-sm"},"Agregar ",b(f.a,null))))));return b(i.a,{title:"IPCA | Usuarios",loading:m},b("main",{className:"container-fluid"},b(o.a,{title:"Usuarios",items:a}),b("div",{className:"row justify-content-center"},b("div",{className:"col-md-11 datatable-doc-demo"},b(c.DataTable,{className:"p-datatable-customers shadow-lg",value:null===l||void 0===l?void 0:l.usuarios,rowHover:!0,paginator:!0,header:p,currentPageReportTemplate:"{totalRecords} registros totales",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rows:10,rowsPerPageOptions:[10,25,50],emptyMessage:"No se han encontrado resultados"},Object(s.a)(),b(d.Column,{header:"Nombre de Usuario",field:"username",sortable:!0,filter:!0,reorderable:!0}),b(d.Column,{header:"Persona",field:"persona.str",sortable:!0,filter:!0,reorderable:!0}),b(d.Column,{header:"# de grupos",field:"numeroGrupos",sortable:!0,filter:!0,reorderable:!0}),b(d.Column,{header:"# de permisos",field:"numeroPermisos",sortable:!0,filter:!0,reorderable:!0}),Object(s.b)({editPath:function(e){var a=e.id;return"/auth/usuarios/update?id=".concat(a)},detailPath:function(e){var a=e.id;return"/auth/usuarios/detail?id=".concat(a)}}))))))};g.getInitialProps=function(e){return{items:[{title:"Usuarios",active:!0}]}},a.default=g}},[["KHpy",1,2,3,11,0,4,5,6,7,8,12,13]]]);