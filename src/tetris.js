A=p=>(H=0,b=[...B],p.map((v,i)=>{i%2||(H|=v<0||v>9||p[i+1]<0||p[i+1]>17||b[p[i+1]]>>v&1),b[p[i+1]]|=i%2?0:1<<v}),H),
R=e=>E=A(P=[...'716160504030312120'.substr(new Date%6*2,8)].map(i=>+i,T=200)),
R(B=Array(18).fill(S=E=0)),
D=e=>($='',e.map(v=>e.map((n,x)=>x>9?0:$+='_#'[v>>x&1],$+='<br>')),Z.innerHTML=$+S),
(_=e=>{A(p=P.map((v,i)=>i%2?v+1:v))?(A(P),D(B=[s=0,0,0,0].concat(b).filter(v=>v-1023||!(S+=++s)).slice(-18)),R()):(P=p,D(b)),E||setTimeout(_,T)})(),
onkeydown=e=>(k=e.keyCode-38)-2?k-1&&~k?k?0:A(p=P.map((v,i)=>i%2?P[2]-P[i-1]+P[3]:P[2]+P[i+1]-P[3]))?0:P=p:A(p=P.map((v,i)=>i%2?v:v+k))?0:P=p:T=20