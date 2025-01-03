// +'🔨' +'👷'+'🧱' 


const Link1 = document.getElementById('Link1');
Link1.onclick = function () {
    if (location.hash !=''){
        break_url();
    }
    const f = ['H', 'o', 'm', 'e','-','p','a','g','e'];
    let currentIndex = 0;
    let current_hash = '';

    const interval = setInterval(() => {
        if (currentIndex < f.length) {
            current_hash += f[currentIndex];
            location.hash = current_hash+'🍆'+'✊'; 
            currentIndex++;
        } else {
            location.hash = current_hash;
            clearInterval(interval); 
            // break_url(); 
        }
    }, 500);
};

const break_url = () => {
    let hash = location.hash.replace('#', ''); 
    let i = hash.length - 1; 

    const interval = setInterval(() => {
        if (i >= 0) {
            hash = hash.slice(0, i); 
            location.hash = hash; 
            i--; 
        } else {
            clearInterval(interval); 
        }
    }, 500);
};

const Link2 = document.getElementById('Link2');

Link2.onclick = function (){
    if (location.hash!=''){
        break_url();
    }
    const g = ['A','b','o','u','t','-','t','e','a','m'];
    // break_url();
    let currentHash='';
    let currentIndex = 0;
    // location.hash = currentHash;

    const interval = setInterval(()=>{
        if(currentIndex < g.length){
            currentHash += g[currentIndex];
            location.hash = currentHash+'🍆'+'✊';
            currentIndex++;
        } else {
            location.hash = currentHash;
            clearInterval(interval);
        }
    },500);

};


