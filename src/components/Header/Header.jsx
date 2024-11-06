import React from 'react'
import './Header.scss'
import Card from '../Main/Card'
import Title from '../Title/Title'

const Header = () => {
  return (
    <>
    <Title name='Rapper'/>
    <div className="wrap">
       <Card title='Снуп дог' img='https://sun9-7.userapi.com/impg/S5o75NFAW_uc41OFW1JQhf9gf7jXQ09uTjvQPw/ecS-T7Z8wyk.jpg?size=1079x1080&quality=95&sign=05dfa74044995bd0030ed1b684070073&c_uniq_tag=ykrNDDHi-peCZhuMSvd-6XCHgN9-4n0BrhmmT0iv_Qw&type=album'/>
       <Card title='Тревис Скотт'  img='https://avatars.dzeninfra.ru/get-zen_doc/3384370/pub_604d18ec0a7d51654a9ab81e_604d1a3f126a3d455a411391/scale_1200' />
       <Card/>
    </div>
    </>
  )
}

export default Header