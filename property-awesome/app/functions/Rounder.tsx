export function Rounder(n: number){
    var prefixes = [{n: 1000000000, p: "B"}, {n: 1000000, p: "M"}, {n: 1000, p: "K"}, {n: 1, p: ""}];
    for(var i of prefixes){
        if(n/i.n < 1) continue;
        return (n/i.n).toFixed(1) + i.p;
    }
}
export default Rounder;