export const STAGE__WIDTH = 12;
export const STAGE__HEIGHT = 20;

export const createStage = () => 
  Array.from(Array(STAGE__HEIGHT), () =>
    new Array(STAGE__WIDTH).fill([0, 'clear'])
  )
