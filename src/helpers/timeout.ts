export function timeout(s:number):Promise<never> {
    return  new Promise((_,reject)=>{
        setTimeout(()=>{
            reject(
                new Error(`Request took too long! Timeout after ${s} seconds`)
            )
        }, s * 1000)
    });
}