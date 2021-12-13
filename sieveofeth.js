function primenumber(n)
{
    const is_prime = new Array(n+1);

    for(let i=2; i<=n; i++)
    {
        is_prime[i]=true;
    }

    for(let i=2; i<=n; i++)
    {
        if(is_prime[i])
        {
            for(let j=i*2; j<=n; j+=i){
                is_prime[j]=false;
            }
        }
    }
    return is_prime;
}

console.log(output);
primenumber(2 <= n <= 2^64)