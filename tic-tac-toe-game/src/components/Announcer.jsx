import React from "react"


export default function Announcer(){  
  const announce = (type) => {
    switch(type){
        case PLAYERO_WON:
            return 'Player <span class="playerO">O</span> Won 🏁';
            break;
        case PLAYERX_WON:
            return  'Player <span class="playerX">X</span> Won 🏁';
            break;
        case TIE:
            return 'Tie 🙂';
    }
    announcer.classList.remove('hide');
}
      return (
        <section id="announcer"></section>
      )
}