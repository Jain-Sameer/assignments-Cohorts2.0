let ans = 0;

function increment_display(){
    setTimeout(() => {
        ans++
        console.log(ans);
        increment_display();
    },1000);
}

increment_display()

