_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"/btA":function(n,t,e){"use strict";e.r(t);var i=e("o0o1"),r=e.n(i),a=e("HaE+"),c=e("ODXe"),o=e("VX74"),u=e("Tq9W"),d=e("wedC"),l=e("nOHt"),s=e("q1tI"),p=e.n(s),m=e("NKCw"),b=e("Yg9V"),f=p.a.createElement,j=function(n){var t=n.title,e=n.items,i=n.id,p=Object(m.d)({mode:"onChange"}),j=Object(s.useState)(!1),v=j[0],O=j[1],g=Object(l.useRouter)(),A=Object(o.useQuery)(d.d,{variables:{id:i},onCompleted:function(n){var t=n.aplicacion;p.reset(t)},onError:function(n){return g.push("/auth/aplicaciones")}}).loading,w=Object(o.useMutation)(d.g,{onError:function(){return g.push("/auth/aplicaciones")}}),h=Object(c.a)(w,1)[0],q=function(){var n=Object(a.a)(r.a.mark((function n(t){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return O(!0),n.next=3,h({variables:{id:i,input:t}});case 3:O(!1),g.replace("/auth/aplicaciones");case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return f(u.a,{title:t,loading:A},f(m.b,p,f(b.a,{title:t,items:e,onSubmit:q,loadBtn:v})))};j.getInitialProps=function(n){var t="Editar Aplicaci\xf3n";return{items:[{title:"Aplicaciones",href:"/auth/aplicaciones"},{title:t,active:!0}],title:t,id:n.query.id}},t.default=j},"0mWr":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/aplicaciones/update",function(){return e("/btA")}])},Yg9V:function(n,t,e){"use strict";var i=e("6I9Z"),r=e("+Rjy"),a=e("9sAQ"),c=e("Fjxe"),o=e("q1tI"),u=e.n(o),d=e("QojX"),l=e("cWnB"),s=e("NKCw"),p=u.a.createElement;t.a=function(n){var t=n.onSubmit,e=n.items,o=n.title,u=n.loadBtn,m=Object(s.e)(),b=(m.register,m.handleSubmit);m.errors;return p("main",{className:"container-fluid"},p(i.a,{title:o,items:e}),p("div",{className:"row justify-content-center mt-5"},p("div",{className:"col-11 col-md-8 col-lg-6 jumbotron"},p("form",{onSubmit:b(t)},p(c.a,{label:"Nombre: ",name:"nombre",rules:{required:"Obligatorio"}}),p(a.a,{label:"Descripcion:",name:"descripcion"}),p(d.a.Row,{className:"justify-content-around"},p("div",{className:"col-md-5 my-1"},p(r.a,{variant:"outline-danger",href:"/auth/aplicaciones"})),p("div",{className:"col-md-5 my-1"},p(l.a,{block:!0,type:"submit",variant:"outline-primary",disabled:u||!1},u&&"Procesando...",!u&&"Guardar")))))))}},wedC:function(n,t,e){"use strict";e.d(t,"c",(function(){return p})),e.d(t,"d",(function(){return m})),e.d(t,"a",(function(){return b})),e.d(t,"g",(function(){return f})),e.d(t,"b",(function(){return j})),e.d(t,"e",(function(){return v})),e.d(t,"f",(function(){return O}));var i=e("h4VS"),r=e("VX74");function a(){var n=Object(i.a)(["\n  query getPermisoById($id: ID!) {\n    permiso(id: $id) {\n      id\n      nombre\n      descripcion\n      aplicacion {\n        id\n        nombre\n      }\n    }\n  }\n"]);return a=function(){return n},n}function c(){var n=Object(i.a)(["\n  query getPermisos {\n    permisos {\n      id\n      nombre\n      descripcion\n      aplicacion {\n        nombre\n      }\n    }\n  }\n"]);return c=function(){return n},n}function o(){var n=Object(i.a)(["\n  mutation deleteApp($id: ID!) {\n    deleteAplicacion(id: $id) {\n      found\n      deletedId\n    }\n  }\n"]);return o=function(){return n},n}function u(){var n=Object(i.a)(["\n  mutation updateApp($id: ID!, $input: UpdateAplicacionInput!) {\n    updateAplicacion(id: $id, input: $input) {\n      aplicacion {\n        id\n        updatedAt\n        nombre\n        descripcion\n      }\n    }\n  }\n"]);return u=function(){return n},n}function d(){var n=Object(i.a)(["\n  mutation createAplicacion($input: CreateAplicacionInput!) {\n    createAplicacion(input: $input) {\n      aplicacion {\n        id\n        createdAt\n      }\n    }\n  }\n"]);return d=function(){return n},n}function l(){var n=Object(i.a)(["\n  query getAppById($id: ID!) {\n    aplicacion(id: $id) {\n      id\n      createdAt\n      updatedAt\n      nombre\n      descripcion\n    }\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(i.a)(["\n  query getApps {\n    aplicaciones {\n      id\n      nombre\n      descripcion\n    }\n  }\n"]);return s=function(){return n},n}var p=Object(r.gql)(s()),m=Object(r.gql)(l()),b=Object(r.gql)(d()),f=Object(r.gql)(u()),j=Object(r.gql)(o()),v=Object(r.gql)(c()),O=Object(r.gql)(a())}},[["0mWr",1,2,3,0,4,5,6,7,9,10]]]);