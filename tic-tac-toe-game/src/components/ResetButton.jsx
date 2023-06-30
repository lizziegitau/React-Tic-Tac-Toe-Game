import React from "react"

export default function ResetButton(getBoard){

      
  return (
    <div>
       <section className="controls">
            <br/>
            <br/>
            <button id="reset" onClick={getBoard}>PLAY AGAIN</button>
            <button>
              <a href="about.html" className="help">
                Help
              </a>
            </button>
        </section>

    </div>
  )

 
 }
 