.media-scroller{
    margin-left: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    display: grid;
    gap: 1%;
    grid-auto-flow: column;
    grid-auto-columns: 30%;
    padding: 30px;
    
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    text-align: center;
    
  }
  .media-scroller-with-groups{
    display: grid;
    border: 10px solid white;
    
    overflow-x: auto;
    grid-auto-columns: 100%;
    padding: 10px;
    
  
  }
  .media-group{
    display: grid;
    text-align: center;
    gap: 1%;
    grid-auto-flow: column;
    margin-bottom: 50px;
    overscroll-behavior-inline: contain;
    
    
  }
  .media-element{
    margin-top: 50px;
    display: grid;
    grid-template-rows: min-content;
    gap: 1%;
    padding: 10px;
    background: linear-gradient(
      to right, 
      rgb(218, 28, 15), 
      hsl(204 100% 59%)
    );
    border-radius: 50px;
    box-shadow: 0px 0px 10px 1px gray
  }
  .media-element p{
    color: rgb(255, 255, 255);
  }
  .media-element img{
    border-radius: 30px;
    inline-size: 100%;
    aspect-ratio: 8/2;
    object-fit: cover;
  }
  .snaps-inline{
    scroll-snap-type: inline mandatory ;
    scroll-padding-inline: 0;
  }
  .snaps-inline > * { 
    scroll-snap-align: start;
  }