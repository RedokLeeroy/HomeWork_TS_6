export const addItemSelector = (state: { items: {name:string,phone:string,id:string}[] }) => state.items;
export const filterItemSelector = (state: {filter: string}) => state.filter;
