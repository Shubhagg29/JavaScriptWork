console.log("Async Await")

const loadData = async ()=>{

    const url = "https://api.github.com/users";
    const resp = await fetch(url);
    console.log("RESR",resp)
    const users = await resp.json();
   console.log('resolved',users)
    return users;
    
}

let data = loadData();
console.log("JAi Shre Ram")
data.then((abc)=> console.log(abc));
console.log(data)
   loadData();//