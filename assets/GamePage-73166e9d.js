import{a as h,B as E,s as d,b as x,j as o,P as c,r as u}from"./index-cad06b69.js";h.defaults.baseURL=E;const D=async()=>{try{const{data:t}=await h.post("/games");return t}catch(t){console.log(t)}},G=async()=>{try{const{data:t}=await h.get("/games/scores");return{data:t}}catch(t){console.log(t)}},g=async t=>{try{const{data:e}=await h.patch("/games",t);return e}catch(e){console.log(e)}},P=d.div`
padding: 0;
margin: 0;
overflow: hidden;
width: 100%;
display: grid;
grid-template-rows: repeat(20, minmax(20px, 1fr));
grid-template-columns: repeat(20, minmax(20px, 1fr));
gap: 0;
font-size: 5px;
border: 2px solid grey;
max-width: 400px;
`,b=d.div`

    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 30%;

    background-color: ${({special:t})=>t==="food"?"yellow":t==="snake"?"green":t==="head"?"black":"transparent"};
`,_=d.div`
    display: flex;
    justify-content: space-between;
    gap: 100px;
    color: white;
`,q=d.button`
border: none;
width: 120px;
height: 30px;
background-color: green;
color: white;
border-radius: 5px;
cursor: pointer;
font-size: 14px;
display: flex;
justify-content: center;
align-items: center;

&:hover {
    color: yellowgreen;
    background-color: white;
}
`,m=d.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 56px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;b.shouldForwardProp=({special:t})=>t!=="special";const B=(t,e)=>{const a=t.code;let n;return a==="ArrowLeft"?n={...e,direction:"LEFT"}:a==="ArrowRight"?n={...e,direction:"RIGHT"}:a==="ArrowUp"?n={...e,direction:"UP"}:a==="ArrowDown"?n={...e,direction:"DOWN"}:(n={...e},n)},F=t=>{const{snake:e,food:a}=t;let n=[];for(let s=0;s<x;s++)for(let i=0;i<x;i++){let p,r="";const l=a.x===s&&a.y===i,f=e.some(y=>y.x===s&&y.y===i),R=e[0].x===s&&e[0].y===i;l&&(r="food"),f&&(r="snake"),R&&(r="head"),p=o.jsx(b,{special:r},`${i} - ${s}`),n.push(p)}return n},k=t=>({...t,status:"finished"}),I=t=>{const e={x:Math.floor(Math.random()*x),y:Math.floor(Math.random()*x)};return{...t,food:e}},T=t=>{let e={...t};if(e.snake[0].x<0||e.snake[0].x>x||e.snake[0].y<0||e.snake[0].y>x||e.snake.slice(1).some(s=>e.snake[0].x===s.x&&e.snake[0].y===s.y))return e=k(e);switch(e.direction){case"LEFT":e.snake.unshift({x:e.snake[0].x,y:e.snake[0].y-1});break;case"RIGHT":e.snake.unshift({x:e.snake[0].x,y:e.snake[0].y+1});break;case"UP":e.snake.unshift({x:e.snake[0].x-1,y:e.snake[0].y});break;case"DOWN":e.snake.unshift({x:e.snake[0].x+1,y:e.snake[0].y});break}return e.snake[0].x===e.food.x&&e.snake[0].y===e.food.y?(e=I(t),e.eaten_food<1?e={...e,score:e.score+1,eaten_food:e.eaten_food+1}:e.eaten_food===1?e={...e,score:e.score+5,eaten_food:e.eaten_food+1}:e.eaten_food>=2&&(e={...e,score:e.score+10,eaten_food:e.eaten_food+1}),e.score>=50&&e.score%50===6&&(e={...e,level:e.level+1,speed:e.speed-50})):e.snake.pop(),e},v=({start:t,pause:e,pauseGame:a,toggleStart:n})=>{const[s,i]=u.useState();u.useEffect(()=>{t&&D().then(r=>{n(),i(r)})},[t,n]),u.useEffect(()=>{let r;return s&&!e&&s.status!=="finished"&&(r=setInterval(()=>{const l=T(s);l.status==="finished"?(g(l).then(f=>i(f)),n()):i(l)},s.speed)),()=>{s&&!e&&s.status==="in progress"&&clearInterval(r)}},[s,e,n]),u.useEffect(()=>{const r=l=>{const f=B(l,s);i(f)};return s&&!e&&s.status!=="finished"&&document.addEventListener("keydown",r),()=>{s&&!e&&s.status!=="finished"&&document.removeEventListener("keydown",r)}},[s,e]);const p=async()=>{a();const r=await g(s);i(r)};return o.jsxs(o.Fragment,{children:[o.jsxs(_,{children:[s&&o.jsxs("div",{children:[o.jsxs("p",{children:["Score: ",s.score]}),o.jsxs("p",{children:["Level: ",s.level]})]}),s&&s.status!=="finished"&&o.jsx(q,{onClick:p,children:e?"Play":"Pause"})]}),o.jsxs(P,{children:[s&&s.status!=="finished"&&!e&&F(s),s&&e&&o.jsx(m,{children:"Pause"}),s&&s.status==="finished"&&o.jsx(m,{children:"Game Over"})]})]})};v.propTypes={start:c.bool.isRequired,pause:c.bool.isRequired,pauseGame:c.func.isRequired,toggleStart:c.func.isRequired};const L=d.div`
    display: flex;
    justify-content: space-around;
    gap: 30px;
`,A=d.div`
    display: flex;
    gap: 10px;
`,w=d.p`
    color: yellowgreen;
`,j=d.span`
    color: yellow;
`,S=({scoresData:t})=>{const{topScores:e,userMaxScore:a}=t.data;return o.jsx(o.Fragment,{children:t&&o.jsxs(L,{children:[e.map((n,s)=>o.jsx(A,{children:o.jsxs(w,{children:[s+1,". ",n.user,": ",o.jsx(j,{children:n.score})]})},s)),o.jsxs(w,{children:["Personal best score: ",o.jsx(j,{children:a||"0"})]})]})})};S.propTypes={scoresData:c.shape({data:c.shape({topScores:c.arrayOf(c.shape({user:c.string.isRequired,score:c.number.isRequired})).isRequired,userMaxScore:c.number.isRequired}).isRequired}).isRequired};const C=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`,U=d.button`
border: none;
width: 120px;
height: 30px;
background-color: green;
color: white;
border-radius: 5px;
cursor: pointer;
font-size: 14px;
display: flex;
justify-content: center;
align-items: center;

&:hover {
    color: yellowgreen;
    background-color: white;
}
`,O=()=>{const[t,e]=u.useState(!1),[a,n]=u.useState(!1),[s,i]=u.useState(null);u.useEffect(()=>{t||G().then(f=>i(f))},[t]);const p=()=>{e(!0)},r=()=>{n(f=>!f)},l=()=>{e(!1)};return o.jsxs(C,{children:[s&&o.jsx(S,{scoresData:s}),o.jsx(U,{onClick:()=>p(),children:"Start new game"}),o.jsx(v,{start:t,pauseGame:r,pause:a,toggleStart:l})]})};export{O as default};
