

interface IState{
  add: {name:string, phone:string, id:string}[],
  filter:string
}


export const itemsInitialState = {
  add: [],
  filter: '',
} as IState

