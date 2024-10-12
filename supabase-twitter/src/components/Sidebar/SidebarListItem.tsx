import React from 'react'

type Props = {
  item: string, 
  currentView: string
}

const SidebarListItem = ({item, currentView} : Props) => {
  let focusStyle = "text-sky-500 bg-slate-500";
  // if (currentView === item) {
  //   focusStyle = true;
  // }
  return (
    <li key={item} className={`text-lg ${currentView === item ? focusStyle : "text-white hover:bg-slate-700"} font-bold p-3 pr-32 mb-3 rounded-xl cursor-pointer`}>{item}</li>
  )
}

export default SidebarListItem

