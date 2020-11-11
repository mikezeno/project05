import React from 'react'

export const AskButton = (
   <>
      <li id="askButton-li" className="navrow"><button id="askButton" type="button" class="main-button btn btn-primary btn-lg btn-block" onClick={() => { window.location.pathname = '/app/question/add' }}>Ask</button></li>
   </>
)

