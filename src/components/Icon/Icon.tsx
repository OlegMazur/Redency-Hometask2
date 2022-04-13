import React, { FC } from 'react'
import {  ShoppingCartOutlined,BulbOutlined,CommentOutlined,CloudSyncOutlined } from '@ant-design/icons';
interface IconProps{
    category:string
}
export const IconSelect:FC<IconProps> = ({category}) => {
  return (
       <div>
            {category=="task"?<ShoppingCartOutlined/>:category=="idea"?<BulbOutlined />:category=="quote"?<CommentOutlined />:category=="randomThougth"?<CloudSyncOutlined />:null}
        </div>
  )
}
