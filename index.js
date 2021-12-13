function primenumber(n){
  let arr=[]
  let output=[]
  for(let i=0;i<=n;i++){
    arr[i]=true;
  }
  for(let j=0;j<=n;j=+2){
    arr[j]=false;
    }
    for(let i=3;i<math.sqrt(n);i=i+2){
    if(arr[i]==true){
   for(let j=i*i;j<n;j=j+i){
    arr[j]=false;
    }
  }
    }
  for(let i=2;i<n;i++){
    if(arr[i]){
      ouput.push(i)
    }
  }
  console.log(output)
}
primenumber(1000)