export function Timeout(s:number):Promise<never> {
    return  new Promise((_,reject)=>{
        setTimeout(()=>{
            reject(
                new Error(`Request took oo long! Timeout after ${s * 1000}`)
            )
        }, s * 1000)
    });
}