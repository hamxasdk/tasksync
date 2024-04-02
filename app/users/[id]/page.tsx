import React from 'react'

interface params{
    id:string
}

const UserIDPage = ({params}:{params:{
    id:string
}}) => {
  return (
    <div>UserIDPage {params.id}</div>
  )
}

export default UserIDPage