const addToLocaleStorage=(data)=>{
    localStorage.setItem("Tasks",JSON.stringify(data))
}
const getTasks=()=>{
    if("Tasks" in localStorage && (localStorage.getItem("Tasks") !== "")){
        return JSON.parse(localStorage.getItem("Tasks"))
    }else{
        return [[],[]];
    }
}
export {addToLocaleStorage,getTasks}