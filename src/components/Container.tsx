import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="rounded-[4px] p-1 shadow-md bg-white">
      {children}
    </div>
  )
}

export default Container