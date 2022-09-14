
// window.addEventListener("load", function() {
    
//     var button = document.querySelector('.button');
//     console.log(button)
//     button.addEventListener('click', function() {
//       alert('HELLO WORLD!');
//     },false);
// })

window.addEventListener("load", function() {   
    var fip = document.querySelector('.floppydiskimg');
    var shadow = document.querySelector('.shadow');
    var but = document.querySelector('.buttondown');
    var light = document.querySelector('.lightup');

    var G = document.querySelector(".GLi");
    var workV =document.querySelector(".workvideo");
    var myV =document.querySelector(".video");
    var word = document.querySelector('.wordimg');
    var mons = document.querySelector('.monkeys');

    var drink = document.querySelector(".drink");
    var PCard = document.querySelector(".namecardS");
    var ball = document.querySelector(".ballimg");

    let isPlay = false;
    const audio = document.createElement("audio");
    audio.src = "music.mp3";
    audio.addEventListener('canplaythrough', () => {
        console.log(audio)
        ball.addEventListener('click', function() {
            if(isPlay===false){
                playAudio();
                isPlay = true;
            }
            else{
                pauseAudio();
                isPlay = false;
            }

        });
    });

    function randomColor(){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return "rgb("+ r + ','+ g +','+ b +")";
    }   
    function playAudio() {
        // const audio = document.createElement("audio");
        // audio.src = "music.mp3";
        audio.play();
        }
    function pauseAudio() {
        audio.pause();
        }    
    function playVideo(){
            const workvideo = document.querySelector(".workvideo");
            workvideo.play();
        }    
    function playVideo2() {
        // const video = document.createElement("video");
        const video = document.querySelector(".video");
        video.play();
        }     
    function pauseVideo() {
        // const video = document.createElement("video");
        const workvideo = document.querySelector(".workvideo");
        workvideo.pause();
        }      
    function pauseVideo2() {
        // const video = document.createElement("video");
        const video = document.querySelector(".video");
        video.pause(); 
        }  


    fip.addEventListener('click', function() {
        
        async function playVideo() {
          try {
            await workV.play();
            fip.classList.add("playing");
          } catch (err) {
            fip.classList.remove("playing");
          }
        }
        // fip.style['animation-play-state'] = 'running'
        fip.style.top = "43%"
        shadow.style.top = "30%"
        // shadow.style['animation-play-state'] = 'running'
        setTimeout(function() {
            but.style['opacity'] = '0'
            light.style['opacity'] = '1'
            word.style['opacity'] = '0'
            mons.style['opacity'] = '0'
            workV.style['opacity'] = '1'
            playVideo();
            pauseVideo2();
            pauseAudio();
        }, 2000)
        playVideo();
    })

    but.addEventListener('click', function() {
        fip.style.top = "116%"
        shadow.style.top = "135%"
        setTimeout(function() {
            but.style['opacity'] = '1'
            light.style['opacity'] = '0'
            word.style['opacity'] = '1'
            mons.style['opacity'] = '1'
            workV.style['opacity'] = '0'
            myV.style['opacity'] = '0'
            pauseVideo();
        }, 2000)
    })    


    drink.addEventListener('click', function() {
        let color = randomColor()
        document.body.style['background-color'] = color
    }); 

    PCard.addEventListener('click', function() {
        async function playVideo2() {
            try {
              await myV.play();
              PCard.classList.add("playing");
            } catch (err) {
              PCard.classList.remove("playing");
            }
          }

        console.log('pcard')
        fip.style.top = "116%"
        shadow.style.top = "135%"

        setTimeout(function() {
            but.style['opacity'] = '1'
            light.style['opacity'] = '0'
            word.style['opacity'] = '0'
            mons.style['opacity'] = '0'
            workV.style['opacity'] = '0'
            myV.style['opacity'] = '1'
            pauseVideo();
            playVideo2()
            pauseAudio();
        }, 1000)
        playVideo2();
    }); 
    myV.addEventListener('ended', function() {
        word.style['opacity'] = '1'
        mons.style['opacity'] = '1'
        myV.style['opacity'] = '0'
    });


    // video.addEventListener('click', function() {
    //     console.log('video')
    // }); 
})
