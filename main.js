const r_r = document.getElementById("rrr");
const c_c = document.getElementById("ccc");
const p_p = document.getElementById("ppp");

r_r.addEventListener("click",function(){
    rpc(0);
});

c_c.addEventListener("click",function(){
    rpc(1);
});

p_p.addEventListener("click",function(){
    rpc(2);
});
/**
 * グー=0
 * チョキ=1
 * パー=2
 * 
 * 勝ち=2
 * 負け=1
 * 引き分け=0
 */

function rpc(p_hand){
    const e_hand = Math.floor(Math.random()*3);

    console.log("勝ち:2  負け:1  引き分け:0");
    console.log("自分の手は：" + p_hand);
    console.log("相手の手は：" + e_hand);
    console.log("結果は：" + (p_hand - e_hand + 3) % 3 );

    switch((p_hand - e_hand + 3) % 3){
        case 2:
            console.log("勝ち");
            break;
        case 1:
            console.log("負け");
            break;
        case 0:
            console.log("引き分け");
            break;
    }
}