import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent
    content={title}
    position="BottomCenter"
  >
    <button 
      type="button" 
      onClick={customFunc}
      style={{ color }}
      className='
        p-3
        text-xl
        relative
        rounded-full
        hover:bg-light-gray'
    >
      <span 
        style={{ background: dotColor }}
        className='
          h-2
          w-2
          top-2
          right-2
          absolute
          inline-flex
          rounded-full'
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {  
    isClicked, 
    screenSize, 
    activeMenu, 
    handleClick,
    setIsClicked, 
    setActiveMenu,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener(
      'resize', handleResize
    )
  }, []);

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    } else{
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div 
    className='
      p-2
      flex
      md:mx-6
      relative
      justify-between'
    >
      <NavButton 
        title="Menu" 
        customFunc={() => 
          setActiveMenu((prevActiveMenu) => 
          !prevActiveMenu)
        }
        color="blue" 
        icon={<AiOutlineMenu/>}
      />
      <div className='flex'>
        <NavButton 
          title="Cart" 
          customFunc={() => handleClick('cart')}
          color="blue" 
          icon={<FiShoppingCart/>}
        />
        <NavButton 
          title="Chat" 
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')}
          color="blue" 
          icon={<BsChatLeft/>}
        />
        <NavButton 
          title="Notifications" 
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')}
          color="blue" 
          icon={<RiNotification3Line/>}
        />
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
        >
          <div
            className='
            p-1
            flex
            gap-2
            rounded-lg
            items-center
            cursor-pointer
            hover:bg-light-gray'
            onClick={() => handleClick
            ('userProfile')}
          >
            <img
              className="
                w-8 
                h-8
                rounded-full"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span 
                className='
                  text-14
                  text-gray-400'
              >Hi, </span> {' '}
              <span 
                className='
                  ml-1 
                  text-14
                  font-bold
                  text-gray-400'
              >Michel</span>
            </p>
              <MdKeyboardArrowDown 
                className='
                  text-14
                  text-gray-400'
            />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar
