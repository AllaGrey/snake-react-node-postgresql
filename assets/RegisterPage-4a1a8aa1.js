import{s,u as o,j as e,c as d}from"./index-f41dfe18.js";import{F as m,a as x,b as c,B as p}from"./LoginForm.styled-0b48e974.js";const u=s.section`
padding: 50px;
`,g=s(m)`
padding: 50px;
display: flex;
flex-direction: column;
align-items: baseline;
gap: 10px;
max-width: 400px;
margin: 0 auto;
`,t=s.label`
    display: flex;
    flex-direction: column;
    align-items: start;
`,i=s(x)`
width: 350px;
text-align: left;
`,j=()=>{const a=o(),r=(n,{resetForm:l})=>{a(d(n)),l()};return e.jsx(u,{children:e.jsx(c,{initialValues:{name:"",email:"",password:""},onSubmit:r,children:e.jsxs(g,{children:[e.jsxs(t,{children:["Name",e.jsx(i,{type:"text",name:"name",required:!0})]}),e.jsxs(t,{children:["Email",e.jsx(i,{type:"email",name:"email",required:!0})]}),e.jsxs(t,{children:["Password",e.jsx(i,{type:"password",name:"password",required:!0})]}),e.jsx(p,{type:"submit",children:"Register"})]})})})};function b(){return e.jsx(e.Fragment,{children:e.jsx(j,{})})}export{b as default};
